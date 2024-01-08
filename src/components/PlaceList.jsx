import React from "react";

const PlaceList = ({ Province, isPopupActive }) => {
  return (
    <div className={`container ${isPopupActive ? "blur-background" : ""}`}>
      <div className="my-4 text-center">
        <h1 className="text-success">Koh Kong Destination</h1>
        <strong>Best Places to expore in Koh Kong</strong>
      </div>
      {Object.keys(Province).map((place) => (
        <div key={place}>
          {Province[place].map((item) => (
            <div className="col-8 offset-2">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-5">
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt={`${item.name} Image`}
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                      <div className="card-body d-flex align-items-center justify-content-center">
                        <a className="card-text" href="#">
                          Details...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PlaceList;
