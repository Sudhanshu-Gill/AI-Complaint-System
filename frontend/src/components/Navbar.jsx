import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logoutUser = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (

    <div className="navbar">

      <div className="brand">

        <div className="brand-logo">
          AI
        </div>

        <h2>
          ComplaintHub
        </h2>

      </div>

      <div className="nav-links">

        <Link to="/complaints">
          Dashboard
        </Link>

        <Link to="/ai">
          AI Analyzer
        </Link>

        <Link to="/signup">
          Signup
        </Link>

      </div>

      <button
        className="logout-btn"
        onClick={logoutUser}
      >
        Logout
      </button>

    </div>

  );

}

export default Navbar;