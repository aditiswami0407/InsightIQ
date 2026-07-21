from pydantic import BaseModel


class BusinessHealthResponse(BaseModel):
    health_score: float
    status: str
    recommendation: str