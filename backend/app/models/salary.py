from sqlalchemy import Column, Integer, Float, Date
from app.database import Base


class Salary(Base):
    __tablename__ = "salary"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, nullable=False)
    basic_salary = Column(Float, nullable=False)
    bonus = Column(Float, default=0)
    deduction = Column(Float, default=0)
    net_salary = Column(Float, nullable=False)
    payment_date = Column(Date, nullable=False)