import MainLayout from "../layouts/MainLayout";
import "../styles/Home.css";

import { useNavigate } from "react-router-dom";

import {
  FaChartLine,
  FaWallet,
  FaRobot,
  FaFileAlt,
  FaArrowRight,
  FaDollarSign,
  FaUsers,
  FaChartPie,
} from "react-icons/fa";

function Home() {

  const navigate = useNavigate();

  return (

    <MainLayout>

      <div className="home">

        {/* Hero */}

        <div className="hero">

          <div>

            <h1>
              Welcome to InsightIQ 👋
            </h1>

            <p>

              AI Executive Analytics Dashboard

              <br />

              Manage your business smarter using AI-powered insights.

            </p>

            <button
              onClick={() => navigate("/dashboard")}
            >

              Open Dashboard

              <FaArrowRight />

            </button>

          </div>

        </div>

        {/* Statistics */}

        <div className="home-cards">

          <div className="home-card">

            <FaDollarSign />

            <h3>Revenue</h3>

            <h2>₹85,000</h2>

          </div>

          <div className="home-card">

            <FaChartLine />

            <h3>Profit</h3>

            <h2>₹24,500</h2>

          </div>

          <div className="home-card">

            <FaWallet />

            <h3>Expense</h3>

            <h2>₹60,500</h2>

          </div>

          <div className="home-card">

            <FaUsers />

            <h3>Customers</h3>

            <h2>1,245</h2>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="quick-actions">

          <h2>Quick Actions</h2>

          <div className="action-grid">

            <button onClick={() => navigate("/revenue")}>

              <FaChartLine />

              Revenue

            </button>

            <button onClick={() => navigate("/expense")}>

              <FaWallet />

              Expense

            </button>

            <button onClick={() => navigate("/reports")}>

              <FaFileAlt />

              Reports

            </button>

            <button onClick={() => navigate("/aiadvisor")}>

              <FaRobot />

              AI Advisor

            </button>

          </div>

        </div>

        {/* Recent Activity */}

        <div className="activity-section">

          <div className="activity-card">

            <h2>Recent Activity</h2>

            <ul>

              <li>✅ Revenue Updated</li>

              <li>📈 Profit Increased</li>

              <li>📄 Report Generated</li>

              <li>🤖 AI Forecast Ready</li>

              <li>👥 New Customer Added</li>

            </ul>

          </div>

          <div className="activity-card">

            <h2>Business Overview</h2>

            <ul>

              <li>Revenue Growth : <strong>12%</strong></li>

              <li>Profit Margin : <strong>18%</strong></li>

              <li>Expense Ratio : <strong>42%</strong></li>

              <li>Customer Growth : <strong>15%</strong></li>

            </ul>

          </div>

        </div>

      </div>

    </MainLayout>

  );

}

export default Home;