import MainLayout from "../layouts/MainLayout";
import "../styles/Notifications.css";

import {
  FaBell,
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";

function Notifications() {

  const notifications = [
    {
      icon: <FaCheckCircle />,
      title: "Revenue Increased",
      message: "Revenue increased by 12% this month.",
      time: "5 min ago",
      color: "green",
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Expense Alert",
      message: "Marketing expenses exceeded the budget.",
      time: "20 min ago",
      color: "orange",
    },
    {
      icon: <FaBell />,
      title: "New Report",
      message: "Monthly business report is ready.",
      time: "1 hour ago",
      color: "blue",
    },
    {
      icon: <FaInfoCircle />,
      title: "AI Insight",
      message: "AI detected positive business growth.",
      time: "Today",
      color: "purple",
    },
  ];

  return (
    <MainLayout>

      <div className="notifications">

        <div className="notifications-header">

          <div>

            <h1>Notifications</h1>

            <p>Stay updated with your latest business activities.</p>

          </div>

        </div>

        <div className="notification-list">

          {notifications.map((item, index) => (

            <div className="notification-card" key={index}>

              <div className={`notification-icon ${item.color}`}>

                {item.icon}

              </div>

              <div className="notification-content">

                <h3>{item.title}</h3>

                <p>{item.message}</p>

                <span>{item.time}</span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </MainLayout>
  );
}

export default Notifications;