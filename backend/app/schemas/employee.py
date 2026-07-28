from datetime import date
from pydantic import BaseModel, EmailStr


class EmployeeBase(BaseModel):
    employee_name: str
    email: EmailStr
    department: str
    salary: float
    joining_date: date
    status: str


class EmployeeCreate(EmployeeBase):
    pass


class EmployeeUpdate(EmployeeBase):
    pass


class EmployeeResponse(EmployeeBase):
    id: int

    class Config:
        from_attributes = True