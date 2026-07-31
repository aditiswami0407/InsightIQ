import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import "./Chart.css";

const data = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 25000 },
  { month: "May", revenue: 22000 },
  { month: "Jun", revenue: 30000 },
  { month: "Jul", revenue: 28000 },
];

function Chart() {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <h2>Revenue Overview</h2>
          <p>Monthly business performance</p>
        </div>

        <button className="chart-btn">
          This Year
        </button>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#c084fc" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#c084fc" stopOpacity={0}/>
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#c084fc"
            fillOpacity={1}
            fill="url(#colorRevenue)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;