from sqlalchemy import Column, Integer, String, Float
from app.database import Base


class Client(Base):
    __tablename__ = "clients"

    id = Column(Integer, primary_key=True, index=True)
    client_name = Column(String(100), nullable=False)
    company_name = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    phone = Column(String(20), nullable=False)
    project_name = Column(String(100), nullable=False)
    contract_amount = Column(Float, nullable=False)
    status = Column(String(50), default="Active")