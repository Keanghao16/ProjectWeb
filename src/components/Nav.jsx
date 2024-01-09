import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";

const Nav = ({
  currentPage,
  headerElementId,
  isPopupActive,
  setPopupActive,
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  useEffect(() => {
    const selectHeader = document.querySelector(`#${headerElementId}`);

    const headerScrolled = () => {
      if (currentPage === "HomePage") {
        if (window.scrollY > 100) {
          selectHeader.classList.add("header-scrolled");
        } else {
          selectHeader.classList.remove("header-scrolled");
        }
      } else {
        // For pages other than HomePage, always add the class
        selectHeader.classList.add("header-scrolled");
      }
    };

    // Call headerScrolled manually when the currentPage changes
    headerScrolled();

    // Add event listeners
    window.addEventListener("scroll", headerScrolled);

    // Cleanup: Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", headerScrolled);
      document.body.style.overflow = ""; // Restore default overflow
    };
  }, [currentPage, headerElementId]);

  const navigate = useNavigate();
  const NavigateToHome = () => {
    navigate("/");
  };

  function toggle(action) {
    var blur = document.getElementById("blur");
    var popup = document.getElementById("popup");
    var body = document.body;

    if (action === "close") {
      setPopupActive(false);
      blur.classList.remove("active");
      popup.classList.remove("active");
      body.classList.remove("popup-active");
      body.style.overflow = ""; // Restore default overflow
    } else {
      setPopupActive(true);
      blur.classList.add("active");
      popup.classList.add("active");
      body.classList.add("popup-active");
      body.style.overflow = "hidden"; // Prevent scrolling
    }
  }

  // close the popup when clicking outside and ESC key
  document.addEventListener("click", function (event) {
    var popup = document.getElementById("popup");
    var blur = document.getElementById("blur");

    if (!popup.contains(event.target) && !blur.contains(event.target)) {
      toggle("close");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      toggle("close");
    }
  });

  return (
    <>
      <div id="blur">
        <header
          id="header"
          className={`fixed-top ${isNavOpen ? "header-scrolled" : ""}`}
        >
          <div className="container">
            <nav
              id="navbar"
              className="navbar navbar-expand-lg navbar-dark static-top"
            >
              <div className="container">
                <div className="navbar-brand">
                  <b onClick={NavigateToHome}>
                    <img src={"public/image/triplogo.png"} alt="Logo" />
                  </b>
                </div>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded={isNavOpen ? "true" : "false"}
                  aria-label="Toggle navigation"
                  onClick={handleToggle}
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link
                        to="/"
                        className={`nav-link scrollto ${
                          location.pathname === "/" && "active"
                        }`}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/discover"
                        className={`nav-link scrollto ${
                          location.pathname === "/discover" && "active"
                        }`}
                      >
                        Discover
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className={`nav-link scrollto ${
                          location.pathname === "/about" && "active"
                        }`}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <a
                        className="loginsignups nav-link scrollto signinBTN"
                        href="#"
                        onClick={() => toggle()}
                      >
                        Sign In
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <div
              id="dropdown"
              className="dropdown text-end mx-5"
              style={{ display: "none" }}
            >
              <img
                src=""
                alt="profile"
                className="imgProfile dropdown-toggle rounded-circle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />

              <ul className="dropdown-menu">
                <label className="dropdown-item name disabled"></label>
                <label className="dropdown-item email disabled"></label>
                <li className="dropdown-item">My Favorite</li>
                <li className="dropdown-item" onClick={() => signOut()}>
                  Sign Out
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>

      <div className="main" id="popup">
        <div className="form login" id="loginForm" style={{ display: "block" }}>
          <div className="form-content">
            <div className="text-end">
              <button
                type="button"
                className="btn-close"
                id="closeBtn"
                aria-label="Close"
                onClick={() => toggle("close")}
              ></button>
            </div>
            <div className="text-start">
              <img src={"public/image/triplogoblk.png"} alt="logo" />
            </div>
            <div className="text-center mt-3">
              <label className="fs-5 ">
                <b>
                  Sign In your account with
                  <br />
                  Trip Planner
                </b>
              </label>
            </div>

            <div id="google-button" className="mt-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
