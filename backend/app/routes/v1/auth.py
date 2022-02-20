from fastapi import APIRouter, Body, Depends, HTTPException
from app.routes import deps
from datetime import timedelta
from typing import Any, List
from core.security import authenticate, create_access_token

from app import models, schemas
from core.config import config
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm

auth_router = APIRouter()


@auth_router.post("/access-token", response_model=schemas.Token)
def auth_access_token(
    db: Session = Depends(deps.get_db), form_data: OAuth2PasswordRequestForm = Depends()
) -> Any:
    user = authenticate(
        db, email=form_data.username, password=form_data.password
    )

    if not user:
        raise HTTPException(
            status_code=400, detail="Incorrect email or password")

    access_token_expires = timedelta(
        minutes=config.ACCESS_TOKEN_EXPIRE_MINUTES)

    return {
        "access_token": create_access_token(
            user.id, expires_delta=access_token_expires
        ),
        "token_type": "bearer",
    }
