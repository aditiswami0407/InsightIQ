from pydantic import BaseModel

class RevenueCreate(BaseModel):
    client_name: str
    amount: float
    month: str
    year: int


class RevenueResponse(RevenueCreate):
    id: int

    class Config:
        from_attributes = True