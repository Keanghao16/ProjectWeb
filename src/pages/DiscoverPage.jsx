import React, { useEffect, useState } from "react";

import Nav from "../components/Nav";
import Discover from "../data/Discover.json";

import AOS from "aos";
import "aos/dist/aos.css";
import {
  PhnomPenh,
  SiemReap,
  PreahVihear,
  Battambang,
  Kampot,
  Mondulkiri,
  Koh_Kong,
  StungTreng,
} from "../assets/img";

const DiscoverPage = () => {
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

      <div className={` ${isPopupActive ? "blur-background" : ""}`}>
        <main id="main">
          <section id="about" className="about">
            <div className="container discovertitle" data-aos="fade-up">
              <div className="section-title">
                <h2>Popular Places</h2>
                <p>
                  <i>Get inspiration for your next trip</i>
                </p>
              </div>
            </div>
          </section>
        </main>

        <div className="container dis">
          <div className="row gy-3 my-3">
            <div className="col-sm-6 col-md-4 col-lg-3 province-card">
              <a href="#" className="card-link">
                <div className="card" data-aos="zoom-out" data-aos-once="true">
                  <img
                    src={PhnomPenh}
                    className="card-img-top card-img-fixed"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title Discover">
                      <b>Phnom Penh</b>
                    </h5>
                    <p className="card-text description">
                      Phnom Penh is the capital and most populous city of
                      Cambodia. Phnom Penh, after years... See more
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 province-card">
              <a href="#" className="card-link">
                <div className="card" data-aos="zoom-out" data-aos-once="true">
                  <img
                    src={SiemReap}
                    className="card-img-top card-img-fixed"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title Discover">
                      <b>Siem Reap</b>
                    </h5>
                    <p className="card-text description">
                      As the gateway to the magnificent temples of Angkor, Siem
                      Reap is sitting on Southeast... See more
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 province-card">
              <a href="#" className="card-link">
                <div className="card" data-aos="zoom-out" data-aos-once="true">
                  <img
                    src={PreahVihear}
                    className="card-img-top card-img-fixed"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title Discover">
                      <b>Preah Vihear</b>
                    </h5>
                    <p className="card-text description">
                      Prasat Preah Vihear is the compound of words Prasat, Preah
                      and Vihear, which mean... See more
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 province-card">
              <a href="#" className="card-link">
                <div className="card" data-aos="zoom-out" data-aos-once="true">
                  <img
                    src={Battambang}
                    className="card-img-top card-img-fixed"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title Discover">
                      <b>Battambang</b>
                    </h5>
                    <p className="card-text description">
                      Want to see the real Cambodia? Come to Battambang. While
                      Battambang is the ... See more
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 province-card">
              <a href="#" className="card-link">
                <div className="card" data-aos="zoom-out" data-aos-once="true">
                  <img
                    src={Kampot}
                    className="card-img-top card-img-fixed"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title Discover">
                      <b>Kampot</b>
                    </h5>
                    <p className="card-text description">
                      Kampot one of Cambodia's most attractive old towns. Famous
                      for its pepper, Kampot supplied... See more
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 province-card">
              <a href="#" className="card-link">
                <div className="card" data-aos="zoom-out" data-aos-once="true">
                  <img
                    src={Mondulkiri}
                    className="card-img-top card-img-fixed"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title Discover">
                      <b>Mondulkiri</b>
                    </h5>
                    <p className="card-text description">
                      Mondulkiri is a province in eastern Cambodia. It is known
                      for its lush forests, rolling hills, and ... See more
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 province-card">
              <a href="#" className="card-link">
                <div className="card" data-aos="zoom-out" data-aos-once="true">
                  <img
                    src={Koh_Kong}
                    className="card-img-top card-img-fixed"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title Discover">
                      <b>Khemarak Phoumin</b>
                    </h5>
                    <p className="card-text description">
                      Khemarak Phoumin, also Koh Kong, is the capital and
                      largest city of Koh Kong ... See more
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 province-card">
              <a href="#" className="card-link">
                <div className="card" data-aos="zoom-out" data-aos-once="true">
                  <img
                    src={StungTreng}
                    className="card-img-top card-img-fixed"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title Discover">
                      <b>Stung Treng</b>
                    </h5>
                    <p className="card-text description">
                      Stung Treng is a province located in the northeastern part
                      of Cambodia, bordering Laos. It is ... See more
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverPage;
