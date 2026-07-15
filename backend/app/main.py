from fastapi import FastAPI
from app.database import Base, engine

# Import models
from app.models.user import User
from app.models.department import Department
from app.models.employee import Employee
from app.models.client import Client
from app.models.revenue import Revenue
from app.models.expense import Expense
from app.models.budget import Budget

# Import routers
from app.routers import revenue
from app.routers import expense
from app.routers import budget
from app.routers import finance



# Create database tables
Base.metadata.create_all(bind=engine)

# Create FastAPI app
app = FastAPI(
    title="AI Executive Analytics API",
    version="1.0.0"
)

# Include routers
app.include_router(revenue.router)
app.include_router(expense.router)
app.include_router(budget.router)
app.include_router(finance.router)


@app.get("/")
def home():
    return {"message": "Backend is running successfully!"}