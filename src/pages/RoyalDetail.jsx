import React, { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import LocationBTN from "../components/LocationBTN";
import "../assets/css/style.css";
import { Museum, RoyalPalace } from "../assets/img";

const RoyalDetail = () => {
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
                  <img src={RoyalPalace} className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item active">
                  <img src={RoyalPalace} className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item active">
                  <img src={RoyalPalace} className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item active">
                  <img src={RoyalPalace} className="d-block w-100" alt="" />
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
                  The palace grounds boast a captivating blend of traditional
                  Khmer architecture with influences from French colonial
                  design. Golden spires, intricate carvings, and colorful murals
                  adorn the buildings, creating a visually stunning spectacle.
                   Two of the most iconic structures are the Throne Hall, where
                  the King holds official ceremonies, and the Silver
                  Pagoda, adorned with over 5,000 silver tiles. The intricate
                  details and craftsmanship of these buildings are truly
                  awe-inspiring.1
                </p>
              </div>

              <div className="hints text-bold">Hints</div>
              <div className="discription">
                Some tips before you go to this place
                <div>
                  <ul>
                    <li>
                      Dress modestly: Out of respect for Cambodian culture, it's
                      important to dress modestly when visiting the
                      palace. Cover your shoulders and knees, and avoid
                      revealing clothing.
                    </li>
                    <li>
                      LMind the dress code: Sleeveless shirts, shorts, and
                      ripped clothing are not permitted within the palace
                      grounds. You can rent appropriate clothing at the entrance
                      if needed.
                    </li>
                    <li>
                      Footwear matters: Comfortable shoes are essential, as
                      you'll be doing a fair amount of walking on uneven
                      surfaces.
                    </li>
                    <li>
                      Respectful behavior: Maintain a respectful demeanor
                      throughout your visit. Speak softly, avoid touching
                      exhibits, and be mindful of other visitors.
                    </li>
                    <li>
                      Hire a guide: Consider hiring a guide for a deeper
                      understanding of the palace's history and
                      significance. They can point out hidden details and share
                      fascinating stories about the royal family and Cambodian
                      traditions.
                    </li>
                    <li>
                      Best time to visit: Early mornings or late afternoons
                      offer the most pleasant temperatures and fewer crowds. The
                      palace is closed on Mondays.
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
                <div class="block">
                  <LocationBTN url="https://maps.app.goo.gl/NJJz3KLZEPCzJZ6D8" />
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
        <p className="display-5">More attractions near Royal Palace</p>

        <div className="row">
          <div className="col-md-3">
            <div className="nearby-place">
              <img className="w-100" src={Museum} alt="" />
              <p className="title">
                <b>National Museum of Cambodia</b>
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

export default RoyalDetail;
