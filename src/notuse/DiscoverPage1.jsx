import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Discover from "../data/DIscover.json";

import AOS from "aos";
import "aos/dist/aos.css";

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
            {Discover &&
              Discover.map((Discover) => (
                <div
                  className="col-sm-6 col-md-4 col-lg-3 Discover-card"
                  key={Discover.id}
                >
                <Link to={`/discover/${Discover.link}`} className="card-link" >
                    <div className="card" data-aos="zoom-out">
                      <img
                        src={Discover.img}
                        className="card-img-top card-img-fixed"
                        alt={`Discover ${Discover.Discover}`}
                      />
                      <div className="card-body">
                        <h5 className="card-title Discover">
                          <b>{Discover.province}</b>
                        </h5>
                        <p className="card-text description">
                          {Discover.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DiscoverPage;
