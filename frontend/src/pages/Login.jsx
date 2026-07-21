import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>InsightIQ</h2>
        <p className="subtitle">AI Analytics Dashboard</p>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button onClick={handleLogin}>Login</button>

        <p className="footer-text">Welcome back 👋</p>
      </div>
    </div>
  );
}

export default Login;