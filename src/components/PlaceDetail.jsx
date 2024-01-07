import React from "react";

const PlaceDetail = ({ place, isPopupActive }) => {
  return (
    <>
      <div className={`placedetail ${isPopupActive ? "blur-background" : ""}`}>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-5">
              <div
                id="carouselExampleAutoplaying"
                className="main-img carousel slide"
                data-bs-ride="carousel"
                style={{ width: "500px", height: "500px" }}
              >
                <div className="carousel-inner">
                  {place.imageShow.map((img, i) => (
                    <div
                      className={`carousel-item ${i === 0 ? "active" : ""}`}
                      key={i}
                    >
                      <img
                        src={img}
                        className="d-block w-100"
                        alt={`Image ${i}`}
                      />
                    </div>
                  ))}
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
                <div className="place-title text-bold my-3">{place.name}</div>

                <div className="place-details my-4">
                  <p className="details-title text-color mb-1">Place Details</p>
                  <p className="description">{place.description[0]}</p>
                </div>

                <div className="hints text-bold">Hints</div>
                <div className="discription">
                  Some tips before you go to this place
                  <div>
                    <ul>
                      {place.hint.map((hint, index) => (
                        <li key={index}>{hint}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="buttons d-flex my-5">
                  <div className="block">
                    <a href="#" className="shadow btn custom-btn ">
                      <i className="fa-regular fa-heart"></i> favorite
                    </a>
                  </div>
                  <div className="block">
                    <button className="shadow btn custom-btn">
                      <i className="fa-solid fa-location-dot"></i> Location
                    </button>
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
                    <p className="text-secondary">
                      {place.transportation[0]}
                    </p>
                  </div>

                  <div className="transportation-options my-2 mx-4 d-inline-block mr-3">
                    <p className="font-weight-bold mb-0">
                      <span>
                        <i className="bi bi-car-front"></i>
                      </span>{" "}
                      <b>By Bus</b>{" "}
                    </p>
                    <p className="text-secondary">
                      {place.transportation[1]}
                    </p>
                  </div>

                  <div className="transportation-options my-2 mx-4 d-inline-block mr-3">
                    <p className="font-weight-bold mb-0">
                      <span>
                        <i className="bi bi-bicycle"></i>
                      </span>{" "}
                      <b>By Motorcycle</b>{" "}
                    </p>
                    <p className="text-secondary">
                      {place.transportation[2]}
                    </p>
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
            {place.placeNearby.map((place, index) => (
              <div className="col-md-3" key={index}>
                <div className="nearby-place">
                  <img
                    className="w-100"
                    src={place.image}
                    alt={`Preview of ${place.name}`}
                  />
                  <p className="title">
                    <b>{place.name}</b>
                  </p>
                  <p>
                    <u>view</u>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default PlaceDetail;
