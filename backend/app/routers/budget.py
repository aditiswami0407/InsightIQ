from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.budget import Budget
from app.schemas.budget import BudgetCreate

router = APIRouter(
    prefix="/budget",
    tags=["Budget"]
)

@router.get("/")
def get_all_budget(db: Session = Depends(get_db)):
    return db.query(Budget).all()

@router.get("/{id}")
def get_budget(id: int, db: Session = Depends(get_db)):
    return db.query(Budget).filter(Budget.id == id).first()    

@router.post("/")
def add_budget(budget: BudgetCreate, db: Session = Depends(get_db)):

    new_budget = Budget(
        department=budget.department,
        month=budget.month,
        year=budget.year,
        allocated_budget=budget.allocated_budget
    )

    db.add(new_budget)
    db.commit()
    db.refresh(new_budget)

    return {
        "message": "Budget Added Successfully",
        "data": new_budget
    }

@router.put("/{id}")
def update_budget(id: int, budget: BudgetCreate, db: Session = Depends(get_db)):

    existing = db.query(Budget).filter(Budget.id == id).first()

    if not existing:
        return {"message": "Budget Not Found"}

    existing.department = budget.department
    existing.month = budget.month
    existing.year = budget.year
    existing.allocated_budget = budget.allocated_budget

    db.commit()

    return {"message": "Budget Updated Successfully"}

@router.delete("/{id}")
def delete_budget(id: int, db: Session = Depends(get_db)):

    budget = db.query(Budget).filter(Budget.id == id).first()

    if not budget:
        return {"message": "Budget Not Found"}

    db.delete(budget)
    db.commit()

    return {"message": "Budget Deleted Successfully"}    