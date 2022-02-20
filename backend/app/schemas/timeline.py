from typing import Optional
from datetime import datetime

from pydantic import BaseModel


class TimelineBase(BaseModel):
    pass


class TimelineCreate(TimelineBase):
    date_time: datetime
    mood: str
    session_length: int
    plushie_index: int


class TimelineInDBBase(TimelineBase):
    id: int
    date_time: datetime
    mood: str
    session_length: int
    plushie_index: int
    user_id: int

    class Config:
        orm_mode = True


class Timeline(TimelineInDBBase):
    pass
