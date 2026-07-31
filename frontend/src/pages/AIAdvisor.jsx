import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import "../styles/AIAdvisor.css";

import {
  FaRobot,
  FaPaperPlane,
  FaChartLine,
  FaWallet,
  FaLightbulb,
  FaShieldAlt,
} from "react-icons/fa";

function AIAdvisor() {

  const [question, setQuestion] = useState("");

  const suggestions = [
    "How can I increase revenue?",
    "Analyze my expenses",
    "Forecast next month's profit",
    "Show business risks"
  ];

  return (
    <MainLayout>

      <div className="ai-page">

        {/* Header */}

        <div className="ai-header">

          <h1>
            <FaRobot /> AI Business Advisor
          </h1>

          <p>
            Ask AI anything about your business performance and get intelligent insights.
          </p>

        </div>

        {/* Suggestions */}

        <div className="suggestion-grid">

          <div className="suggestion-card">
            <FaChartLine />
            <span>Increase Revenue</span>
          </div>

          <div className="suggestion-card">
            <FaWallet />
            <span>Expense Analysis</span>
          </div>

          <div className="suggestion-card">
            <FaLightbulb />
            <span>Business Forecast</span>
          </div>

          <div className="suggestion-card">
            <FaShieldAlt />
            <span>Risk Detection</span>
          </div>

        </div>

        {/* Chat */}

        <div className="chat-box">

          <div className="ai-message">

            <FaRobot className="robot"/>

            <div>

              <h3>InsightIQ AI</h3>

              <p>

                Hello 👋

                <br/><br/>

                I'm your AI Business Advisor.

                <br/><br/>

                Ask me about:

                <br/>

                • Revenue

                <br/>

                • Profit

                <br/>

                • Expenses

                <br/>

                • KPI

                <br/>

                • Forecasting

                <br/>

                • Business Growth

              </p>

            </div>

          </div>

        </div>

        {/* Suggestions Text */}

        <div className="quick-questions">

          <h2>Suggested Questions</h2>

          <div className="question-list">

            {suggestions.map((item,index)=>(

              <button
                key={index}
                onClick={()=>setQuestion(item)}
              >
                {item}
              </button>

            ))}

          </div>

        </div>

        {/* Input */}

        <div className="input-box">

          <input
            type="text"
            placeholder="Ask your business question..."
            value={question}
            onChange={(e)=>setQuestion(e.target.value)}
          />

          <button>

            <FaPaperPlane />

            Send

          </button>

        </div>

        {/* AI Insights */}

        <div className="insight-grid">

          <div className="insight-card">

            <h3>Revenue</h3>

            <p>Revenue is steadily increasing by 12%.</p>

          </div>

          <div className="insight-card">

            <h3>Expense</h3>

            <p>Operating expenses remain under control.</p>

          </div>

          <div className="insight-card">

            <h3>Profit</h3>

            <p>Profit margin improved this quarter.</p>

          </div>

          <div className="insight-card">

            <h3>Business Health</h3>

            <p>Overall business performance is Excellent.</p>

          </div>

        </div>

      </div>

    </MainLayout>
  );

}

export default AIAdvisor;