from datetime import date
from pydantic import BaseModel


class ExpenseCreate(BaseModel):
    category: str
    description: str
    department: str
    amount: float
    payment_method: str
    expense_date: date


class ExpenseResponse(ExpenseCreate):
    id: int

    class Config:
        from_attributes = True