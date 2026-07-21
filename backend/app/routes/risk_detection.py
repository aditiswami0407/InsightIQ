from fastapi import APIRouter

from app.schemas.risk_detection import (
    RiskDetectionRequest
)

from app.schemas.risk_detection_response import (
    RiskDetectionResponse
)

from app.services.risk_service import detect_risk

router = APIRouter()


@router.post(
    "/",
    response_model=RiskDetectionResponse
)
def risk_detection(
    request: RiskDetectionRequest
):

    return detect_risk(request)