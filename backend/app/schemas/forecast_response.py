from pydantic import BaseModel

class RevenueForecastResponse(BaseModel):
    predicted_next_month: float
    trend: str