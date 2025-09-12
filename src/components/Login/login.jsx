import React, { useState } from "react";
import "./login.css";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      onLogin(username);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>D-Bot Login</h2>

        {error && <p className="error">{error}</p>}

        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} 
          required/>

        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
          required/>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;