import React, { useEffect } from "react";
import InnerNav from "../components/InnerNav";
import { Museum, MuseumTS, RoyalPalace } from "../assets/img";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const PhnomPenhList = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const navigate = useNavigate();

  const NavigateToMuseum = () => {
    navigate("/discover/phnompenhlist/museum");
  };
  const NavigateToMuseum2 = () => {
    navigate("/discover/phnompenhlist/museum2");
  };
  const NavigateToRoyal = () => {
    navigate("/discover/phnompenhlist/royal");
  };

  return (
    <>
      <InnerNav currentPage="PhnomPenhList" headerElementId="header" />

      <div className="bruhtf">
        <div className="my-4 text-center">
          <h1 className="text-success">Phnom Penh Destinations</h1>
          <strong>Best Places to explore in Phnom Penh</strong>
        </div>

        <div>
          <div className="col-8 offset-2">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-5">
                  <img src={Museum} className="card-img-top" alt="" />
                </div>
                <div className="d-flex col-md-7 ">
                  <div className="d-flex card-body justify-content-center">
                    <h5 className="card-title">National Museum of Cambodia</h5>
                    <p className="card-text">
                      With ancient artifacts from the 1600s, cultural
                      performances by Khmer dancers, stone busts of Buddhist
                      figures, full statues of Cambodian warriors, models of
                      traditional Khmer houses, clothing and accessories worn by
                      modern day farmers, and more- the National Museum is a
                      comprehensive representation of Khmer culture. Covering
                      ancient times to present day, give yourself a few hours to
                      absorb all of the information presented in the various
                      galleries.
                    </p>

                    <a className="card-text" onClick={NavigateToMuseum}>
                      Details...
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row g-0">
                <div className="col-md-5">
                  <img src={MuseumTS} className="card-img-top" alt="" />
                </div>
                <div className="d-flex col-md-7 ">
                  <div className="d-flex card-body justify-content-center">
                    <h5 className="card-title">Tuol Sleng Genocide Museum</h5>
                    <p className="card-text">
                      The Tuol Sleng Genocide Museum is a museum chronicling the
                      Cambodian genocide. Located in Phnom Penh, the site is a
                      former secondary school which was used as Security Prison
                      21 (S-21; Khmer: មន្ទីរស-២១) by the Khmer Rouge regime
                      from 1975 until its fall in 1979.
                    </p>

                    <a className="card-text" onClick={NavigateToMuseum2}>
                      Details...
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row g-0">
                <div className="col-md-5">
                  <img src={RoyalPalace} className="card-img-top" alt="" />
                </div>
                <div className="d-flex col-md-7 ">
                  <div className="d-flex card-body justify-content-center">
                    <h5 className="card-title">Royal Palace of Cambodia</h5>
                    <p className="card-text">
                      The Royal Palace of Cambodia is a complex of buildings
                      which serves as the official royal residence of the King
                      of Cambodia. Its full name in Khmer is the Preah Barom
                      Reacheaveang Chaktomuk Serey Mongkol . The Cambodian
                      monarchs have occupied it since it was built in the 1866s,
                      with a period of absence when the country came into
                      turmoil during and after the reign of the Khmer Rouge.
                    </p>

                    <a className="card-text" onClick={NavigateToMuseum}>
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

export default PhnomPenhList;
