from fastapi import APIRouter

from app.schemas.business_health import BusinessHealthRequest
from app.schemas.business_health_response import BusinessHealthResponse

from app.services.health_service import (
    calculate_health_score,
    get_health_status,
    generate_recommendation
)

router = APIRouter()


@router.post(
    "/",
    response_model=BusinessHealthResponse
)
def business_health(
    request: BusinessHealthRequest
):

    score = calculate_health_score(request)

    status = get_health_status(score)

    recommendation = generate_recommendation(score)

    return {
        "health_score": round(score, 2),
        "status": status,
        "recommendation": recommendation
    }