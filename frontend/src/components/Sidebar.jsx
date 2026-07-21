import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <h2>InsightIQ</h2>

      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/revenue">Revenue</Link></li>
        <li><Link to="/profit">Profit</Link></li>
        <li><Link to="/kpi">KPI</Link></li>
        <li><Link to="/cost">Cost</Link></li>
        <li><Link to="/ai">AI Advisor</Link></li>
      </ul>

      <button onClick={logout} className="logout-btn">
        Logout
      </button>
    </div>
  );
}

export default Sidebar;