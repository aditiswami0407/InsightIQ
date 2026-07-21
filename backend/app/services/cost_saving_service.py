from app.services.llm_service import ask_ai
from app.utils.prompts import COST_SAVING_PROMPT


def generate_cost_suggestions(data):

    prompt = f"""
    {COST_SAVING_PROMPT}

    Marketing Expense: {data.marketing}

    Operations Expense: {data.operations}

    Salary Expense: {data.salary}

    Utilities Expense: {data.utilities}
    """

    return ask_ai(prompt)