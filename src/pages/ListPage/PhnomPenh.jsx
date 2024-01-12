import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "../../components/Nav";

const PhnomPenh = () => {
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
          <h1 className="text-success">Phnom Penh Destination</h1>
          <strong>Best Places to explore in Phnom Penh</strong>
        </div>

        <div className="row">
          <div className="col-8 offset-2">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-5">
                  <img
                    src="../src/assets/img/PhnomPenh/National_Museum.jpg"
                    className="card-img-top"
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h4 className="card-title">National Museum of Cambodia</h4>
                    <p className="card-text">
                      The National Museum of Cambodia (Khmer: សារមន្ទីរជាតិ) is
                      Cambodia's largest museum of cultural history and is the
                      country's leading historical and archaeological museum. It
                      is located in Chey Chumneas, Phnom Penh.
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
                    src="../src/assets/img/PhnomPenh/Tuol_Sleng.jpg"
                    className="card-img-top"
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h4 className="card-title">Tuol Sleng Genocide Museum</h4>
                    <p className="card-text">
                      The Tuol Sleng Genocide Museum (Khmer:
                      សារមន្ទីរឧក្រិដ្ឋកម្មប្រល័យពូជសាសន៍ទួលស្លែង, or simply
                      Tuol Sleng (Khmer: ទួលស្លែង) is a museum chronicling the
                      Cambodian genocide. Located in Phnom Penh, the site is a
                      former secondary school which was used as Security Prison
                      21 (S-21; Khmer: មន្ទីរស-២១) by the Khmer Rouge regime
                      from 1975 until its fall in 1979.
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
                    src="../src/assets/img/PhnomPenh/Royal_Palace.jpg"
                    className="card-img-top"
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h4 className="card-title">Royal Palace of Cambodia</h4>
                    <p className="card-text">
                      The Royal Palace of Cambodia (Khmer: ព្រះបរមរាជវាំង) is a
                      complex of buildings which serves as the official royal
                      residence of the King of Cambodia. Its full name in Khmer
                      is the Preah Barom Reacheaveang Chaktomuk Serey Mongkol
                      (Khmer: ព្រះបរមរាជវាំងចតុមុខសិរីមង្គល). The Cambodian
                      monarchs have occupied it since it was built in the 1866s,
                      with a period of absence when the country came into
                      turmoil during and after the reign of the Khmer Rouge.
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

export default PhnomPenh;
