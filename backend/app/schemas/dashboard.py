from pydantic import BaseModel

class DashboardSummary(BaseModel):
    total_revenue: float
    total_expense: float
    net_profit: float
    total_budget: float
    remaining_budget: float