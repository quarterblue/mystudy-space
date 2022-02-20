from sqlalchemy import Column, Integer, String, DateTime, Flaot


class Bears(Base):
    id = Column(Integer, primary_key=True, index=True)
    bear_name = Column(String)
    position_x = Column(Float)
    position_y = Column(Float)
