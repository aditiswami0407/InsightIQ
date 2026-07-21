from sqlalchemy import Column, Integer, String, Float
from app.database import Base

class Employee(Base):
    __tablename__ = "employees"

    id = Column(Integer, primary_key=True, index=True)
    employee_name = Column(String(100), nullable=False)
    email = Column(String(100), unique=True)
    department = Column(String(100))
    salary = Column(Float)