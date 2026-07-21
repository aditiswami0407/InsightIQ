from fastapi import APIRouter

from app.schemas.forecast import RevenueForecastRequest
from app.schemas.forecast_response import RevenueForecastResponse

from app.services.forecast_service import predict_revenue

router = APIRouter()

@router.post(
    "/revenue",
    response_model=RevenueForecastResponse
)
def forecast_revenue(
    request: RevenueForecastRequest
):

    prediction = predict_revenue(
        request.revenues
    )

    if prediction > request.revenues[-1]:
        trend = "Growth"
    else:
        trend = "Decline"

    return {
        "predicted_next_month": round(prediction, 2),
        "trend": trend
    }