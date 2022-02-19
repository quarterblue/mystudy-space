import os
from fastapi import APIRouter

user_router = APIRouter()


@user_router.get("/health")
async def health_status():
    return {
        "status": "available",
        "environment": os.getenv("ENV"),
        "version": "1.0.0"
    }
