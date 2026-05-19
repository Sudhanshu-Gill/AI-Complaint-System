import { useState } from "react";

import axios from "axios";

import {
  useNavigate,
  Link
} from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [loginData, setLoginData] =
    useState({

      email: "",
      password: ""

    });

  const handleChange = (e) => {

    setLoginData({

      ...loginData,

      [e.target.name]: e.target.value

    });

  };

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(

        "http://localhost:5000/api/auth/login",

        loginData

      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      alert("Login Successful");

      navigate("/complaints");

    } catch (error) {

      console.log(error);

      alert("Login Failed");

    }

  };

  return (

    <div className="auth-container">

      <h2>Welcome Back</h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={loginData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={loginData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Login
        </button>

      </form>

      <p className="auth-switch">

        Don't have an account?

        <Link to="/signup">
          Signup
        </Link>

      </p>

    </div>

  );

}

export default Login;