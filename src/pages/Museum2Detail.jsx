import React, { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import LocationBTN from "../components/LocationBTN";
import "../assets/css/style.css";
import { MuseumTS } from "../assets/img";

const Museum2Detail = () => {
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
                  <img src={MuseumTS} className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item active">
                  <img src={MuseumTS} className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item active">
                  <img src={MuseumTS} className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item active">
                  <img src={MuseumTS} className="d-block w-100" alt="" />
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
                  The Tuol Sleng Genocide Museum in Phnom Penh, Cambodia, stands
                  as a stark reminder of the horrors of the Khmer Rouge regime.
                  It's a place of immense historical significance, but also one
                  that can be emotionally challenging to visit.
                </p>
              </div>

              <div className="hints text-bold">Hints</div>
              <div className="discription">
                Some tips before you go to this place
                <div>
                  <ul>
                    <li>
                      Be prepared for an emotional experience: Visiting Tuol
                      Sleng can be a deeply moving and disturbing
                      experience. It's important to be prepared for the
                      emotional impact of the exhibits and take breaks if
                      needed.
                    </li>
                    <li>
                      Dress respectfully: Out of respect for the victims and
                      survivors, dress modestly and conservatively when visiting
                      the museum.
                    </li>
                    <li>
                      Hire an audio guide or guide: Consider hiring an audio
                      guide or guide to provide context and deeper understanding
                      of the exhibits. Their insights can help you navigate the
                      museum's complex history.
                    </li>
                    <li>
                      Take breaks: The museum can be overwhelming, so take
                      breaks when needed. There are gardens and courtyards
                      within the museum where you can find some peace and quiet.
                    </li>
                    <li>
                      Reflect on the importance of remembrance: Tuol Sleng is a
                      powerful reminder of the importance of remembering and
                      learning from dark chapters in history. Take time to
                      reflect on the museum's message of peace and tolerance.
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
                  <LocationBTN url="https://maps.app.goo.gl/iuJZgioDAj5LKGv18" />
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
          More attractions near Tuol Sleng Genocide Museum
        </p>

        <div className="row">
          <div className="col-md-3">
            <div className="nearby-place">
              <img className="w-100" src={MuseumTS} alt="" />
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

export default Museum2Detail;
