from pydantic import BaseModel

class FinancialReport(BaseModel):
    total_revenue: float
    total_expense: float
    total_budget: float
    net_profit: float
    paid_payments: float
    pending_payments: float