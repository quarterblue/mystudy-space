from typing import Any, List

from fastapi import APIRouter, Body, Depends, HTTPException
from app import models, schemas

from sqlalchemy.orm import Session
from core import security
from fastapi.encoders import jsonable_encoder

from app.routes import deps

timeline_router = APIRouter()


@timeline_router.post("/", response_model=schemas.Timeline)
def create_timeline(
    *,
    db: Session = Depends(deps.get_db),
    timeline_in: schemas.TimelineCreate,
    current_user: models.User = Depends(security.get_current_user),
) -> Any:
    """Create a new timeline"""

    timeline_data = jsonable_encoder(timeline_in)
    db_timeline = models.Timeline(**timeline_data, user_id=current_user.id)
    db.add(db_timeline)
    db.commit()
    db.refresh(db_timeline)

    return db_timeline


@timeline_router.get("/", response_model=List[schemas.Timeline])
def get_timelines(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: models.User = Depends(security.get_current_user),
) -> Any:
    """Get all timelines"""
    db_query = (
        db.query(models.Timeline)
        .filter(models.Timeline.user_id == current_user.id)
        .offset(skip)
        .limit(limit)
        .all()
    )

    print(db_query)
    return db_query
