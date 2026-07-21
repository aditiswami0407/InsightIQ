from pydantic import BaseModel


class ForecastAnalysisRequest(BaseModel):
    predicted_revenue: float
    trend: str