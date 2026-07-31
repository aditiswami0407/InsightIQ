import "./Card.css";

function Card({ title, value, change, icon, color }) {
  return (
    <div className="card">

      <div className="card-top">

        <div
          className="icon-box"
          style={{ background: color }}
        >
          {icon}
        </div>

        <div>
          <h3>{title}</h3>
          <p className="change">{change} this month</p>
        </div>

      </div>

      <div className="card-bottom">
        <h2>{value}</h2>
      </div>

    </div>
  );
}

export default Card;