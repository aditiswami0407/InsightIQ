import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (user === "admin" && pass === "1234") {
      navigate("/dashboard");
    } else {
      alert("Wrong credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <input
          placeholder="Username"
          onChange={(e) => setUser(e.target.value)}
        />

        <br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />

        <br />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;