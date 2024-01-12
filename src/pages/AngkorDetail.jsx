import React, { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

import "../assets/css/style.css";
import { Museum, Angkor } from "../assets/img";
import LocationBTN from "../components/LocationBTN";

const AngkorDetail = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-5">
            <div
              id="carouselExampleAutoplaying"
              className="main-img carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Angkor} className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item active">
                  <img src={Angkor} className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item active">
                  <img src={Angkor} className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item active">
                  <img src={Angkor} className="d-block w-100" alt="" />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="col-md-7">
            <div className="main-description px-2">
              <div className="place-title text-bold my-3">Angkor Wat</div>

              <div className="place-details my-4">
                <p className="details-title text-color mb-1">Place Details</p>
                <p className="description">
                  Angkor Wat lies 5.5 kilometres (3+1⁄2 mi) north of the modern
                  town of Siem Reap, and a short distance south and slightly
                  east of the previous capital, which was centred at Baphuon. In
                  an area of Cambodia where there is an essential group of
                  ancient structures, it is the southernmost of Angkor's main
                  sites.[citation needed] The construction of Angkor Wat took
                  place over 28 years from 1122 to 1150 CE during the reign of
                  King Suryavarman II (ruled 1113–c. 1150).[12] A brahmin by the
                  name of Divākarapaṇḍita (1040–c. 1120) was responsible for
                  urging Suryavarman II to construct the temple.[13] All of the
                  original religious motifs at Angkor Wat derived from
                  Hinduism.[14] Breaking from the Shaiva tradition of previous
                  kings, Angkor Wat was instead dedicated to Vishnu. It was
                  built as the king's state temple and capital city. As neither
                  the foundation stela nor any contemporary inscriptions
                  referring to the temple have been found, its original name is
                  unknown, but it may have been known as Vrah Viṣṇuloka after
                  the presiding deity. Work seems to have ended shortly after
                  the king's death, leaving some of the bas-relief decoration
                  unfinished.[15] The term Vrah Viṣṇuloka or Parama Viṣṇuloka
                  literally means "The king who has gone to the supreme world of
                  Vishnu", which refer to Suryavarman II posthumously and intend
                  to venerate his glory and memory.
                </p>
              </div>

              <div className="hints text-bold">Hints</div>
              <div className="discription">
                Some tips before you go to this place
                <div>
                  <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                  </ul>
                </div>
              </div>

              <div className="buttons d-flex my-5">
                <div className="block">
                  <a href="#" class="shadow btn custom-btn ">
                    <i class="bi bi-heart-fill"></i> Favorite
                  </a>
                </div>
                <div class="block">
                  <LocationBTN url="https://maps.app.goo.gl/Q4UrgHXMDEN4m73X7" />
                </div>
              </div>

              <div className="transportation-container">
                <p className="font-weigth-bold mb-0">
                  <b>Transportation</b>
                </p>

                <div className="transportation-options my-2 mx-4 ms-2 d-inline-block mr-3">
                  <p className="font-weight-bold mb-0">
                    <span>
                      <i className="bi bi-train-front"></i>
                    </span>{" "}
                    <b>By Air</b>{" "}
                  </p>
                  <p className="text-secondary">30 min - 1 hour</p>
                </div>

                <div className="transportation-options my-2 mx-4 d-inline-block mr-3">
                  <p className="font-weight-bold mb-0">
                    <span>
                      <i className="bi bi-car-front"></i>
                    </span>{" "}
                    <b>By Bus</b>{" "}
                  </p>
                  <p className="text-secondary">5 hours</p>
                </div>

                <div className="transportation-options my-2 mx-4 d-inline-block mr-3">
                  <p className="font-weight-bold mb-0">
                    <span>
                      <i className="bi bi-bicycle"></i>
                    </span>{" "}
                    <b>By Motorcycle</b>{" "}
                  </p>
                  <p className="text-secondary">5 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container nearby-places my-4">
        <hr />
        <p className="display-5">More attractions near Angkor Wat</p>

        <div className="row">
          <div className="col-md-3">
            <div className="nearby-place">
              <img className="w-100" src={Museum} alt="" />
              <p className="title">
                <b>National Museum of Angkor</b>
              </p>
              <p>
                <u>view</u>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AngkorDetail;
