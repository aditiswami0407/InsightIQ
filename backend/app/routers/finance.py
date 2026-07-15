from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database import get_db
from app.models.revenue import Revenue
from app.models.expense import Expense
from app.models.budget import Budget

router = APIRouter(
    prefix="/finance",
    tags=["Finance Dashboard"]
)

@router.get("/total-revenue")
def total_revenue(db: Session = Depends(get_db)):

    revenue = db.query(func.sum(Revenue.amount)).scalar() or 0

    return {
        "Total Revenue": revenue
    }

@router.get("/total-expense")
def total_expense(db: Session = Depends(get_db)):

    expense = db.query(func.sum(Expense.amount)).scalar() or 0

    return {
        "Total Expense": expense
    }

@router.get("/net-profit")
def net_profit(db: Session = Depends(get_db)):

    revenue = db.query(func.sum(Revenue.amount)).scalar() or 0

    expense = db.query(func.sum(Expense.amount)).scalar() or 0

    return {
        "Net Profit": revenue - expense
    }

@router.get("/total-budget")
def total_budget(db: Session = Depends(get_db)):

    budget = db.query(func.sum(Budget.allocated_budget)).scalar() or 0

    return {
        "Total Budget": budget
    }

@router.get("/remaining-budget")
def remaining_budget(db: Session = Depends(get_db)):

    budget = db.query(func.sum(Budget.allocated_budget)).scalar() or 0

    expense = db.query(func.sum(Expense.amount)).scalar() or 0

    return {
        "Remaining Budget": budget - expense
    }

@router.get("/dashboard-summary")
def dashboard_summary(db: Session = Depends(get_db)):

    revenue = db.query(func.sum(Revenue.amount)).scalar() or 0

    expense = db.query(func.sum(Expense.amount)).scalar() or 0

    budget = db.query(func.sum(Budget.allocated_budget)).scalar() or 0

    return {

        "Total Revenue": revenue,

        "Total Expense": expense,

        "Net Profit": revenue - expense,

        "Total Budget": budget,

        "Remaining Budget": budget - expense
    }