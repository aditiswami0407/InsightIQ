import "./Card.css";

function Card({ title, value, change, icon, color }) {
  return (
    <div className="card">

      <div
        className="icon-box"
        style={{ background: color }}
      >
        {icon}
      </div>

      <h3>{title}</h3>

      <h2>{value}</h2>

      <span className="change">
        ▲ {change} this month
      </span>

    </div>
  );
}

export default Card;