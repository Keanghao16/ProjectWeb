import React, { useEffect, useState } from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  const [isPopupActive, setIsPopupActive] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Nav
        currentPage="AboutPage"
        headerElementId="header"
        isPopupActive={isPopupActive}
        setPopupActive={setIsPopupActive}
      />
      <div className={` ${isPopupActive ? "blur-background" : ""}`}>
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About Tripplaner</h2>
            </div>

            <div className="row content">
              <div className="col-lg-6">
                <p>
                  &nbsp; &nbsp;Trip Planner, the world's largest travel guidance
                  platform, helps hundreds of millions of people each month
                  become better travelers, from planning to taking a trip.
                  Travelers in Cambodia should use the Trip Planner site to
                  discover where to stay, what to do and where to eat based on
                  guidance from those who have been there before. Travelers turn
                  to Trip Planner to find deals on accommodations, reserve
                  tables at delicious restaurants and discover great places
                  nearby.
                </p>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <p>
                  &nbsp; &nbsp;Travel is not just a journey from one place to
                  another; it's an experience that unfolds a myriad of stories
                  and memories. In the bustling world we live in, where time is
                  a precious commodity, the role of a trip planner becomes
                  invaluable. A trip planner is more than a guide; it's a
                  navigator, a storyteller, and a curator of extraordinary
                  adventures.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="team section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Our Team</h2>
              <p>Hello everyone, I'd like to introduce our team members</p>
            </div>

            <div className="row">
              <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="public/image/nun.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Thou Sokphanun</h4>
                    <span>Team Member</span>
                    <p>
                      "I'm Sokphanun, thrilled to be part of the Trip Planner
                      team."
                    </p>
                    <p>
                      <i>Nun's favorite travel destination is Kampot.</i>
                    </p>
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
                        {" "}
                        <i className="bx bxl-linkedin"></i>{" "}
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
                    <img
                      src="public/image/hao.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Tie Keanghao</h4>
                    <span>Team Member</span>
                    <p>
                      I'm Keanghao, absolutely thrilled to join the Trip Planner
                      team.
                    </p>
                    <p>
                      <i>Hao's favorite travel destination is Koh Kong.</i>
                    </p>
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
                        {" "}
                        <i className="bx bxl-linkedin"></i>{" "}
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
                    <img
                      src="public/image/lily.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Thon Ratha</h4>
                    <span>Team Member</span>
                    <p>
                      I'm Ratha, and I couldn't be more thrilled to join the
                      Trip Planner team.
                    </p>
                    <p>
                      <i>Ratha's favorite travel destination is Mondulkiri.</i>
                    </p>
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
                        {" "}
                        <i className="bx bxl-linkedin"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
