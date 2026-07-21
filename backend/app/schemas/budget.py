from pydantic import BaseModel

class BudgetCreate(BaseModel):
    department: str
    month: str
    year: int
    allocated_budget: float


class BudgetResponse(BudgetCreate):
    id: int

    class Config:
        from_attributes = True