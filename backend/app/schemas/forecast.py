from pydantic import BaseModel, Field
from typing import List


class RevenueForecastRequest(BaseModel):

    revenues: List[float] = Field(
        min_length=3
    )