from pydantic import BaseModel

class RiskDetectionResponse(BaseModel):
    risk_level: str
    risk_reason: str