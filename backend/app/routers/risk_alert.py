from fastapi import APIRouter

from app.services.risk_service import risk_analysis
from app.schemas.risk_detection_request import RiskDetectionRequest
from app.schemas.risk_detection_response import RiskDetectionResponse

router = APIRouter(
    prefix="/risk",
    tags=["Risk Analysis"]
)

@router.post("/", response_model=RiskDetectionResponse)
def get_risk(data: RiskDetectionRequest):
    return risk_analysis(data)