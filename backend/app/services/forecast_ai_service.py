from app.services.llm_service import ask_ai


def analyze_forecast(
    predicted_revenue: float,
    trend: str
):

    prompt = f"""
    Predicted Revenue: {predicted_revenue}

    Trend: {trend}

    Analyze this forecast.

    Explain:
    1. What it means.
    2. Possible business impact.
    3. Recommended actions.

    Keep response under 150 words.
    """

    return ask_ai(prompt)