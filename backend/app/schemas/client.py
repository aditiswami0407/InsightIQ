from pydantic import BaseModel, EmailStr


class ClientBase(BaseModel):
    client_name: str
    company_name: str
    email: EmailStr
    phone: str
    project_name: str
    contract_amount: float
    status: str


class ClientCreate(ClientBase):
    pass


class ClientUpdate(ClientBase):
    pass


class ClientResponse(ClientBase):
    id: int

    class Config:
        from_attributes = True