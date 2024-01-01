import React, { useEffect } from "react";
import Nav from "../components/Nav";

import Province from "../data/Province.json";


import AOS from "aos";
import "aos/dist/aos.css";

const DiscoverPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Nav />
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
          {Province &&
            Province.map((province) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={province.id}>
                <a href="#" className="card-link">
                  <div className="card" data-aos="zoom-out">
                    <img
                      src={province.img}
                      className="card-img-top card-img-fixed"
                      alt={`Province ${province.province}`}
                    />
                    <div className="card-body">
                      <h5 className="card-title province">
                        {province.province}
                      </h5>
                      <p className="card-text description">
                        {province.description}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default DiscoverPage;
