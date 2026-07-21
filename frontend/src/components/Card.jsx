function Card({ title, value, icon }) {
  return (
    <div style={{
      background: "#1e293b",
      padding: "20px",
      borderRadius: "12px",
      width: "200px"
    }}>
      <h3>{icon} {title}</h3>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>{value}</p>
    </div>
  );
}

export default Card;