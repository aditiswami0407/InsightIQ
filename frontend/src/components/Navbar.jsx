import { NavLink } from "react-router-dom";
import {
  FaSearch,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  return (

    <header className="navbar">

      {/* LEFT */}

      <div className="navbar-left">

        <div className="logo">

          <div className="logo-icon">
            ✨
          </div>

          <div className="logo-text">

            <h2>InsightIQ</h2>

            <span>
              AI Executive Analytics
            </span>

          </div>

        </div>

      </div>

      {/* CENTER */}

      <nav className="navbar-center">

        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink to="/revenue">
          Revenue
        </NavLink>

        <NavLink to="/expense">
          Expense
        </NavLink>

        <NavLink to="/profit">
          Profit
        </NavLink>

        <NavLink to="/kpi">
          KPI
        </NavLink>

        <NavLink to="/reports">
          Reports
        </NavLink>

        <NavLink to="/aiadvisor">
          AI Advisor
        </NavLink>

      </nav>

      {/* RIGHT */}

      <div className="navbar-right">

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search..."
          />

        </div>

        <div className="notification">

          <FaBell />

          <span>3</span>

        </div>

        <div className="profile">

          <FaUserCircle className="profile-icon" />

          <div className="profile-info">

            <h4>
              {user.username || user.name || "User"}
            </h4>

            <p>
              {user.role || "Frontend"}
            </p>

          </div>

        </div>

      </div>

    </header>

  );

}

export default Navbar;