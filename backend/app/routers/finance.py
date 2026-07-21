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


@router.get("/total-revenue", summary="Get Total Revenue")
def total_revenue(db: Session = Depends(get_db)):
    revenue = db.query(func.sum(Revenue.amount)).scalar() or 0
    return {
        "Total Revenue": revenue
    }


@router.get("/total-expense", summary="Get Total Expense")
def total_expense(db: Session = Depends(get_db)):
    expense = db.query(func.sum(Expense.amount)).scalar() or 0
    return {
        "Total Expense": expense
    }


@router.get("/net-profit", summary="Get Net Profit")
def net_profit(db: Session = Depends(get_db)):
    revenue = db.query(func.sum(Revenue.amount)).scalar() or 0
    expense = db.query(func.sum(Expense.amount)).scalar() or 0

    return {
        "Net Profit": revenue - expense
    }


@router.get("/total-budget", summary="Get Total Budget")
def total_budget(db: Session = Depends(get_db)):
    budget = db.query(func.sum(Budget.allocated_budget)).scalar() or 0

    return {
        "Total Budget": budget
    }


@router.get("/remaining-budget", summary="Remaining Budget")
def remaining_budget(db: Session = Depends(get_db)):
    budget = db.query(func.sum(Budget.allocated_budget)).scalar() or 0
    expense = db.query(func.sum(Expense.amount)).scalar() or 0

    return {
        "Remaining Budget": budget - expense
    }


@router.get("/dashboard-summary", summary="Finance Dashboard Summary")
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


@router.get("/revenue-vs-expense", summary="Revenue vs Expense Comparison")
def revenue_vs_expense(db: Session = Depends(get_db)):
    revenue = db.query(func.sum(Revenue.amount)).scalar() or 0
    expense = db.query(func.sum(Expense.amount)).scalar() or 0

    return {
        "Revenue": revenue,
        "Expense": expense
    }


@router.get("/monthly-revenue", summary="Monthly Revenue")
def monthly_revenue(db: Session = Depends(get_db)):
    data = (
        db.query(
            Revenue.month,
            func.sum(Revenue.amount).label("total_revenue")
        )
        .group_by(Revenue.month)
        .all()
    )

    return data


@router.get("/monthly-expense", summary="Monthly Expense")
def monthly_expense(db: Session = Depends(get_db)):
    data = (
        db.query(
            Expense.month,
            func.sum(Expense.amount).label("total_expense")
        )
        .group_by(Expense.month)
        .all()
    )

    return data


@router.get("/department-budget", summary="Department-wise Budget")
def department_budget(db: Session = Depends(get_db)):
    data = (
        db.query(
            Budget.department,
            func.sum(Budget.allocated_budget).label("budget")
        )
        .group_by(Budget.department)
        .all()
    )
    return data


@router.get("/top-expenses", summary="Top 5 Highest Expenses")
def top_expenses(db: Session = Depends(get_db)):
    expenses = (
        db.query(Expense)
        .order_by(Expense.amount.desc())
        .limit(5)
        .all()
    )

    return expenses


@router.get("/business-health", summary="Business Health Score")
def business_health(db: Session = Depends(get_db)):
    revenue = db.query(func.sum(Revenue.amount)).scalar() or 0
    expense = db.query(func.sum(Expense.amount)).scalar() or 0

    if revenue == 0:
        score = 0
    else:
        score = ((revenue - expense) / revenue) * 100

    return {
        "Business Health Score": round(score, 2)
    }
