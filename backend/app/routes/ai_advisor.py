from fastapi import APIRouter
from app.services.llm_service import ask_ai

router = APIRouter()

@router.get("/")
def advisor():

    return ask_ai(
        "Why did profit decrease in a company when expenses increased and revenue remained constant?"
    )