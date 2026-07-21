from pydantic import BaseModel


class RiskDetectionRequest(BaseModel):
    revenue_growth: float
    profit_growth: float
    expense_growth: float