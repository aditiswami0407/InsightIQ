from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.leave import Leave
from app.schemas.leave import (
    LeaveCreate,
    LeaveUpdate,
    LeaveResponse
)

router = APIRouter(
    prefix="/leave",
    tags=["Leave Management"]
)


@router.post("/", response_model=LeaveResponse)
def create_leave(leave: LeaveCreate, db: Session = Depends(get_db)):
    new_leave = Leave(**leave.model_dump())
    db.add(new_leave)
    db.commit()
    db.refresh(new_leave)
    return new_leave


@router.get("/", response_model=list[LeaveResponse])
def get_leave_requests(db: Session = Depends(get_db)):
    return db.query(Leave).all()


@router.get("/{leave_id}", response_model=LeaveResponse)
def get_leave(leave_id: int, db: Session = Depends(get_db)):
    leave = db.query(Leave).filter(Leave.id == leave_id).first()

    if not leave:
        raise HTTPException(status_code=404, detail="Leave request not found")

    return leave


@router.put("/{leave_id}", response_model=LeaveResponse)
def update_leave(
    leave_id: int,
    updated_leave: LeaveUpdate,
    db: Session = Depends(get_db)
):
    leave = db.query(Leave).filter(Leave.id == leave_id).first()

    if not leave:
        raise HTTPException(status_code=404, detail="Leave request not found")

    for key, value in updated_leave.model_dump().items():
        setattr(leave, key, value)

    db.commit()
    db.refresh(leave)

    return leave


@router.delete("/{leave_id}")
def delete_leave(leave_id: int, db: Session = Depends(get_db)):
    leave = db.query(Leave).filter(Leave.id == leave_id).first()

    if not leave:
        raise HTTPException(status_code=404, detail="Leave request not found")

    db.delete(leave)
    db.commit()

    return {"message": "Leave request deleted successfully"}