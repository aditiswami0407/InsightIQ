from fastapi import APIRouter
from app.services.risk_service import risk_analysis

router = APIRouter()

@router.get("/")
def get_risk():

    return risk_analysis()