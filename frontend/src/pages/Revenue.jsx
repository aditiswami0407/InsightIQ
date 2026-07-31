import MainLayout from "../layouts/MainLayout";
import "../styles/Revenue.css";

import {
  FaIndianRupeeSign,
  FaChartLine,
  FaArrowTrendUp,
  FaUsers,
  FaDownload,
} from "react-icons/fa6";

function Revenue() {

  const revenueData = [
    { month: "January", revenue: "₹12,000", growth: "10%" },
    { month: "February", revenue: "₹14,500", growth: "15%" },
    { month: "March", revenue: "₹18,200", growth: "12%" },
    { month: "April", revenue: "₹21,000", growth: "17%" },
    { month: "May", revenue: "₹19,800", growth: "9%" },
    { month: "June", revenue: "₹24,000", growth: "20%" },
  ];

  return (
    <MainLayout>

      <div className="revenue">

        {/* Header */}

        <div className="revenue-header">

          <div>

            <h1>Revenue Analytics</h1>

            <p>
              Monitor revenue performance and business growth.
            </p>

          </div>

          <button className="download-btn">

            <FaDownload />

            Download Report

          </button>

        </div>

        {/* Summary Cards */}

        <div className="revenue-cards">

          <div className="revenue-card">

            <FaIndianRupeeSign className="card-icon blue" />

            <h3>Total Revenue</h3>

            <h2>₹85,000</h2>

            <span>▲ 12% this month</span>

          </div>

          <div className="revenue-card">

            <FaChartLine className="card-icon green" />

            <h3>Monthly Sales</h3>

            <h2>₹24,000</h2>

            <span>▲ 8%</span>

          </div>

          <div className="revenue-card">

            <FaArrowTrendUp className="card-icon orange" />

            <h3>Growth Rate</h3>

            <h2>18%</h2>

            <span>Excellent</span>

          </div>

          <div className="revenue-card">

            <FaUsers className="card-icon purple" />

            <h3>Customers</h3>

            <h2>1,245</h2>

            <span>+124 this month</span>

          </div>

        </div>

        {/* Revenue Overview */}

        <div className="overview-section">

          <div className="overview-card">

            <h2>Revenue Overview</h2>

            <p>
              Revenue continues to grow steadily over the last six months with
              strong customer acquisition and increased monthly sales.
            </p>

            <div className="progress-group">

              <label>Total Revenue Target</label>

              <div className="progress">

                <div
                  className="progress-fill blue-fill"
                  style={{ width: "85%" }}
                ></div>

              </div>

            </div>

            <div className="progress-group">

              <label>Sales Target</label>

              <div className="progress">

                <div
                  className="progress-fill green-fill"
                  style={{ width: "72%" }}
                ></div>

              </div>

            </div>

          </div>

          <div className="overview-card">

            <h2>Top Clients</h2>

            <ul className="client-list">

              <li>Tata Consultancy Services</li>

              <li>Infosys</li>

              <li>Reliance Industries</li>

              <li>Wipro</li>

              <li>HCL Technologies</li>

            </ul>

          </div>

        </div>

        {/* Revenue Table */}

        <div className="table-card">

          <h2>Monthly Revenue</h2>

          <table>

            <thead>

              <tr>

                <th>Month</th>

                <th>Revenue</th>

                <th>Growth</th>

              </tr>

            </thead>

            <tbody>

              {revenueData.map((item) => (

                <tr key={item.month}>

                  <td>{item.month}</td>

                  <td>{item.revenue}</td>

                  <td>{item.growth}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </MainLayout>
  );
}

export default Revenue;