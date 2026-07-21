from sqlalchemy import Column, Integer, String, Float, Date
from app.database import Base

class Payment(Base):
    __tablename__ = "payments"

    id = Column(Integer, primary_key=True, index=True)

    client_name = Column(String(100), nullable=False)

    invoice_number = Column(String(50), unique=True, nullable=False)

    amount = Column(Float, nullable=False)

    payment_date = Column(Date)

    payment_status = Column(String(30), default="Pending")