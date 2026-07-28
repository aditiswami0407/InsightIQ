from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.salary import Salary
from app.schemas.salary import (
    SalaryCreate,
    SalaryUpdate,
    SalaryResponse
)

router = APIRouter(
    prefix="/salary",
    tags=["Salary"]
)


@router.post("/", response_model=SalaryResponse)
def create_salary(salary: SalaryCreate, db: Session = Depends(get_db)):
    new_salary = Salary(**salary.model_dump())
    db.add(new_salary)
    db.commit()
    db.refresh(new_salary)
    return new_salary


@router.get("/", response_model=list[SalaryResponse])
def get_salary(db: Session = Depends(get_db)):
    return db.query(Salary).all()


@router.get("/{salary_id}", response_model=SalaryResponse)
def get_salary_by_id(salary_id: int, db: Session = Depends(get_db)):
    salary = db.query(Salary).filter(Salary.id == salary_id).first()

    if not salary:
        raise HTTPException(status_code=404, detail="Salary record not found")

    return salary


@router.put("/{salary_id}", response_model=SalaryResponse)
def update_salary(
    salary_id: int,
    updated_salary: SalaryUpdate,
    db: Session = Depends(get_db)
):
    salary = db.query(Salary).filter(Salary.id == salary_id).first()

    if not salary:
        raise HTTPException(status_code=404, detail="Salary record not found")

    for key, value in updated_salary.model_dump().items():
        setattr(salary, key, value)

    db.commit()
    db.refresh(salary)

    return salary


@router.delete("/{salary_id}")
def delete_salary(salary_id: int, db: Session = Depends(get_db)):
    salary = db.query(Salary).filter(Salary.id == salary_id).first()

    if not salary:
        raise HTTPException(status_code=404, detail="Salary record not found")

    db.delete(salary)
    db.commit()

    return {"message": "Salary record deleted successfully"}