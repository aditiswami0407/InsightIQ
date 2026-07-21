from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.revenue import Revenue
from app.schemas.revenue import RevenueCreate

router = APIRouter(
    prefix="/revenue",
    tags=["Revenue"]
)

@router.post("/")
def add_revenue(
    revenue: RevenueCreate,
    db: Session = Depends(get_db)
):

    new_revenue = Revenue(
        client_name=revenue.client_name,
        amount=revenue.amount,
        month=revenue.month,
        year=revenue.year
    )

    db.add(new_revenue)
    db.commit()
    db.refresh(new_revenue)

    return {
        "message": "Revenue Added Successfully",
        "data": new_revenue
    }
    
@router.get("/")
def get_all_revenue(
    db: Session = Depends(get_db)
):
    return db.query(Revenue).all()

@router.get("/{id}")
def get_revenue(
    id: int,
    db: Session = Depends(get_db)
):
    return db.query(Revenue).filter(Revenue.id == id).first()

@router.put("/{id}")
def update_revenue(
    id: int,
    revenue: RevenueCreate,
    db: Session = Depends(get_db)
):

    existing = db.query(Revenue).filter(
        Revenue.id == id
    ).first()

    if not existing:
        return {"message": "Revenue Not Found"}

    existing.client_name = revenue.client_name
    existing.amount = revenue.amount
    existing.month = revenue.month
    existing.year = revenue.year

    db.commit()

    return {"message": "Revenue Updated Successfully"}

@router.delete("/{id}")
def delete_revenue(
    id: int,
    db: Session = Depends(get_db)
):

    revenue = db.query(Revenue).filter(
        Revenue.id == id
    ).first()

    if not revenue:
        return {"message": "Revenue Not Found"}

    db.delete(revenue)
    db.commit()

    return {"message": "Revenue Deleted Successfully"}