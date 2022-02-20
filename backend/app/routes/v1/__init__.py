from fastapi import APIRouter

from .user import user_router
from .auth import auth_router
from .timeline import timeline_router

sub_router = APIRouter()
sub_router.include_router(user_router, prefix="/users", tags=["User"])
sub_router.include_router(auth_router, prefix="/auth", tags=["Auth"])
sub_router.include_router(
    timeline_router, prefix="/timeline", tags=["Timeline"])

__all__ = ["sub_router"]
