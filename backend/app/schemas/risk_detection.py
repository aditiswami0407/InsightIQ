from pydantic import BaseModel

class RiskDetection(BaseModel):
    revenue_growth: float
    profit_growth: float
    expense_growth: float
 
