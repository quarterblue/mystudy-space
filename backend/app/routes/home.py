import os
from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def health_status():
    return {"status": "available", "environment": os.getenv("ENV"), "version": "1.0.0"}
