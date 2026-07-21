from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.services.report_service import generate_financial_summary

from sqlalchemy import func
from app.models.revenue import Revenue
from app.models.expense import Expense

router = APIRouter(
    prefix="/reports",
    tags=["Reports"]
)

@router.get("/financial-summary")
def financial_summary(db: Session = Depends(get_db)):

    return generate_financial_summary(db)

from app.models.revenue import Revenue

@router.get("/revenue")
def revenue_report(db: Session = Depends(get_db)):

    return db.query(Revenue).all()

from app.models.expense import Expense

@router.get("/expense")
def expense_report(db: Session = Depends(get_db)):

    return db.query(Expense).all()
from app.models.budget import Budget

@router.get("/budget")
def budget_report(db: Session = Depends(get_db)):

    return db.query(Budget).all()
from app.models.payment import Payment

@router.get("/payment")
def payment_report(db: Session = Depends(get_db)):

    return db.query(Payment).all()

@router.get("/profit")
def profit_report(db: Session = Depends(get_db)):

    revenue = db.query(func.sum(Revenue.amount)).scalar() or 0

    expense = db.query(func.sum(Expense.amount)).scalar() or 0

    return {
        "Revenue": revenue,
        "Expense": expense,
        "Profit": revenue - expense
    }