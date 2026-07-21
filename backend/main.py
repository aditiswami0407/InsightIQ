from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/summary")
def summary():
    return jsonify({
        "message": "Business is growing steadily. Revenue increased by 25%."
    })

@app.route("/api/health")
def health():
    return jsonify({
        "score": 85,
        "status": "Strong Growth"
    })

if __name__ == "__main__":
    app.run(debug=True)