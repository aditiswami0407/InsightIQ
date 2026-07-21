from pydantic import BaseModel, Field


class BusinessHealthRequest(BaseModel):
    revenue_growth: float = Field(..., ge=0, le=100)
    profit_growth: float = Field(..., ge=0, le=100)
    employee_productivity: float = Field(..., ge=0, le=100)
    cost_control: float = Field(..., ge=0, le=100)
    customer_satisfaction: float = Field(..., ge=0, le=100)