def calculate_health_score(data):

    score = (
        data.revenue_growth * 0.25 +
        data.profit_growth * 0.25 +
        data.employee_productivity * 0.20 +
        data.cost_control * 0.15 +
        data.customer_satisfaction * 0.15
    )

    return score

def get_health_status(score):

    if score >= 90:
        return "Excellent"

    elif score >= 75:
        return "Good"

    elif score >= 60:
        return "Average"

    return "Risk"

def generate_recommendation(score):

    if score >= 90:
        return "Business is performing exceptionally well."

    elif score >= 75:
        return "Focus on improving weaker KPIs to reach excellence."

    elif score >= 60:
        return "Review expenses, employee productivity and customer retention."

    return "Immediate management attention required."