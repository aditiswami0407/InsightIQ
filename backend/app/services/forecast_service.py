import pandas as pd

from sklearn.linear_model import LinearRegression


def predict_revenue(revenues):

    months = list(range(1, len(revenues) + 1))

    df = pd.DataFrame({
        "month": months,
        "revenue": revenues
    })

    X = df[["month"]]
    y = df["revenue"]

    model = LinearRegression()

    model.fit(X, y)

    next_month = [[len(revenues) + 1]]

    prediction = model.predict(next_month)

    return float(prediction[0])