import MainLayout from "../layouts/MainLayout";
import "../styles/KPI.css";

import {
  FaIndianRupeeSign,
  FaChartLine,
  FaWallet,
  FaUsers,
  FaDownload,
} from "react-icons/fa6";

function KPI() {

  const kpiData = [
    {
      title: "Revenue",
      value: "₹85,000",
      status: "Excellent",
    },
    {
      title: "Profit",
      value: "₹24,500",
      status: "Good",
    },
    {
      title: "Expense",
      value: "₹60,500",
      status: "Normal",
    },
    {
      title: "Customers",
      value: "1,245",
      status: "Growing",
    },
  ];

  return (

    <MainLayout>

      <div className="kpi">

        {/* Header */}

        <div className="kpi-header">

          <div>

            <h1>KPI Dashboard</h1>

            <p>
              Monitor your business performance using key performance indicators.
            </p>

          </div>

          <button className="download-btn">

            <FaDownload />

            Download Report

          </button>

        </div>

        {/* KPI Cards */}

        <div className="kpi-cards">

          <div className="kpi-card">

            <FaIndianRupeeSign className="card-icon blue"/>

            <h3>Revenue</h3>

            <h2>₹85,000</h2>

            <span>▲ 12%</span>

          </div>

          <div className="kpi-card">

            <FaChartLine className="card-icon green"/>

            <h3>Profit</h3>

            <h2>₹24,500</h2>

            <span>▲ 8%</span>

          </div>

          <div className="kpi-card">

            <FaWallet className="card-icon orange"/>

            <h3>Expense</h3>

            <h2>₹60,500</h2>

            <span>▼ 2%</span>

          </div>

          <div className="kpi-card">

            <FaUsers className="card-icon purple"/>

            <h3>Customers</h3>

            <h2>1,245</h2>

            <span>▲ 18%</span>

          </div>

        </div>

        {/* Performance */}

        <div className="overview-section">

          <div className="overview-card">

            <h2>Performance Overview</h2>

            <div className="progress-group">

              <label>Revenue Target</label>

              <div className="progress">
                <div className="progress-fill blue-fill" style={{width:"85%"}}></div>
              </div>

            </div>

            <div className="progress-group">

              <label>Customer Satisfaction</label>

              <div className="progress">
                <div className="progress-fill green-fill" style={{width:"92%"}}></div>
              </div>

            </div>

            <div className="progress-group">

              <label>Sales Performance</label>

              <div className="progress">
                <div className="progress-fill orange-fill" style={{width:"76%"}}></div>
              </div>

            </div>

            <div className="progress-group">

              <label>Employee Productivity</label>

              <div className="progress">
                <div className="progress-fill purple-fill" style={{width:"83%"}}></div>
              </div>

            </div>

          </div>

          <div className="overview-card">

            <h2>Business Health</h2>

            <ul className="health-list">

              <li>Financial Health : <strong>Excellent</strong></li>

              <li>Risk Level : <strong>Low</strong></li>

              <li>Growth Trend : <strong>Positive</strong></li>

              <li>Customer Retention : <strong>89%</strong></li>

            </ul>

          </div>

        </div>

        {/* KPI Table */}

        <div className="table-card">

          <h2>Business KPI Summary</h2>

          <table>

            <thead>

              <tr>

                <th>KPI</th>

                <th>Value</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {kpiData.map((item)=>(

                <tr key={item.title}>

                  <td>{item.title}</td>

                  <td>{item.value}</td>

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

export default KPI;