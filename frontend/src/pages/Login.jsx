import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import api from "../api/axios";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter Email and Password");
      return;
    }

    try {
      setLoading(true);

      // Login API
      const loginResponse = await loginUser({
        email,
        password,
      });

      const token = loginResponse.data.access_token;

      // Save Token
      localStorage.setItem("token", token);

      // Send Token for next requests
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;

      // Get Logged-in User
      const userResponse = await api.get("/auth/me");

      // Save User Details
      localStorage.setItem(
        "user",
        JSON.stringify(userResponse.data)
      );

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.detail);
      } else {
        alert("Unable to connect to backend.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <h2>InsightIQ</h2>

        <p className="subtitle">
          AI Analytics Dashboard
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="footer-text">
          Welcome Back 👋
        </p>

      </div>
    </div>
  );
}

export default Login;