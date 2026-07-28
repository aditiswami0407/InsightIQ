from datetime import date
from pydantic import BaseModel


class LeaveBase(BaseModel):
    employee_id: int
    leave_type: str
    start_date: date
    end_date: date
    reason: str
    status: str = "Pending"


class LeaveCreate(LeaveBase):
    pass


class LeaveUpdate(LeaveBase):
    pass


class LeaveResponse(LeaveBase):
    id: int

    class Config:
        from_attributes = True