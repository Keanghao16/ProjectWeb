import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InnerNav from "../components/InnerNav";
import InnerFooter from "../components/InnerFooter";
import { Link } from "react-router-dom";
import "../assets/css/form.css";
import "../assets/css/innerfooter.css";
import AOS from "aos";
import "aos/dist/aos.css";

const CreateTrip = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <InnerNav currentPage="CreatTrip" headerElementId="header" />
      <section className="inner-page">
        <div className="container d-flex justify-content-center">
          <div className="col" data-aos="fade-up" data-aos-duration="400">
            <h3>
              <b>
                Plan Your <span class="highlight">trip</span> here!
              </b>
            </h3>
            <div class="question">
              <p>Where do you want to go?</p>
              <select class="form-select" aria-label=" select example">
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
              <select class="form-select" aria-label=" select example">
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
              <p>How many people are you going?</p>
              <select class="form-select" aria-label=" select example">
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
              <select class="form-select" aria-label=" select example">
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
              <button type="button" class="btn btn-danger btn-sm">
                Create
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="kdmv">
        <InnerFooter />
      </div>
    </div>
  );
};

export default CreateTrip;
