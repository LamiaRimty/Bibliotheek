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
      const response = await fetch("/login", {
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
      <div className="container wrapper px-4 py-1 my-5 text-center">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label for="username">Username</label>
          <input
            className="login-input"
            type="email"
            name="email"
            placeholder="email"
            value={credentials.email}
            onChange={handleChange}
          />
          <label for="password">Password</label>
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
