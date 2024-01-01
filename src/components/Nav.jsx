import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <>
      <div id="blur">
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center justify-content-between">
            <h1 className="logo me-auto">
              <a href="index.html">
                <img src={"public/image/triplogo.png"} alt="Logo" />
              </a>
            </h1>
            <nav id="navbar" className="navbar">
              <div className="container d-flex justify-content-evenly">
                <ul>
                  <li>
                    <Link to="/" className="nav-link scrollto">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/discover" className="nav-link scrollto">
                      Discover
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="nav-link scrollto">
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
              <i className="bi bi-list mobile-nav-toggle"></i>
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
