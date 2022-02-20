from typing import TYPE_CHECKING

from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from app.db.base_class import Base


class Plushie(Base):
    id = Column(Integer, primary_key=True, index=True)
    bear_name = Column(String)
    position_x = Column(Float)
    position_y = Column(Float)
