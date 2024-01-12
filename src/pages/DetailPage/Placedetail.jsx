import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Placedetail = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <main class="cd__main">
        <div class="container my-5">
          <div class="row">
            <div class="col-md-5">
              {/* <!-- Imgae show --> */}
              <div
                id="carouselExampleAutoplaying"
                class="main-img carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="img/island1.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/island2.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="img/island3.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="col-md-7">
              <div class="main-description px-2">
                <div class="place-title text-bold my-3">Koh Kong</div>
                <div class="hints text-bold">Hints</div>
                <div class="discription">
                  Some tips before you go to this place
                  <div>
                    <ul>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                    </ul>
                  </div>
                </div>

                <div class="buttons d-flex my-5">
                  <div class="block">
                    <a href="#" class="shadow btn custom-btn ">
                      <i class="fa-regular fa-heart"></i> favorite
                    </a>
                  </div>
                  <div class="block">
                    <button class="shadow btn custom-btn">
                      <i class="fa-solid fa-location-dot"></i> Location
                    </button>
                  </div>
                </div>
              </div>

              <div class="place-details my-4">
                <p class="details-title text-color mb-1">Place Details</p>
                <p class="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat excepturi odio recusandae aliquid ad impedit autem
                  commodi earum voluptatem laboriosam?{" "}
                </p>
              </div>

              <div className="transportation-container">
                <p class="font-weigth-bold mb-0">
                  <b>Transportation</b>
                </p>
              </div>

              <div class="transportation-options my-2 mx-4 ms-2 d-inline-block mr-3">
                <p class="font-weight-bold mb-0">
                  <span>
                    <i className="bi bi-train-front"></i>
                  </span>{" "}
                  <b>By Train</b>{" "}
                </p>
                <p class="text-secondary">45 min</p>
              </div>

              <div class="transportation-options my-2 mx-4 d-inline-block mr-3">
                <p class="font-weight-bold mb-0">
                  <span>
                    <i className="bi bi-car-front"></i>
                  </span>{" "}
                  <b>By Car</b>{" "}
                </p>
                <p class="text-secondary">40 min</p>
              </div>

              <div class="transportation-options my-2 mx-4 d-inline-block mr-3">
                <p class="font-weight-bold mb-0">
                  <span>
                    <i className="bi bi-bicycle"></i>
                  </span>{" "}
                  <b>By Motocycle</b>{" "}
                </p>
                <p class="text-secondary">30 min</p>
              </div>
            </div>
          </div>
        </div>

        <div class="container nearby-places my-4">
          <hr />
          <p class="display-5">More attractions near Angkor Wat</p>

          <div class="row">
            <div class="col-md-3">
              <div class="nearby-place">
                <img class="w-100" src="img/island1.jpg" alt="Preview" />
                <p class="title">
                  <b>Koh Rong</b>
                </p>
                <p>
                  <u>view</u>
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="nearby-place">
                <img class="w-100" src="img/island2.jpg" alt="Preview" />
                <p class="title">
                  <b>Koh Rong</b>
                </p>
                <p>
                  <u>view</u>
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="nearby-place">
                <img class="w-100" src="img/island3.jpg" alt="Preview" />
                <p class="title">
                  <b>Koh Rong</b>
                </p>
                <p>
                  <u>view</u>
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="nearby-place">
                <img class="w-100" src="img/island1.jpg" alt="Preview" />
                <p class="title">
                  <b>Koh Rong</b>
                </p>
                <p>
                  <u>view</u>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Placedetail;
