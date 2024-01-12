import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "../../components/Nav";
const Kampot = () => {
  const [isPopupActive, setIsPopupActive] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Nav
        currentPage="DiscoverPage"
        headerElementId="header"
        isPopupActive={isPopupActive}
        setPopupActive={setIsPopupActive}
      />

      <div className={`container ${isPopupActive ? "blur-background" : ""}`}>
        <div className="my-4 text-center">
          <h1 className="text-success">Kampot Destination</h1>
          <strong>Best Places to explore in Kampot</strong>
        </div>

        <div className="col-8 offset-2">
          <div className="card">
            <div className="row g-0">
              <div className="col-md-5">
                <img
                  src="../src/assets/img/Kampot/Bokor_Hill.jpg"
                  className="card-img-top"
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h4 className="card-title">Bokor Hill Station</h4>
                  <p className="card-text">
                    Bokor Hill Station (Khmer: ស្ថានីយភ្នំបូកគោ) refers to a
                    collection of French colonial buildings constructed as a
                    temperate mountain luxury resort and retreat for colonial
                    residents in the early 1920s atop Bokor Mountain in Preah
                    Monivong National Park, about 37 km (23 mi) west of Kampot
                    in southern Cambodia.
                  </p>
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

        <div className="col-8 offset-2">
          <div className="card">
            <div className="row g-0">
              <div className="col-md-5">
                <img
                  src="../src/assets/img/Kampot/Preak_Monivong.jpg"
                  className="card-img-top"
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h4 className="card-title">Preah Monivong National Park</h4>
                  <p className="card-text">
                    Preah Monivong Bokor National Park (Khmer:
                    ឧទ្យានជាតិព្រះមុនីវង្ស បូកគោ) is a national park in southern
                    Cambodia's Kampot Province that was established in 1993 and
                    covers 1,544.58 km2 (596.37 sq mi). In 2003, it was
                    designated as an ASEAN Heritage Park. It is located in the
                    Dâmrei Mountains, forming the southeastern parts of the
                    Cardamom Mountains. Most of the park is about 1,000 metres
                    above sea level and the highest peak is Phnom Bokor at 1,081
                    metres, also referred to as Bokor Mountain.
                  </p>
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

        <div className="col-8 offset-2">
          <div className="card">
            <div className="row g-0">
              <div className="col-md-5">
                <img
                  src="../src/assets/img/Kampot/Phnom Chhngok Cave.jpg"
                  className="card-img-top"
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h4 className="card-title">Phnom Chhngok Cave</h4>
                  <p className="card-text">
                    Phnom Chhnork is a Hindu cave temple in Kampot Province,
                    southern Cambodia, located about 5 miles north-east of
                    Kampot. The temple was built in the 7th century from Funan
                    brick, dedicated to Shiva. It is accessed via stone steps.
                  </p>
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
      </div>
    </>
  );
};

export default Kampot;
