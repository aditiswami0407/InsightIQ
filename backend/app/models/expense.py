from sqlalchemy import Column, Integer, String, Float, Date
from app.database import Base


class Expense(Base):
    __tablename__ = "expenses"

    id = Column(Integer, primary_key=True, index=True)
    category = Column(String(100), nullable=False)
    description = Column(String(255))
    department = Column(String(100))
    amount = Column(Float, nullable=False)
    payment_method = Column(String(50))
    expense_date = Column(Date)