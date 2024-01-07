import React, { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Nav currentPage="AboutPage" headerElementId="header" />

      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About Us</h2>
          </div>

          <div className="row content">
            <div className="col-lg-6">
              <p>
                We're a team of aspiring individuals who have never actually
                traveled in our lives but spend everyday sitting in front of a
                computer browsing for places to put into this website.
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i> I didn't sign up for
                  this, where's the easy part{" "}
                </li>
                <li>
                  <i className="ri-check-double-line"></i> I had a culture shock
                  when I first entered the className
                </li>
                <li>
                  <i className="ri-check-double-line"></i> I wanna kill myself
                </li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                We're really not that advanced in terms of programming, but
                we're trying our best right now so please if you're reading this
                teacher pls pls pls give us good grades T-T we are struggling so
                hard rn whoever tf said univserity is fun they fucking lied cant
                believe i fell for it i wanna go back to elementary.
              </p>
              <a href="#" className="btn-learn-more">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Team</h2>
            <p>
              As you can see we only have 3 people in this team, which is if my
              math is correct, not a lot. We need help with API
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src="img/teammember.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Thou Sokphanun</h4>
                  <span>Chief Executive Officer</span>
                  <p></p>
                  <div className="social">
                    <a href="">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src="img/teammember.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Tie Keanghao</h4>
                  <span>Product Manager</span>
                  <p>jg yy tha ot dg</p>
                  <div className="social">
                    <a href="">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 mt-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src="img/teammember.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Thon Ratha</h4>
                  <span>CTO</span>
                  <p>jg yy thaaaaaaaaaaaaaaaaaaaaa</p>
                  <div className="social">
                    <a href="">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* popup */}

      <Footer />
    </>
  );
};

export default AboutPage;
