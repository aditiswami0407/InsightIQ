from sqlalchemy import Column, Integer, String, Float
from app.database import Base

class Revenue(Base):
    __tablename__ = "revenue"

    id = Column(Integer, primary_key=True, index=True)
    client_name = Column(String(100))
    amount = Column(Float)
    month = Column(String(20))
    year = Column(Integer)