import { useEffect, useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";

import HeroSection from "../components/HeroSection";

import ComplaintForm from "../components/ComplaintForm";

import ComplaintList from "../components/ComplaintList";

function ComplaintPage() {

  const [complaints, setComplaints] =
    useState([]);

  useEffect(() => {

    fetchComplaints();

  }, []);

  const fetchComplaints = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const response = await axios.get(

        "https://ai-complaint-backend-rj1c.onrender.com/api/complaints",

        {
          headers: {
            Authorization: token
          }
        }

      );

      setComplaints(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div>

      <Navbar />

      <div className="home-container">

        <HeroSection />

        <div className="stats-container">

          <div className="stats-card">

            <h2>
              {complaints.length}
            </h2>

            <p>
              Total Complaints
            </p>

          </div>

          <div className="stats-card">

            <h2>

              {
                complaints.filter(
                  (item) =>
                    item.status ===
                    "Resolved"
                ).length
              }

            </h2>

            <p>
              Resolved Cases
            </p>

          </div>

          <div className="stats-card">

            <h2>

              {
                complaints.filter(
                  (item) =>
                    item.status ===
                    "Pending"
                ).length
              }

            </h2>

            <p>
              Pending Cases
            </p>

          </div>

        </div>

        <ComplaintForm
          fetchComplaints={
            fetchComplaints
          }
        />

        <ComplaintList

          complaints={complaints}

          fetchComplaints={
            fetchComplaints
          }

        />

      </div>

    </div>

  );

}

export default ComplaintPage;