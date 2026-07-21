from fastapi import FastAPI
from app.routes import kpi
from app.routes import forecast_analysis
from app.routes import cost_suggestions
# from app.routes import risk_detection
from app.routers import risk_alert


from app.routes import (
    business_health,
    forecasting,
    ai_advisor,
    executive_brief,
    risk_alert
)
from app.routers import revenue
from app.routers import expense
from app.routers import budget
from app.routers import payment
from app.routers import finance
from app.routers import reports
from app.routers import auth
from app.routers import risk_alert

app = FastAPI(title="InsightIQ AI")

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
    risk_alert.router,
    prefix="/risk",
    tags=["Risk Alert"]
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
app.include_router(risk_alert.router)
app.include_router(revenue.router)
app.include_router(expense.router)
app.include_router(budget.router)
app.include_router(payment.router)
app.include_router(finance.router)
app.include_router(reports.router)
app.include_router(auth.router)
app.include_router(risk_alert.router)