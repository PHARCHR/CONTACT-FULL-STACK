import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../cssfiles/SignUp.css";
function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (email === "" || name === "" || password === "") {
      alert("Please fill all fields");
      setEmail("");
      setName("");
      setPassword("");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        {
          name,
          email,
          password,
        }
      );
      console.log(response);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        
        navigate("/HomePage");
      }
    } catch (err) {
      setEmail("");
      setName("");
      setPassword("");
      navigate("/ErrorPage");
    }
  };
  return (
    <div className="SignUp">
      <h1>Sign Up</h1>
      <form className="form" onSubmit={handleSignUp}>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Sign Up </button>
        <div className="ors">
          <p1 className="or">OR</p1>
          <Link to="/Login">
            <p1 className="login">LOGIN</p1>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
