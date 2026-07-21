from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.expense import Expense
from app.schemas.expense import ExpenseCreate

router = APIRouter(
    prefix="/expense",
    tags=["Expense"]
)

@router.post("/")
def add_expense(expense: ExpenseCreate, db: Session = Depends(get_db)):
    new_expense = Expense(
        category=expense.category,
        description=expense.description,
        department=expense.department,
        amount=expense.amount,
        payment_method=expense.payment_method,
        expense_date=expense.expense_date
    )

    db.add(new_expense)
    db.commit()
    db.refresh(new_expense)

    return {
        "message": "Expense Added Successfully",
        "data": new_expense
    }
@router.get("/")
def get_all_expenses(db: Session = Depends(get_db)):
    return db.query(Expense).all()

@router.get("/{id}")
def get_expense(id: int, db: Session = Depends(get_db)):
    return db.query(Expense).filter(Expense.id == id).first()        

@router.put("/{id}")
def update_expense(id: int, expense: ExpenseCreate, db: Session = Depends(get_db)):

    existing = db.query(Expense).filter(Expense.id == id).first()

    if not existing:
        return {"message": "Expense Not Found"}

    existing.category = expense.category
    existing.description = expense.description
    existing.department = expense.department
    existing.amount = expense.amount
    existing.payment_method = expense.payment_method
    existing.expense_date = expense.expense_date

    db.commit()

    return {"message": "Expense Updated Successfully"}

@router.delete("/{id}")
def delete_expense(id: int, db: Session = Depends(get_db)):

    expense = db.query(Expense).filter(Expense.id == id).first()

    if not expense:
        return {"message": "Expense Not Found"}

    db.delete(expense)
    db.commit()

    return {"message": "Expense Deleted Successfully"}        