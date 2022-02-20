from typing import Optional
from datetime import datetime

from pydantic import BaseModel


class TimelineBase(BaseModel):
    date_time: datetime
    type: str
    mood: str
    set_length: int
    session_length: int
    plushie_index: int


class TimelineCreate(TimelineBase):
    pass


class TimelineInDBBase(TimelineBase):
    id: int
    user_id: int

    class Config:
        orm_mode = True


class Timeline(TimelineInDBBase):
    pass
