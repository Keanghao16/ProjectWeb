import React, { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import LocationBTN from "../components/LocationBTN";
import "../assets/css/style.css";
import { Museum } from "../assets/img";

const MuseumDetail = () => {
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
                  <img src={Museum} className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item active">
                  <img src={Museum} className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item active">
                  <img src={Museum} className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item active">
                  <img src={Museum} className="d-block w-100" alt="" />
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
              <div className="place-title text-bold my-3">
                National Museum of Cambodia
              </div>

              <div className="place-details my-4">
                <p className="details-title text-color mb-1">Place Details</p>
                <p className="description">
                  The National Museum of Cambodia is home to the world’s finest
                  collection of Khmer sculpture: a millennium’s worth and more
                  of masterful Khmer design. It's housed in a graceful
                  terracotta structure of traditional design (built from 1917 to
                  1920) with an inviting courtyard garden, just north of the
                  Royal Palace.
                </p>
              </div>

              <div className="hints text-bold">Hints</div>
              <div className="discription">
                Some tips before you go to this place
                <div>
                  <ul>
                    <li>
                      Opening hours: The museum is open daily from 8:00 AM to
                      5:00 PM. The last admission is at 4:30 PM.
                    </li>
                    <li>
                      Tickets: Tickets cost $10 for foreigners aged 18 and
                      above, $5 for foreigners aged 10-17, and 500 riel for
                      Cambodians. Children under 10 and school groups enter for
                      free. You can purchase tickets at the entrance.
                    </li>
                    <li>
                      Getting there: The National Museum is located on Street 13
                      in central Phnom Penh, next to the Royal Palace. You can
                      easily reach the museum by tuk-tuk, taxi, or on foot.
                    </li>
                    <li>
                      Wear comfortable shoes: You'll be doing a lot of
                      walking, so make sure you're wearing comfortable shoes.
                    </li>
                    <li>
                      Bring water: It can get hot and humid in Phnom Penh, so
                      make sure you bring water with you.
                    </li>
                    <li>
                      Take your time: There's a lot to see at the museum, so
                      take your time and enjoy the exhibits.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="buttons d-flex my-5">
                <div className="block">
                  <a href="#" class="shadow btn custom-btn ">
                    <i class="bi bi-heart-fill"></i> Favorite
                  </a>
                </div>
                <div className="block">
                  <LocationBTN url="https://maps.app.goo.gl/RmfCpUQCiS3Let2PA" />
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
        <p className="display-5">
          More attractions near National Museum of Cambodia
        </p>

        <div className="row">
          <div className="col-md-3">
            <div className="nearby-place">
              <img className="w-100" src={Museum} alt="" />
              <p className="title">
                <b>Silver Pagoda</b>
              </p>
              <p>
                <u>view</u>
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="nearby-place">
              <img className="w-100" src={Museum} alt="" />
              <p className="title">
                <b>Silver Pagoda</b>
              </p>
              <p>
                <u>view</u>
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="nearby-place">
              <img className="w-100" src={Museum} alt="" />
              <p className="title">
                <b>Silver Pagoda</b>
              </p>
              <p>
                <u>view</u>
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="nearby-place">
              <img className="w-100" src={Museum} alt="" />
              <p className="title">
                <b>Silver Pagoda</b>
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

export default MuseumDetail;
