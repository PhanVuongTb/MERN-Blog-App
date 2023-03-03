import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { request } from "../utils/fetchApi";
import { register } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (username === "" || email === "" || password === "") return;

    try {
      const options = { "Content-Type": "application/json" };

      const data = await request("/auth/register", "POST", options, {
        username,
        email,
        password,
      });
      dispatch(register(data));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="register-container">
        <div className="register-wrapper">
          <h2>Register</h2>
          <form className="register-form" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Username..."
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password..."
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
