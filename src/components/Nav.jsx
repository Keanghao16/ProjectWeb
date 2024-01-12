import React, { useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import { signInWithPopup, signOut } from "firebase/auth";

import { auth, googleAuthProvider } from "./Firebase";
import { Link } from "react-router-dom";
import { Logo, LogoBlack } from "../assets/img";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";

const Nav = ({
  currentPage,
  headerElementId,
  isPopupActive,
  setPopupActive,
}) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [isNavOpen, setIsNavOpen] = useState(false);
  const thisPage = currentPage;
  const [activeH, setActiveH] = "";
  const [activeD, setActiveD] = "";
  const [activeA, setActiveA] = "";
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
    //still need fixing
    if (currentPage === "HomePage") {
    }

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

  //SignIN

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result);
      localStorage.setItem("token", result.user.accessToken);
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("isLoggedIn", "true");

      toggle("close");
      setIsLoggedIn(true);

      console.log("SignIN Sucessfully");
    } catch (error) {
      console.error(error);
    }
  };

  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.setItem("isLoggedIn", "false");

      setIsLoggedIn(false);

      console.log("SignOut Sucessfully");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div id="blur">
        <header
          id="header"
          className={`fixed-top ${
            thisPage === "DiscoverPage"
              ? "header-scrolled"
              : thisPage === "AboutPage"
              ? "header-scrolled"
              : ""
          } ${isNavOpen ? "header-scrolled" : ""} `}
        >
          <div className="container">
            <nav
              id="navbar"
              className="navbar navbar-expand-lg navbar-dark static-top"
            >
              <div className="container">
                <div className="navbar-brand">
                  <b onClick={NavigateToHome}>
                    <img src={Logo} alt="Logo" />
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
                      <div
                        id="dropdown"
                        className={`dropdown text-end mx-5 ${
                          isLoggedIn ? "visible" : "hidden"
                        }`}
                      >
                        {user && (
                          <img
                            src={user.photoURL}
                            alt="profile"
                            className="imgProfile dropdown-toggle rounded-circle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          />
                        )}

                        <ul className="dropdown-menu">
                          <label className="dropdown-item disabled">
                            {user && user.displayName}
                          </label>
                          <label className="dropdown-item disabled">
                            {user && user.email}
                          </label>
                          <label className="dropdown-item">My Favorite</label>
                          <label
                            className="dropdown-item"
                            onClick={handleLogout}
                          >
                            Sign Out
                          </label>
                        </ul>
                      </div>
                    </li>
                    {!isLoggedIn && (
                      <li>
                        <button
                          className="loginsignups nav-link scrollto visible"
                          onClick={() => toggle()}
                        >
                          Sign In
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
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
              <img src={LogoBlack} alt="logo" />
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

            <GoogleButton
              className="mt-5 mx-5 rounded-2"
              onClick={handleSignInWithGoogle}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
