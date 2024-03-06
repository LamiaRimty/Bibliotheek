// Login.js
import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8800/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      console.log(data); // handle response from server
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section id="login">
      <div className="container signlog-container signuplogin-wrap">
        <div className="html">
          <h2 className="signlog">Login</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="formGroup">
              <label for="username">Username</label>
              <input
                className="login-input"
                type="email"
                name="email"
                placeholder="email"
                value={credentials.email}
                onChange={handleChange}
              />
            </div>

            <div className="formGroup">
              <label for="password">Password</label>
              <input
                className="login-input"
                type="password"
                name="password"
                placeholder="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>

            <div className="formGroup">
              <input id="check" type="checkbox" class="check" checked />
              <label for="check">
                <span class="icon">Keep me Signed in</span>
              </label>
            </div>

            <div className="formGroup">
              <button type="submit" className="button">
                Login
              </button>
            </div>
            <p className="havacc">
              Don't you have an account? <a href="/signup"> Signup </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
