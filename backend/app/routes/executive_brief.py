from fastapi import APIRouter
from app.services.executive_service import generate_brief

router = APIRouter()

@router.get("/")
def executive_brief():

    return generate_brief()