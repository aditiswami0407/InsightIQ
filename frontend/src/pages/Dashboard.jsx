import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";
import Chart from "../components/Chart";
import "../styles/Dashboard.css";



import {
  FaRupeeSign,
  FaChartLine,
  FaWallet,
  FaUsers,
} from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const today = new Date();

  const date = today.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const day = today.toLocaleDateString("en-IN", {
    weekday: "long",
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <MainLayout>
      <div className="dashboard">

        {/* Header */}

        <div className="dashboard-header">

          <div>
            <h1>
              Welcome, {user.name || "User"} 👋
            </h1>

            <p>
              Welcome back! Here's your business overview.
            </p>
          </div>

          <div className="header-actions">

            <div className="date-box">
              <h3>{date}</h3>
              <span>{day}</span>
            </div>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>

        </div>

        {/* Dashboard Cards */}

        <div className="cards">

          <Card
            title="Revenue"
            value="₹85,000"
            change="+12.5%"
            icon={<FaRupeeSign />}
            color="#3B82F6"
          />

          <Card
            title="Net Profit"
            value="₹24,500"
            change="+8.3%"
            icon={<FaChartLine />}
            color="#22C55E"
          />

          <Card
            title="Expense"
            value="₹60,500"
            change="-2.4%"
            icon={<FaWallet />}
            color="#F59E0B"
          />

          <Card
            title="Users"
            value="1,245"
            change="+18%"
            icon={<FaUsers />}
            color="#8B5CF6"
          />

        </div>

        {/* Revenue Chart */}

        <Chart />

        {/* Quick Stats */}

        <div className="quick-stats">

          <div className="stat-card">
            <h3>Total Orders</h3>
            <h2>1,520</h2>
            <p>▲ 12% this month</p>
          </div>

          <div className="stat-card">
            <h3>New Customers</h3>
            <h2>320</h2>
            <p>▲ 8% this month</p>
          </div>

          <div className="stat-card">
            <h3>Conversion Rate</h3>
            <h2>4.8%</h2>
            <p>▲ 1.2% this month</p>
          </div>

        </div>

        {/* Bottom Section */}

        <div className="dashboard-bottom">

          <div className="activity-box">

            <h2>Recent Activity</h2>

            <ul>
              <li>✅ {user.name || "User"} logged in</li>
              <li>📈 Revenue Updated</li>
              <li>📄 Monthly Report Generated</li>
              <li>🤖 AI Recommendation Ready</li>
            </ul>

          </div>

          <div className="notification-box">

            <h2>Recent Notifications</h2>

            <ul>
              <li>🔔 Revenue increased by 12%</li>
              <li>🔔 Monthly report is ready</li>
              <li>🔔 Three new users joined</li>
              <li>🔔 KPI updated successfully</li>
            </ul>

          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default Dashboard;