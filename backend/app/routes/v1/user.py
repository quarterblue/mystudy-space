import os
from typing import Any, List
from fastapi import APIRouter, Body, Depends, HTTPException
from app import models, schemas
from app.routes import deps
from sqlalchemy.orm import Session
from pydantic.networks import EmailStr
from core.security import get_password_hash, ALGORITHM
from core.config import config
from pydantic import ValidationError

from jose import jwt

user_router = APIRouter()


@user_router.post("/", response_model=schemas.User)
def create_user(
    *,
    db: Session = Depends(deps.get_db),
    password: str = Body(...),
    email: EmailStr = Body(...),
    full_name: str = Body(None),
) -> Any:
    """Create a new user"""

    user = db.query(models.User).filter(models.User.email == email).first()

    if user:
        raise HTTPException(
            status_code=400, detail="The user with this username already exists."
        )

    user = models.User(
        email=email,
        hashed_password=get_password_hash(password),
        full_name=full_name,
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user


@user_router.get("/current", response_model=schemas.User)
def get_current_user(
    db: Session = Depends(deps.get_db), token: str = Depends(deps.reusable_oauth2)
) -> Any:
    """Get current user."""
    try:
        payload = jwt.decode(token, config.SECRET_KEY, algorithms=[ALGORITHM])
        token_data = schemas.TokenPayload(**payload)
    except (jwt.JWTError, ValidationError):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Could not validate credentials",
        )
    # user = crud.user.get(db, id=token_data.sub)
    user = db.query(models.User).filter(models.User.id == token_data.sub).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
