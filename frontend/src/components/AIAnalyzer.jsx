import { useState } from "react";

import axios from "axios";

function AIAnalyzer() {

  const [description, setDescription] =
    useState("");

  const [result, setResult] =
    useState("");

  const analyzeComplaint =
    async () => {

    try {

      const response =
        await axios.post(

          "https://ai-complaint-backend-rj1c.onrender.com/api/ai/analyze",

          {
            description
          }

        );

      setResult(
        response.data.result
      );

    } catch (error) {

      console.log(error);

      alert("AI Failed");

    }

  };

  return (

    <div className="ai-analyzer-container">

      <h2>
        AI Complaint Analyzer
      </h2>

      <textarea

        placeholder="Enter Complaint"

        value={description}

        onChange={(e) =>
          setDescription(
            e.target.value
          )
        }

      ></textarea>

      <button
        onClick={analyzeComplaint}
      >

        Analyze Complaint

      </button>

      {

        result && (

          <div className="ai-result-card">

            <h3>
              AI Analysis
            </h3>

            <p>
              {result}
            </p>

          </div>

        )

      }

    </div>

  );

}

export default AIAnalyzer;