from pydantic import BaseModel


class CostSuggestionResponse(BaseModel):
    recommendations: str