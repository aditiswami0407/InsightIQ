import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import "../styles/RevenueChart.css";

const data = [
  { month: "Jan", revenue: 85000 },
  { month: "Feb", revenue: 92000 },
  { month: "Mar", revenue: 98000 },
  { month: "Apr", revenue: 110000 },
  { month: "May", revenue: 105000 },
  { month: "Jun", revenue: 120000 },
];

function RevenueChart() {
  return (
    <div className="revenue-chart-card">

      <div className="chart-header">
        <h2>Revenue Trend</h2>
        <p>Last 6 Months</p>
      </div>

      <ResponsiveContainer width="100%" height={350}>

        <AreaChart data={data}>

          <defs>
            <linearGradient id="revenueColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            fill="url(#revenueColor)"
            strokeWidth={3}
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}

export default RevenueChart;