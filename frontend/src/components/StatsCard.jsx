import "../styles/StatsCard.css";

function StatsCard({
  title,
  value,
  change,
  icon,
  color,
}) {
  return (
    <div className="stats-card">

      <div
        className="stats-icon"
        style={{ background: color }}
      >
        {icon}
      </div>

      <div className="stats-content">

        <h4>{title}</h4>

        <h2>{value}</h2>

        <p>{change}</p>

      </div>

    </div>
  );
}

export default StatsCard;