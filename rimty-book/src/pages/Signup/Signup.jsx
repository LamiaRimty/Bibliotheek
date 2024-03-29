// Signup.jsx
import "./Signup.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate(); // Initialize useNavigate hook
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
      navigate("/"); // Redirect to the homepage ('/')
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
          </div>
        </form>
        <p className="havacc">
          Already have an account? <Link to="/login"> Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
