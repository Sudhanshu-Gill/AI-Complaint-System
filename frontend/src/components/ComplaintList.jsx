import { useState } from "react";

import axios from "axios";

function ComplaintList({

  complaints,

  fetchComplaints

}) {

  const [searchLocation, setSearchLocation] =
    useState("");

  const [categoryFilter, setCategoryFilter] =
    useState("");

  const updateStatus = async (
    id,
    status
  ) => {

    try {

      await axios.put(

        `http://localhost:5000/api/complaints/${id}`,

        {
          status: status
        }

      );

      fetchComplaints();

    } catch (error) {

      console.log(error);

    }

  };

  const deleteComplaint = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this complaint?"
      );

    if (!confirmDelete) {

      return;

    }

    try {

      await axios.delete(

        `http://localhost:5000/api/complaints/${id}`

      );

      fetchComplaints();

    } catch (error) {

      console.log(error);

      alert("Delete Failed");

    }

  };

  const filteredComplaints =
    complaints.filter((item) => {

      const matchesLocation =

        item.location
          .toLowerCase()
          .includes(
            searchLocation.toLowerCase()
          );

      const matchesCategory =

        categoryFilter === "" ||

        item.category === categoryFilter;

      return (
        matchesLocation &&
        matchesCategory
      );

    });

  return (

    <div className="list-container">

      <h2>
        Complaint Records
      </h2>

      <div className="filter-container">

        <input
          type="text"

          placeholder="Search by Location"

          value={searchLocation}

          onChange={(e) =>
            setSearchLocation(
              e.target.value
            )
          }
        />

        <select

          value={categoryFilter}

          onChange={(e) =>
            setCategoryFilter(
              e.target.value
            )
          }
        >

          <option value="">
            All Categories
          </option>

          <option value="Water">
            Water
          </option>

          <option value="Electricity">
            Electricity
          </option>

          <option value="Garbage">
            Garbage
          </option>

          <option value="Road">
            Road
          </option>

        </select>

      </div>

      <div className="complaint-grid">

        {
          filteredComplaints.map(
            (item) => (

            <div
              className="complaint-card"
              key={item._id}
            >

              <h3>
                {item.title}
              </h3>

              <p>

                <strong>Name:</strong>

                {item.name}

              </p>

              <p>

                <strong>Email:</strong>

                {item.email}

              </p>

              <p>

                <strong>Description:</strong>

                {item.description}

              </p>

              <p>

                <strong>Category:</strong>

                {item.category}

              </p>

              <p>

                <strong>Location:</strong>

                {item.location}

              </p>

              <p>

                <strong>Status:</strong>

                <span className="status">

                  {item.status}

                </span>

              </p>

              <select
                className="status-dropdown"

                value={item.status}

                onChange={(e) =>
                  updateStatus(
                    item._id,
                    e.target.value
                  )
                }
              >

                <option value="Pending">
                  Pending
                </option>

                <option value="In Progress">
                  In Progress
                </option>

                <option value="Resolved">
                  Resolved
                </option>

              </select>

              <button
                className="delete-btn"

                onClick={() =>
                  deleteComplaint(item._id)
                }
              >

                Delete Complaint

              </button>

            </div>

          ))
        }

      </div>

    </div>

  );

}

export default ComplaintList;