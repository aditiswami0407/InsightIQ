from fastapi import APIRouter
from sqlalchemy import func

from app.database import SessionLocal
from app.models.revenue import Revenue
from app.models.expense import Expense
from app.models.employee import Employee
from app.models.client import Client

router = APIRouter()


@router.get("/summary")
def dashboard_summary():

    db = SessionLocal()

    try:
        # Total Revenue
        total_revenue = (
            db.query(func.coalesce(func.sum(Revenue.amount), 0))
            .scalar()
        )

        # Total Expenses
        total_expenses = (
            db.query(func.coalesce(func.sum(Expense.amount), 0))
            .scalar()
        )

        # Profit
        profit = total_revenue - total_expenses

        # Profit Margin
        if total_revenue > 0:
            profit_margin = (profit / total_revenue) * 100
        else:
            profit_margin = 0

        # Employee Count
        employees = (
            db.query(func.count(Employee.id))
            .filter(Employee.status == "Active")
            .scalar()
        )

        # Client Count
        clients = (
    db.query(func.count(Client.id))
    .scalar()
)

        return {
            "total_revenue": round(total_revenue, 2),
            "total_expenses": round(total_expenses, 2),
            "profit": round(profit, 2),
            "profit_margin": round(profit_margin, 2),
            "employees": employees,
            "clients": clients
        }

    finally:
        db.close()