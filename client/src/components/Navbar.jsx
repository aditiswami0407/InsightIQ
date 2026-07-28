import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h3>InsightIQ</h3>
      <button onClick={() => navigate("/")}>Logout</button>
    </div>
  );
}

export default Navbar;