import MainLayout from "../layouts/MainLayout";
import "../styles/Expense.css";

import {
  FaIndianRupeeSign,
  FaWallet,
  FaArrowTrendDown,
  FaFileInvoiceDollar,
  FaDownload,
} from "react-icons/fa6";

function Expense() {

  const expenseData = [
    { month: "January", expense: "₹8,000", status: "Normal" },
    { month: "February", expense: "₹9,500", status: "Normal" },
    { month: "March", expense: "₹11,200", status: "High" },
    { month: "April", expense: "₹10,000", status: "Normal" },
    { month: "May", expense: "₹13,800", status: "High" },
    { month: "June", expense: "₹12,400", status: "Normal" },
  ];

  return (
    <MainLayout>

      <div className="expense">

        {/* Header */}

        <div className="expense-header">

          <div>

            <h1>Expense Analytics</h1>

            <p>
              Monitor company expenses and spending trends.
            </p>

          </div>

          <button className="download-btn">

            <FaDownload />

            Download Report

          </button>

        </div>

        {/* Cards */}

        <div className="expense-cards">

          <div className="expense-card">

            <FaIndianRupeeSign className="card-icon blue"/>

            <h3>Total Expense</h3>

            <h2>₹60,500</h2>

            <span>▼ 2.4%</span>

          </div>

          <div className="expense-card">

            <FaWallet className="card-icon green"/>

            <h3>Monthly Expense</h3>

            <h2>₹12,400</h2>

            <span>Current Month</span>

          </div>

          <div className="expense-card">

            <FaArrowTrendDown className="card-icon orange"/>

            <h3>Expense Rate</h3>

            <h2>7%</h2>

            <span>Under Control</span>

          </div>

          <div className="expense-card">

            <FaFileInvoiceDollar className="card-icon purple"/>

            <h3>Total Bills</h3>

            <h2>348</h2>

            <span>Processed</span>

          </div>

        </div>

        {/* Overview */}

        <div className="overview-section">

          <div className="overview-card">

            <h2>Expense Overview</h2>

            <p>

              Company expenses remain within the planned budget.
              Operational costs are stable and financial health
              continues to improve.

            </p>

            <div className="progress-group">

              <label>Budget Utilized</label>

              <div className="progress">

                <div
                  className="progress-fill blue-fill"
                  style={{width:"78%"}}
                ></div>

              </div>

            </div>

            <div className="progress-group">

              <label>Operational Cost</label>

              <div className="progress">

                <div
                  className="progress-fill green-fill"
                  style={{width:"65%"}}
                ></div>

              </div>

            </div>

          </div>

          <div className="overview-card">

            <h2>Major Expenses</h2>

            <ul className="client-list">

              <li>Employee Salaries</li>

              <li>Cloud Services</li>

              <li>Office Rent</li>

              <li>Marketing</li>

              <li>Utilities</li>

            </ul>

          </div>

        </div>

        {/* Table */}

        <div className="table-card">

          <h2>Monthly Expense</h2>

          <table>

            <thead>

              <tr>

                <th>Month</th>

                <th>Expense</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {expenseData.map((item)=>(

                <tr key={item.month}>

                  <td>{item.month}</td>

                  <td>{item.expense}</td>

                  <td>{item.status}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </MainLayout>
  );

}

export default Expense;