from pydantic import BaseModel, Field


class CostSuggestionRequest(BaseModel):
    marketing: float = Field(..., ge=0)
    operations: float = Field(..., ge=0)
    salary: float = Field(..., ge=0)
    utilities: float = Field(..., ge=0)