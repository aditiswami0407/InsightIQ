import MainLayout from "../layouts/MainLayout";
import "../styles/Profit.css";

import {
  FaChartLine,
  FaMoneyBillWave,
  FaArrowTrendUp,
} from "react-icons/fa6";

function Profit() {
  return (
    <MainLayout>
      <div className="profit">

        <div className="profit-header">
          <div>
            <h1>Profit Analytics</h1>
            <p>Monitor your business profit and growth.</p>
          </div>
        </div>

        <div className="profit-cards">

          <div className="profit-card">
            <FaMoneyBillWave className="profit-icon green" />
            <h3>Net Profit</h3>
            <h2>$24,500</h2>
            <span>+8%</span>
          </div>

          <div className="profit-card">
            <FaChartLine className="profit-icon blue" />
            <h3>Gross Profit</h3>
            <h2>$42,800</h2>
            <span>+10%</span>
          </div>

          <div className="profit-card">
            <FaArrowTrendUp className="profit-icon orange" />
            <h3>Profit Margin</h3>
            <h2>32%</h2>
            <span>Excellent</span>
          </div>

        </div>

        <div className="profit-table">

          <h2>Monthly Profit</h2>

          <table>

            <thead>
              <tr>
                <th>Month</th>
                <th>Profit</th>
                <th>Growth</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>January</td>
                <td>$4,200</td>
                <td>5%</td>
              </tr>

              <tr>
                <td>February</td>
                <td>$5,000</td>
                <td>8%</td>
              </tr>

              <tr>
                <td>March</td>
                <td>$6,100</td>
                <td>12%</td>
              </tr>

              <tr>
                <td>April</td>
                <td>$6,800</td>
                <td>15%</td>
              </tr>

              <tr>
                <td>May</td>
                <td>$7,400</td>
                <td>18%</td>
              </tr>

              <tr>
                <td>June</td>
                <td>$8,000</td>
                <td>20%</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </MainLayout>
  );
}

export default Profit;