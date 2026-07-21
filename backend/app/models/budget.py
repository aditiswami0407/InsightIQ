from sqlalchemy import Column, Integer, String, Float
from app.database import Base

class Budget(Base):
    __tablename__ = "budgets"

    id = Column(Integer, primary_key=True, index=True)

    department = Column(String(100))
    month = Column(String(20))
    year = Column(Integer)

    allocated_budget = Column(Float)