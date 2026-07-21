from fastapi import APIRouter
from app.services.kpi_service import calculate_kpis

router = APIRouter()

@router.get("/")
def get_kpis():

    return calculate_kpis()