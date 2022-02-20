import os
from typing import Any, List
from fastapi import APIRouter, Body, Depends, HTTPException
from app import models, schemas
from app.routes import deps
from sqlalchemy.orm import Session
from pydantic.networks import EmailStr

user_router = APIRouter()


@user_router.post("/", response_model=schemas.User)
def create_user(
    *,
    db: Session = Depends(deps.get_db),
    password: str = Body(...),
    email: EmailStr = Body(...),
    full_name: str = Body(None),
) -> Any:
    """ Create a new user """

    user = db.query(User).filter(User.email == email).first()

    if user:
        raise HTTPException(
            status_code=400,
            detail="The user with this username already exists."
        )

    user_obj = User(
        email=email,
        hashed_password=get_password_hash(password),
        full_name=full_name,
    )

    db.add(user_obj)
    db.commit()
    db.refresh(user_obj)

    return user
