import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
// import { auth, googleAuthProvider } from "./Signin";
import { signInWithPopup, signOut } from "firebase/auth";

import { auto, googleAuthProvider } from "./Signin";

import { Link } from "react-router-dom";

const Nav = ({
  currentPage,
  headerElementId,
  isPopupActive,
  setPopupActive,
}) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
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

  // Mobile Nav Toggle

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
      const result = await signInWithPopup(auto, googleAuthProvider);
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
      await signOut(auto);
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
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center justify-content-between">
            <h1 className="logo me-auto">
              <a href="/">
                <img src={"public/image/triplogo.png"} alt="Logo" />
              </a>
            </h1>
            <nav id="navbar" className="navbar">
              <div className="container d-flex justify-content-evenly">
                <ul>
                  <li>
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
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
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
                <li className="dropdown-item">My Favorite</li>
                <li className="dropdown-item" onClick={handleLogout}>
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

            <GoogleButton className="mt-5 mx-5 rounded-2" onClick={handleSignInWithGoogle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
