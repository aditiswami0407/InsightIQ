from datetime import date
from pydantic import BaseModel


class SalaryBase(BaseModel):
    employee_id: int
    basic_salary: float
    bonus: float = 0
    deduction: float = 0
    net_salary: float
    payment_date: date


class SalaryCreate(SalaryBase):
    pass


class SalaryUpdate(SalaryBase):
    pass


class SalaryResponse(SalaryBase):
    id: int

    class Config:
        from_attributes = True