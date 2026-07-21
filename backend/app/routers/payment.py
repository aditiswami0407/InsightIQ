from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database import get_db
from app.models.payment import Payment
from app.schemas.payment import PaymentCreate

router = APIRouter(
    prefix="/payment",
    tags=["Payment Management"]
)

@router.post("/")
def add_payment(payment: PaymentCreate, db: Session = Depends(get_db)):

    new_payment = Payment(**payment.model_dump())

    db.add(new_payment)
    db.commit()
    db.refresh(new_payment)

    return {
        "message": "Payment Added Successfully",
        "data": new_payment
    }

@router.get("/")
def get_all_payments(db: Session = Depends(get_db)):
    return db.query(Payment).all() 

@router.get("/{id}")
def get_payment(id: int, db: Session = Depends(get_db)):
    return db.query(Payment).filter(Payment.id == id).first()

@router.put("/{id}")
def update_payment(id: int, payment: PaymentCreate, db: Session = Depends(get_db)):

    existing = db.query(Payment).filter(Payment.id == id).first()

    if not existing:
        return {"message": "Payment Not Found"}

    existing.client_name = payment.client_name
    existing.invoice_number = payment.invoice_number
    existing.amount = payment.amount
    existing.payment_date = payment.payment_date
    existing.payment_status = payment.payment_status

    db.commit()

    return {"message": "Payment Updated Successfully"}

@router.delete("/{id}")
def delete_payment(id: int, db: Session = Depends(get_db)):

    payment = db.query(Payment).filter(Payment.id == id).first()

    if not payment:
        return {"message": "Payment Not Found"}

    db.delete(payment)
    db.commit()

    return {"message": "Payment Deleted Successfully"}
@router.get("/summary/pending")
def pending_payments(db: Session = Depends(get_db)):

    pending = (
        db.query(func.sum(Payment.amount))
        .filter(Payment.payment_status == "Pending")
        .scalar()
    ) or 0

    return {
        "Pending Amount": pending
    } 
@router.get("/summary/paid")
def paid_payments(db: Session = Depends(get_db)):

    paid = (
        db.query(func.sum(Payment.amount))
        .filter(Payment.payment_status == "Paid")
        .scalar()
    ) or 0

    return {
        "Paid Amount": paid
    }                      