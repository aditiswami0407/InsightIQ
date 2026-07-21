from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.revenue import Revenue
from app.models.expense import Expense
from app.models.budget import Budget
from app.models.payment import Payment


def generate_financial_summary(db: Session):
    revenue = db.query(func.sum(Revenue.amount)).scalar() or 0

    expense = db.query(func.sum(Expense.amount)).scalar() or 0

    budget = db.query(func.sum(Budget.allocated_budget)).scalar() or 0

    paid = (
        db.query(func.sum(Payment.amount))
        .filter(Payment.payment_status == "Paid")
        .scalar()
        or 0
    )

    pending = (
        db.query(func.sum(Payment.amount))
        .filter(Payment.payment_status == "Pending")
        .scalar()
        or 0
    )

    return {
        "total_revenue": revenue,
        "total_expense": expense,
        "net_profit": revenue - expense,
        "total_budget": budget,
        "paid_payments": paid,
        "pending_payments": pending,
    }