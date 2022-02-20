from pydantic import BaseModel, EmailStr
from typing import Optional


class UserBase(BaseModel):
    email: Optional[EmailStr] = None
    full_name: Optional[str] = None
    plushie: Optional[int] = None


class UserCreate(UserBase):
    email: EmailStr
    password: str


class UserInDBBase(UserBase):
    id: Optional[int] = None

    class Config:
        orm_mode = True


class User(UserInDBBase):
    pass


class UserInDB(UserInDBBase):
    hashed_password: str
