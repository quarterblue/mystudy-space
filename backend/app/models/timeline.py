
from sqlalchemy import Column, Integer, String, DateTime
from app.db.base_class import Base


class Timeline(Base):
    id = Column(Integer, primary_key=True, index=True)
    date_time = Column(DateTime)
    comment = Column(String)
