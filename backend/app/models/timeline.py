from typing import TYPE_CHECKING

from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from app.db.base_class import Base

if TYPE_CHECKING:
    from .user import User


class Timeline(Base):
    id = Column(Integer, primary_key=True, index=True)
    date_time = Column(DateTime, nullable=False)
    type = Column(String, nullable=True)
    mood = Column(String, nullable=True)
    set_length = Column(Integer, nullable=True)
    session_length = Column(Integer, nullable=True)
    plushie_index = Column(Integer, nullable=True)
    user_id = Column(Integer, ForeignKey("user.id"))
    user = relationship("User", back_populates="timelines")
