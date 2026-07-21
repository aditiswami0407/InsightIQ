from fastapi import APIRouter

from app.schemas.forecast_analysis import (
    ForecastAnalysisRequest
)

from app.services.forecast_ai_service import (
    analyze_forecast
)

router = APIRouter()


@router.post("/")
def forecast_analysis(
    request: ForecastAnalysisRequest
):

    analysis = analyze_forecast(
        request.predicted_revenue,
        request.trend
    )

    return {
        "analysis": analysis
    }