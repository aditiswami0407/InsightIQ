from datetime import date
from typing import Optional
from pydantic import BaseModel

class PaymentCreate(BaseModel):
    client_name: str
    invoice_number: str
    amount: float
    payment_date: Optional[date] = None
    payment_status: str


class PaymentResponse(PaymentCreate):
    id: int

    class Config:
        from_attributes = True