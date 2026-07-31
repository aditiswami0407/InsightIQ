import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import "../styles/DashboardChart.css";

function DashboardChart({
  title,
  subtitle,
  data,
  dataKey,
  color = "#2563eb",
}) {
  return (
    <div className="dashboard-chart">

      <div className="dashboard-chart-header">

        <div>

          <h2>{title}</h2>

          <p>{subtitle}</p>

        </div>

      </div>

      <ResponsiveContainer width="100%" height={350}>

        <AreaChart data={data}>

          <defs>

            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">

              <stop offset="5%" stopColor={color} stopOpacity={0.8}/>

              <stop offset="95%" stopColor={color} stopOpacity={0.05}/>

            </linearGradient>

          </defs>

          <CartesianGrid strokeDasharray="3 3"/>

          <XAxis dataKey="name"/>

          <YAxis/>

          <Tooltip/>

          <Area
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={3}
            fill="url(#chartColor)"
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}

export default DashboardChart;