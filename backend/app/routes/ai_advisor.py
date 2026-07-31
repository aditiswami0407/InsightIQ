from fastapi import APIRouter, Query
from app.services.llm_service import ask_ai

router = APIRouter()


@router.get("/")
def advisor(
    question: str = Query(
        ...,
        description="Ask a business-related question"
    )
):

    prompt = f"""
    You are an AI business advisor for InsightIQ.

    Analyze the following business question and provide
    a clear, practical answer for company management.

    Question:
    {question}

    Give:
    1. Explanation
    2. Possible causes
    3. Recommended actions

    Keep the response concise and easy to understand.
    """

    answer = ask_ai(prompt)

    return {
        "question": question,
        "answer": answer
    }