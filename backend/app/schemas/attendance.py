from datetime import date, time
from pydantic import BaseModel


class AttendanceBase(BaseModel):
    employee_id: int
    attendance_date: date
    status: str
    check_in: time | None = None
    check_out: time | None = None


class AttendanceCreate(AttendanceBase):
    pass


class AttendanceUpdate(AttendanceBase):
    pass


class AttendanceResponse(AttendanceBase):
    id: int

    class Config:
        from_attributes = True