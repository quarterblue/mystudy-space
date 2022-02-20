from passlib.context import CryptContext
from sqlalchemy.orm import Session
from typing import Any, List, Optional, Union

from app.routes import deps
from fastapi import APIRouter, Body, Depends, HTTPException

from app import models, schemas
from core.config import config

from datetime import datetime, timedelta

from jose import jwt

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

ALGORITHM = "HS256"


def get_by_email(db: Session, *, email: str) -> Optional[models.User]:
    return db.query(models.User).filter(models.User.email == email).first()


def create_access_token(
    subject: Union[str, Any], expires_delta: timedelta = None
) -> str:
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(
            minutes=config.ACCESS_TOKEN_EXPIRE_MINUTES
        )
    to_encode = {"exp": expire, "sub": str(subject)}
    encoded_jwt = jwt.encode(
        to_encode, config.SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def authenticate(db: Session, *, email: str, password: str) -> Optional[models.User]:
    user = get_by_email(db, email=email)
    if not user:
        return None
    if not verify_password(password, user.hashed_password):
        return None
    return user


def get_current_user(
    db: Session = Depends(deps.get_db), token: str = Depends(deps.reusable_oauth2)
) -> models.User:
    try:
        payload = jwt.decode(
            token, config.SECRET_KEY, algorithms=[ALGORITHM]
        )
        token_data = schemas.TokenPayload(**payload)
    except (jwt.JWTError, ValidationError):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Could not validate credentials",
        )

    user = db.query(models.User).filter(
        models.User.id == token_data.sub).first()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


def verify_password(plain: str, hashed: str) -> bool:
    return pwd_context.verify(plain, hashed)


def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)
