import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/innernav.css";

const InnerNav = ({
  currentPage,
  headerElementId,
  isPopupActive,
  setPopupActive,
}) => {
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
        <header id="header" className="fixed-top">
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
              </div>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default InnerNav;
