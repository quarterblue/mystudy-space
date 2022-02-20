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
    """ Create a new timeline """

    timeline_data = jsonable_encoder(timeline_in)
    db_timeline = models.Timeline(**timeline_data, user_id=current_user.id)
    db.add(db_timeline)
    db.commit()
    db.refresh(db_timeline)

    return db_timeline
