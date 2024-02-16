// Signup.js
import React, { useState } from "react";

const Signup = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8800/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      console.log(data); // handle response from server
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label>Your Name</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
            placeholder="Username"
          />
        </div>

        <div className="formGroup">
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>

        <div className="formGroup">
          <label>Your Password</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>

        <div className="formGroup">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
        </div>

        <div className="formGroup">
          <button type="submit" className="button">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
