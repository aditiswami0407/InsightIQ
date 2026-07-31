from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from app.database import Base, engine

# ==========================
# Import Database Models
# ==========================
from app.models.user import User
from app.models.department import Department
from app.models.employee import Employee
from app.models.client import Client
from app.models.revenue import Revenue
from app.models.expense import Expense
from app.models.budget import Budget
from app.models.payment import Payment
from app.models.attendance import Attendance
from app.models.leave import Leave
from app.models.salary import Salary

# Create Database Tables
Base.metadata.create_all(bind=engine)

# ==========================
# AI Routes (app/routes)
# ==========================
from app.routes import (
    business_health,
    forecasting,
    ai_advisor,
    executive_brief,
    kpi,
    forecast_analysis,
    cost_suggestions,
    risk_detection,
)

# ==========================
# CRUD Routers (app/routers)
# ==========================
from app.routers import (
    revenue,
    expense,
    budget,
    payment,
    finance,
    reports,
    auth,
    employee,
    risk_alert,
    client,
    attendance,
    leave,
    salary
)

# ==========================
# Create FastAPI App
# ==========================
app = FastAPI(
    title="InsightIQ AI Executive Analytics API",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================
# AI Routes
# ==========================
app.include_router(
    business_health.router,
    prefix="/business-health",
    tags=["Business Health"]
)

app.include_router(
    forecasting.router,
    prefix="/forecast",
    tags=["Forecast"]
)

app.include_router(
    ai_advisor.router,
    prefix="/advisor",
    tags=["AI Advisor"]
)

app.include_router(
    executive_brief.router,
    prefix="/brief",
    tags=["Executive Brief"]
)

app.include_router(
    kpi.router,
    prefix="/kpi",
    tags=["KPI Analysis"]
)

app.include_router(
    forecast_analysis.router,
    prefix="/forecast-analysis",
    tags=["Forecast Analysis"]
)

app.include_router(
    cost_suggestions.router,
    prefix="/cost-suggestions",
    tags=["Cost Saving AI"]
)

app.include_router(
    risk_detection.router,
    prefix="/risk-detection",
    tags=["Risk Detection"]
)

# ==========================
# CRUD Routes
# ==========================
app.include_router(revenue.router)
app.include_router(expense.router)
app.include_router(budget.router)
app.include_router(payment.router)
app.include_router(finance.router)
app.include_router(reports.router)
app.include_router(auth.router)
app.include_router(employee.router)
app.include_router(client.router)
app.include_router(attendance.router)
app.include_router(leave.router)
app.include_router(salary.router)

app.include_router(risk_alert.router)


# ==========================
# Home Route
# ==========================
@app.get("/")
def home():
    return {
        "message": "InsightIQ Backend is Running Successfully 🚀"
    }