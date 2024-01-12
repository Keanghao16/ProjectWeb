import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "../../components/Nav";
const PreahVihear = () => {
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
          <h1 className="text-success">Preah Vihear Destination</h1>
          <strong>Best Places to explore in Preah Vihear</strong>
        </div>

        <div className="col-8 offset-2">
          <div className="card">
            <div className="row g-0">
              <div className="col-md-5">
                <img
                  src="../src/assets/img/PreahVihear/Preah_Vihear.jpg"
                  className="card-img-top"
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">Preah Vihear Temple</h5>
                  <p className="card-text">
                    Preah Vihear Temple (Khmer: ប្រាសាទព្រះវិហារ Prasat Preah
                    Vihear) is an ancient Khmer Hindu temple that was built by
                    the Khmer Empire and is on the top of a 525-metre (1,722 ft)
                    cliff in the Dângrêk Mountains, in the Preah Vihear
                    province, Cambodia.
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
                  src="../src/assets/img/PreahVihear/Sopheakmith_Waterflow.jpg"
                  className="card-img-top"
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">Sopheakmit Waterfall</h5>
                  <p className="card-text">
                    The part of the Mekong River where Preah Vihear and Steung
                    Treng Provinces meet transform into a system of raging
                    rapids—on the Cambodian side of the river, the Sopheakmit
                    Waterfalls reveals the power of the Mekong, embodied in a
                    frothing rush of water over 26 meters of limestone rocks.
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

export default PreahVihear;
