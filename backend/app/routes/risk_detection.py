from fastapi import APIRouter
from app.schemas.risk_detection import RiskDetection

router = APIRouter()

@router.post("/")
def detect_risk(data: RiskDetection):

    if (
        data.revenue_growth < 5
        or data.profit_growth < 5
        or data.expense_growth > 20
    ):
        return {
            "risk": "High"
        }

    return {
        "risk": "Low"
    }