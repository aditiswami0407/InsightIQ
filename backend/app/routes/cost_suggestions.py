from fastapi import APIRouter

from app.schemas.cost_suggestion import CostSuggestionRequest
from app.schemas.cost_suggestion_response import CostSuggestionResponse

from app.services.cost_saving_service import generate_cost_suggestions

router = APIRouter()


@router.post(
    "/",
    response_model=CostSuggestionResponse
)
def cost_suggestions(
    request: CostSuggestionRequest
):

    suggestions = generate_cost_suggestions(
        request
    )

    return {
        "recommendations": suggestions
    }