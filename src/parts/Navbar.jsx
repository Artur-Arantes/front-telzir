import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/fontawesome-free-solid";
import React from "react";

class Navbar extends React.Component {
  state = {
    quantity: parseInt(localStorage.getItem("carts")),
  };

  render() {
    const carStyle = {
      position: "fixed",
      width: "100vw",
      top: "0",
      right: "0",
      zIndex:"999"
    };

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-4" style={carStyle}>
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            TELZIR
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link active me-3" to="/product">
                Planos
              </Link>
              <Link
                className="nav-link btn btn-outline-info px-4 me-3"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="nav-link btn btn-info px-4 me-3 text-white"
                to="/register"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
