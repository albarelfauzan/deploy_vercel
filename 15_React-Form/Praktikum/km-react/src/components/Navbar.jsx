import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fw-semibold p-3"
        style={{
          backgroundColor: "white",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="container-fluid mx-5">
          <Link className="navbar-brand" to="/" style={{ color: "#000000" }}>
            Simple Header
          </Link>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 gap-4">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  aria-current="page"
                  style={{ color: "#0D6EFD" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/create"
                  className="nav-link"
                  style={{ color: "#0D6EFD" }}
                >
                  Create Product
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#about-modal"
                  href="/create"
                  style={{ color: "#0D6EFD" }}
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#about-modal"
                  href="#"
                  style={{ color: "#0D6EFD" }}
                >
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-disabled="true"
                  style={{ color: "#0D6EFD" }}
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
