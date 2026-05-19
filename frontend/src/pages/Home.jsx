import Navbar from "../components/Navbar";

import Signup from "../components/Signup";

import Login from "../components/Login";

import ComplaintForm from "../components/ComplaintForm";

import AIAnalyzer from "../components/AIAnalyzer";

import ComplaintList from "../components/ComplaintList";

function Home() {

  return (

    <div>

      <Navbar />

      <div className="home-container">

        <h1 className="main-heading">

          AI Smart Complaint Management System

        </h1>

        <div className="auth-section">

          <Signup />

          <Login />

        </div>

        <ComplaintForm />

        <AIAnalyzer />

        <ComplaintList />

      </div>

    </div>

  );

}

export default Home;