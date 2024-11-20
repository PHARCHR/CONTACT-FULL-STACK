import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); 

   
    if (email === "" || password === "") {
      alert("Please fill out everything");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      if (response.data.token) {
        setEmail("");
        setPassword("");
        navigate("/HomePage");
      }
    } catch (error) {
      setEmail("");
      setPassword("");
      navigate("/ErrorPage");
    }
  };

  return (
    <div className="SignUp">
      <h1>Login</h1>
      <form className="form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <div className="ors">
          <Link to="/">
            <p className="login">BACK TO SIGN UP</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
