from fastapi import APIRouter

from .user import user_router
from .auth import auth_router

sub_router = APIRouter()
sub_router.include_router(user_router, prefix="/users", tags=["User"])
sub_router.include_router(auth_router, prefix="/auth", tags=["Auth"])

__all__ = ["sub_router"]
