from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.attendance import Attendance
from app.schemas.attendance import (
    AttendanceCreate,
    AttendanceUpdate,
    AttendanceResponse
)

router = APIRouter(
    prefix="/attendance",
    tags=["Attendance"]
)


@router.post("/", response_model=AttendanceResponse)
def create_attendance(attendance: AttendanceCreate, db: Session = Depends(get_db)):
    new_attendance = Attendance(**attendance.model_dump())
    db.add(new_attendance)
    db.commit()
    db.refresh(new_attendance)
    return new_attendance


@router.get("/", response_model=list[AttendanceResponse])
def get_attendance(db: Session = Depends(get_db)):
    return db.query(Attendance).all()


@router.get("/{attendance_id}", response_model=AttendanceResponse)
def get_attendance_by_id(attendance_id: int, db: Session = Depends(get_db)):
    attendance = db.query(Attendance).filter(
        Attendance.id == attendance_id
    ).first()

    if not attendance:
        raise HTTPException(status_code=404, detail="Attendance record not found")

    return attendance


@router.put("/{attendance_id}", response_model=AttendanceResponse)
def update_attendance(
    attendance_id: int,
    updated_attendance: AttendanceUpdate,
    db: Session = Depends(get_db)
):
    attendance = db.query(Attendance).filter(
        Attendance.id == attendance_id
    ).first()

    if not attendance:
        raise HTTPException(status_code=404, detail="Attendance record not found")

    for key, value in updated_attendance.model_dump().items():
        setattr(attendance, key, value)

    db.commit()
    db.refresh(attendance)

    return attendance


@router.delete("/{attendance_id}")
def delete_attendance(attendance_id: int, db: Session = Depends(get_db)):
    attendance = db.query(Attendance).filter(
        Attendance.id == attendance_id
    ).first()

    if not attendance:
        raise HTTPException(status_code=404, detail="Attendance record not found")

    db.delete(attendance)
    db.commit()

    return {"message": "Attendance record deleted successfully"}