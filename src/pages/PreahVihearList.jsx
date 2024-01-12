import React, { useEffect } from "react";
import InnerNav from "../components/InnerNav";
import {
  Angkor,
  Bayon,
  Museum,
  MuseumTS,
  PreahVihearTemple,
  RoyalPalace,
  Sopheakmit,
  Taprom,
} from "../assets/img";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const PreahVihearList = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const navigate = useNavigate();

  const NavigateToMuseum = () => {
    navigate("");
  };
  const NavigateToMuseum2 = () => {
    navigate("");
  };
  const NavigateToRoyal = () => {
    navigate("");
  };

  return (
    <>
      <InnerNav currentPage="PreahVihearList" headerElementId="header" />

      <div className="bruhtf">
        <div className="my-4 text-center">
          <h1 className="text-success">Preah Vihear Destination</h1>
          <strong>Best Places to explore in Preah Vihear</strong>
        </div>

        <div>
          <div className="col-8 offset-2">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-5">
                  <img
                    src={PreahVihearTemple}
                    className="card-img-top"
                    alt=""
                  />
                </div>
                <div className="d-flex col-md-7 ">
                  <div className="d-flex card-body justify-content-center">
                    <h5 className="card-title">Preah Vihear Temple</h5>
                    <p className="card-text">
                      Preah Vihear Temple (Khmer: ប្រាសាទព្រះវិហារ Prasat Preah
                      Vihear) is an ancient Khmer Hindu temple that was built by
                      the Khmer Empire and is on the top of a 525-metre (1,722
                      ft) cliff in the Dângrêk Mountains, in the Preah Vihear
                      province, Cambodia.
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
                  <img src={Sopheakmit} className="card-img-top" alt="" />
                </div>
                <div className="d-flex col-md-7 ">
                  <div className="d-flex card-body justify-content-center">
                    <h5 className="card-title">Sopheakmit Waterfall</h5>
                    <p className="card-text">
                      The part of the Mekong River where Preah Vihear and Steung
                      Treng Provinces meet transform into a system of raging
                      rapids—on the Cambodian side of the river, the Sopheakmit
                      Waterfalls reveals the power of the Mekong, embodied in a
                      frothing rush of water over 26 meters of limestone rocks.
                    </p>

                    <a className="card-text" onClick={NavigateToMuseum2}>
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

export default PreahVihearList;
