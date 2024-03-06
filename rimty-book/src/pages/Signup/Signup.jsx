// Signup.js
import "./Signup.css";
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const history = useHistory(); // Initialize useHistory hook
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8800/signup",
        formData
      );
      console.log(response.data); // Handle success response

      // Redirect to homepage after successful signup
      history.push("/"); // Redirect to the homepage ('/')
    } catch (error) {
      console.error(error.response.data); // Handle error response
    }
  };

  return (
    <div className="container signlog-container signuplogin-wrap">
      <div className="html">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label>Your Name</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="formGroup">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="formGroup">
            <label>Your Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="formGroup">
            <button type="submit" className="button">
              {/* <a className="signlogbtn" href="/"> */}
              Signup
              {/* </a> */}
            </button>

            <p className="havacc">
              Already have an account? <a href="/login">Login </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;