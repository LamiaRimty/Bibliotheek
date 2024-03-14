// Login.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

//used the useState hook to manage form data. formData object contains email and password fields, initialized with empty strings.
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  //event handler function to update the form data state whenever the user types in the input fields.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: type === 'checkbox' ? checked : value
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8800/login",
        formData
      );
      console.log(response.data); // Handle success response
      login(response.data); // Assuming response.data includes user details
      // Redirect to homepage after successful login
      navigate("/"); // Redirect to the homepage ('/')
    } catch (error) {
      if (error.response) {
        console.error(error.response.data); // If the response exists and contains data
      } else {
        console.error(error.message); // Fallback error message if the response is undefined
      }
    }
  };

  return (
    <section id="login">
      <div className="container signlog-container signuplogin-wrap">
        <div className="html">
          <h2 className="signlog">Login</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="formGroup">
              <label for="Email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="formGroup">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {/* <div className="formGroup">
              <input
                type="checkbox"
                name="keepSignedIn"
                id="keepSignedIn"
                checked={formData.keepSignedIn}
                onChange={handleChange}
              />
              <label htmlFor="keepSignedIn">Keep me signed in</label>
            </div> */}

            <div className="formGroup">
              <button type="submit" className="button">
                Login
              </button>
            </div>
          </form>
          <p className="havacc">
            Don't you have an account?<Link to="/signup"> Signup</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
