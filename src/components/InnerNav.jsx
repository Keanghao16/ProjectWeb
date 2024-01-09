import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/innernav.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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

  return (
    <>
      <div>
        <header id="header" className="fixed-top">
          <div className="container">
            <nav
              id="navbar"
              className="navbar navbar-expand navbar-dark static-top"
            >
              <div className="container">
                <div className="navbar-brand">
                  <h1 onClick={NavigateToHome} className="icon-container">
                    <ArrowBackIcon className="backicon" />
                  </h1>
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
