import { useState } from "react";

import axios from "axios";

import {
  useNavigate,
  Link
} from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [signupData, setSignupData] =
    useState({

      name: "",
      email: "",
      password: ""

    });

  const handleChange = (e) => {

    setSignupData({

      ...signupData,

      [e.target.name]: e.target.value

    });

  };

  const handleSignup = async (e) => {

    e.preventDefault();

    try {

      await axios.post(

        "http://localhost:5000/api/auth/signup",

        signupData

      );

      alert("Signup Successful");

      navigate("/");

    } catch (error) {

      console.log(error);

      alert("Signup Failed");

    }

  };

  return (

    <div className="auth-container">

      <h2>Create Account</h2>

      <form onSubmit={handleSignup}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={signupData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={signupData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={signupData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Signup
        </button>

      </form>

      <p className="auth-switch">

        Already have an account?

        <Link to="/">
          Login
        </Link>

      </p>

    </div>

  );

}

export default Signup;