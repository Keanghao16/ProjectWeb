import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InnerNav from "../components/InnerNav";
import InnerFooter from "../components/InnerFooter";
import { Link } from "react-router-dom";
import "../assets/css/form.css";
import "../assets/css/innerfooter.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { MenuOpen } from "@mui/icons-material";

const CreateTrip = () => {
  const [isPopupActive, setIsPopupActive] = useState(false);
  const blurRef = useRef(null);
  const popupRef = useRef(null);
  const bodyRef = useRef(document.body);
  const [place, setPlace] = useState();
  const [duration, setDuration] = useState();
  const [people, setPeople] = useState();
  const [money, setMoney] = useState();
  useEffect(() => {
    bodyRef.current = document.body;
    AOS.init();
  }, []);

  const handlePopup = (action) => {
    const blur = blurRef.current;
    const popup = popupRef.current;
    const body = bodyRef.current;

    if (action === "close") {
      setIsPopupActive(false);
      blur.classList.remove("active");
      popup.classList.remove("active");
      body.classList.remove("popup-active");
      body.style.overflow = ""; // Restore default overflow
    } else {
      setIsPopupActive(true);
      blur.classList.add("active");
      popup.classList.add("active");
      body.classList.add("popup-active");
      body.style.overflow = "hidden"; // Prevent scrolling
    }
  };

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
    <div className="App">
      <div ref={popupRef} className="main" id="popup">
        <div className="form login" id="loginForm" style={{ display: "block" }}>
          <div className="form-content">
            <div className="text-end">
              <button
                type="button"
                className="btn-close"
                id="closeBtn"
                aria-label="Close"
                onClick={() => handlePopup("close")}
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

            <a className="mt-5 mx-5 rounded-2"> Yes </a>
          </div>
        </div>
      </div>
      <InnerNav currentPage="CreatTrip" headerElementId="header" />
      <section
        className={` inner-page ${isPopupActive ? "blur-background" : ""}`}
      >
        <div className="container d-flex justify-content-center">
          <div className="col" data-aos="fade-up" data-aos-duration="400">
            <h3>
              <b>
                Plan Your <span class="highlight">trip</span> here!
              </b>
            </h3>
            <div class="question">
              <p>Where do you want to go?</p>
              <select
                class="form-select"
                aria-label=" select example"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              >
                <option value="1" class="option">
                  <i>Koh Kong</i>
                </option>
                <option value="2" class="option">
                  Phnom Penh
                </option>
                <option value="3" class="option">
                  Siem Reap
                </option>
                <option value="4" class="option">
                  Kampot
                </option>
              </select>
            </div>
            <div class="question">
              <p>How long do you want to stay?</p>
              <select
                class="form-select"
                aria-label=" select example"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option value="1" class="option">
                  1 Day
                </option>
                <option value="2" class="option">
                  2 Days
                </option>
                <option value="3" class="option">
                  3 Days
                </option>
                <option value="4" class="option">
                  1 Week
                </option>
              </select>
            </div>
            <div class="question">
              <p>How many people are you going with?</p>
              <select
                class="form-select"
                aria-label=" select example"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
              >
                <option value="1" class="option">
                  1
                </option>
                <option value="2" class="option">
                  2
                </option>
                <option value="3" class="option">
                  3
                </option>
                <option value="4" class="option">
                  4+
                </option>
              </select>
            </div>
            <div class="question">
              <p>How much would you like to spend?</p>
              <select
                class="form-select"
                aria-label=" select example"
                value={money}
                onChange={(e) => setMoney(e.target.value)}
              >
                <option value="1" class="option">
                  50$
                </option>
                <option value="2" class="option">
                  100$
                </option>
                <option value="3" class="option">
                  150$
                </option>
                <option value="4" class="option">
                  200+$
                </option>
              </select>
            </div>
            <div className="bruh" align="center">
              <button
                type="button"
                class="btn btn-danger btn-sm"
                onClick={() => handlePopup("open")}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="kmv">
        <InnerFooter />
      </div>
    </div>
  );
};

export default CreateTrip;
