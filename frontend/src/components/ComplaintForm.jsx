import { useState } from "react";

import axios from "axios";

function ComplaintForm({
  fetchComplaints
}) {

  const [formData, setFormData] =
    useState({

      name: "",
      email: "",
      title: "",
      description: "",
      category: "",
      location: ""

    });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token =
        localStorage.getItem("token");

      await axios.post(

        "http://localhost:5000/api/complaints",

        formData,

        {
          headers: {
            Authorization: token
          }
        }

      );

      alert(
        "Complaint Submitted"
      );

      setFormData({

        name: "",
        email: "",
        title: "",
        description: "",
        category: "",
        location: ""

      });

      fetchComplaints();

    } catch (error) {

      console.log(error);

      alert(
        "Complaint Failed"
      );

    }

  };

  return (

    <div className="form-container">

      <h2>
        Register Complaint
      </h2>

      <form
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="title"
          placeholder="Complaint Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Complaint Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <input
          type="text"
          name="category"
          placeholder="Complaint Category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <button type="submit">

          Submit Complaint

        </button>

      </form>

    </div>

  );

}

export default ComplaintForm;