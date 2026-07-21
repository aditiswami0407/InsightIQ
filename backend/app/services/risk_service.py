def detect_risk(data):

    if (
        data.revenue_growth < 0 and
        data.profit_growth < 0 and
        data.expense_growth > 0
    ):
        return {
            "risk_level": "HIGH",
            "risk_reason": (
                "Revenue and profit are declining "
                "while expenses are increasing."
            )
        }

    elif (
        data.revenue_growth < 0 or
        data.profit_growth < 0
    ):
        return {
            "risk_level": "MEDIUM",
            "risk_reason": (
                "Business growth indicators "
                "show signs of decline."
            )
        }

    return {
        "risk_level": "LOW",
        "risk_reason": (
            "Business performance appears stable."
        )
    }