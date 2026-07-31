import { Link, useLocation } from "react-router-dom";

import {
  FaHome,
  FaChartLine,
  FaMoneyBillWave,
  FaIndianRupeeSign,
  FaBullseye,
  FaFileAlt,
  FaBell,
  FaUser,
  FaRobot,
} from "react-icons/fa6";

import "./Sidebar.css";

function Sidebar() {

  const location = useLocation();

  const menuItems = [

    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },

    {
      name: "Revenue",
      path: "/revenue",
      icon: <FaChartLine />,
    },

    {
      name: "Expense",
      path: "/expense",
      icon: <FaMoneyBillWave />,
    },

    {
      name: "Profit",
      path: "/profit",
      icon: <FaIndianRupeeSign />,
    },

    {
      name: "KPI",
      path: "/kpi",
      icon: <FaBullseye />,
    },

    {
      name: "Reports",
      path: "/reports",
      icon: <FaFileAlt />,
    },

    {
      name: "Notifications",
      path: "/notifications",
      icon: <FaBell />,
    },

    {
      name: "Profile",
      path: "/profile",
      icon: <FaUser />,
    },

    {
      name: "AI Advisor",
      path: "/aiadvisor",
      icon: <FaRobot />,
    },

  ];

  return (

    <aside className="sidebar">

      <div className="logo">
        <h2>InsightIQ</h2>
      </div>

      <ul className="menu">

        {menuItems.map((item) => (

          <li
            key={item.name}
            className={location.pathname === item.path ? "active" : ""}
          >

            <Link to={item.path}>

              {item.icon}

              <span>{item.name}</span>

            </Link>

          </li>

        ))}

      </ul>

    </aside>

  );

}

export default Sidebar;