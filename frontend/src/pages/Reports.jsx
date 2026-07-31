import MainLayout from "../layouts/MainLayout";
import "../styles/Reports.css";

import {
  FaFileAlt,
  FaDownload,
  FaChartBar,
  FaChartPie,
  FaUsers,
  FaWallet,
} from "react-icons/fa";

function Reports() {

  const reports = [
    {
      name: "Monthly Financial Report",
      date: "28 Jul 2026",
      status: "Ready",
    },
    {
      name: "Revenue Analysis",
      date: "26 Jul 2026",
      status: "Ready",
    },
    {
      name: "Expense Report",
      date: "22 Jul 2026",
      status: "Processing",
    },
    {
      name: "Customer Analytics",
      date: "18 Jul 2026",
      status: "Ready",
    },
  ];

  return (
    <MainLayout>

      <div className="reports">

        {/* Header */}

        <div className="reports-header">

          <div>

            <h1>Business Reports</h1>

            <p>
              View and download all generated reports.
            </p>

          </div>

          <button className="download-btn">

            <FaDownload />

            Download All

          </button>

        </div>

        {/* Cards */}

        <div className="reports-cards">

          <div className="reports-card">

            <FaFileAlt className="card-icon blue"/>

            <h3>Total Reports</h3>

            <h2>124</h2>

          </div>

          <div className="reports-card">

            <FaDownload className="card-icon green"/>

            <h3>Downloads</h3>

            <h2>3,520</h2>

          </div>

          <div className="reports-card">

            <FaChartBar className="card-icon orange"/>

            <h3>This Month</h3>

            <h2>18</h2>

          </div>

          <div className="reports-card">

            <FaWallet className="card-icon purple"/>

            <h3>Pending</h3>

            <h2>4</h2>

          </div>

        </div>

        {/* Categories */}

        <div className="category-grid">

          <div className="category-card">
            <FaChartBar />
            <h3>Financial Report</h3>
            <p>Revenue & Profit Analysis</p>
          </div>

          <div className="category-card">
            <FaChartPie />
            <h3>Sales Report</h3>
            <p>Monthly Sales Performance</p>
          </div>

          <div className="category-card">
            <FaWallet />
            <h3>Expense Report</h3>
            <p>Expense Summary</p>
          </div>

          <div className="category-card">
            <FaUsers />
            <h3>Customer Report</h3>
            <p>Customer Analytics</p>
          </div>

        </div>

        {/* Table */}

        <div className="table-card">

          <h2>Recent Reports</h2>

          <table>

            <thead>

              <tr>

                <th>Report</th>

                <th>Date</th>

                <th>Status</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {reports.map((report,index)=>(

                <tr key={index}>

                  <td>{report.name}</td>

                  <td>{report.date}</td>

                  <td>{report.status}</td>

                  <td>

                    <button className="action-btn">

                      Download

                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </MainLayout>
  );
}

export default Reports;