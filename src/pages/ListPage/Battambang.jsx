import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "../../components/Nav";
const Battambang = () => {
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
          <h1 className="text-success">Battambong Destination</h1>
          <strong>Best Places to explore in Battambong</strong>
        </div>

        <div className="row">
          <div className="col-8 offset-2">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-5">
                  <img
                    src="../src/assets/img/Battambang/Ancient_House.jpg"
                    className="card-img-top"
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h4 className="card-title">
                      Mrs. Bun Roeung's Ancient House
                    </h4>
                    <p className="card-text">
                      This ancient house was occupied and maintained for three
                      generations already. This house measures 29 meters in
                      length and 10.5 meters in width, and was constructed on a
                      surface area of 5, 450 square meters in Pet style(a kind
                      of house), meaning that the house has verandahs (drying
                      place) at the front and its two sides.
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
                    src="../src/assets/img/Battambang/Battambang_townhouses.jpg"
                    className="card-img-top"
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h4 className="card-title">Krong Battambang</h4>
                    <p className="card-text">
                      Battambang was established as an important trading city
                      with around 2,500 residents in the 18th century. The
                      population was centred along a single road parallel to the
                      Sangkae River (Stung Sangkae). In 1795 Siam (modern-day
                      Thailand) annexed much of north western Cambodia including
                      the current provinces of Banteay Meanchey, Battambang,
                      Oddar Meanchey, Pailin, and Siem Reap into the province of
                      Inner Cambodia.
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
                    src="../src/assets/img/Battambang/Ek_Phnom.jpg"
                    className="card-img-top"
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h4 className="card-title">Wat Ek Phnom</h4>
                    <p className="card-text">
                      Wat Ek Phnom is an Angkorian temple located on the left
                      side of the Sangkae River at the small creek of Prek Daun
                      Taev northwest the Peam Aek spot approximately 9 km north
                      of the city of Battambang in north western Cambodia. It is
                      a Hindu temple built in the 11th century under the rule of
                      King Suryavarman I. Although partly collapsed and looted
                      it is famous for its well-carved lintels and pediments.
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
      </div>
    </>
  );
};

export default Battambang;
