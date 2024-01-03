import React, { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

// import "../assets/css/style.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Nav />
      <section id="hero" className="d-flex">
        <img
          className="mainbg"
          src={"public/image/mainbg1.png"}
          alt="Background"
          data-aos="fade-in"
        />

        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 mb-6 mb-lg-0">
              <div className="" data-aos="zoom-out" data-aos-delay="200">
                <h5 className="text-white mb-4">Need a place to go?</h5>

                <h1 className="display-3 fw-bold mb-3">
                  Plan your next <span className="highlight">trip</span> here !
                </h1>

                <p className="text-white pe-lg-10 mb-5">
                  Delve into our comprehensive trip suggestions based off of
                  your own taste. Alone or with people, your trips will always
                  be fun and tailored just for you!
                </p>

                <a href="tripplan.html" className="btn">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* popup */}

      <main id="main">
        <section id="info1" className="info1">
          <div
            className="container d-flex justify-content-center"
            data-aos="fade-up"
          >
            <div className="row d-flex align-items-center">
              <div
                className="col-sm-6 order-1 order-lg-2 hero-img"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img
                  src="public/image/travel1.png"
                  className="img-fluid img animated rounded-circle mb-2"
                  alt=""
                />
              </div>
              <div
                className="col-sm-6 pt-4 pt-lg-0 content"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates
                </h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="features">
          <div className="container section-title" data-aos="fade-up">
            <h2>Features</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div className="container">
            <div className="row gy-4 align-items-center features-item">
              <div
                className="col-lg-5 order-2 order-lg-1"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>Corporis temporibus maiores provident</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>
              <div
                className="col-lg-7 order-1 order-lg-2 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay="100"
              >
                <div className="image-stack">
                  <img src="public/imagetravelcar2.jpg" alt="" className="stack-front" />
                  <img src="public/imagetravelcar.jpg" alt="" className="stack-back" />
                </div>
              </div>
            </div>

            <div className="row gy-4 align-items-stretch justify-content-between features-item ">
              <div
                className="col-lg-6 d-flex align-items-center features-img-bg"
                data-aos="zoom-out"
              >
                <img src="public/travelcar.jpg" className="img-fluid rounded" alt="" />
              </div>
              <div
                className="col-lg-5 d-flex justify-content-center flex-column"
                data-aos="fade-up"
              >
                <h3>Sunt consequatur ad ut est nulla</h3>
                <p>
                  Cupiditate placeat cupiditate placeat est ipsam culpa.
                  Delectus quia minima quod. Sunt saepe odit aut quia voluptatem
                  hic voluptas dolor doloremque.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>
                    <span>
                      {" "}
                      Duis aute irure dolor in reprehenderit in voluptate velit.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>
                      Facilis ut et voluptatem aperiam. Autem soluta ad fugiat
                    </span>
                    .
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="info2" className="info2">
          <div
            className="container d-flex justify-content-center"
            data-aos="fade-up"
          >
            <div className="row d-flex align-items-center justify-content-between">
              <div
                className="col-sm-6 order-1 order-lg-2 hero-img"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img
                  src="public/imagetravel3.png"
                  className="img-fluid animated rounded-circle mb-2"
                  alt=""
                />
              </div>
              <div
                className="col-sm-6 pt-4 pt-lg-0 content"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates
                </h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>MAIN FEATURES</h2>
              <p>
                Our website offers a really insane main feature that has been
                described over 20 times already since the moment you visited
                this site. However we will make you go through it again ( just
                to make sure )
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="box">
                  <h3>Free Plan</h3>
                  <h4>
                    <sup>$</sup>0<span>per month</span>
                  </h4>
                  <ul>
                    <li>
                      <i className="bx bx-check"></i> Quam adipiscing vitae proin
                    </li>
                    <li>
                      <i className="bx bx-check"></i> Nec feugiat nisl pretium
                    </li>
                    <li>
                      <i className="bx bx-check"></i> Nulla at volutpat diam uteera
                    </li>
                    <li className="na">
                      <i className="bx bx-x"></i>{" "}
                      <span>Pharetra massa massa ultricies</span>
                    </li>
                    <li className="na">
                      <i className="bx bx-x"></i>{" "}
                      <span>Massa ultricies mi quis hendrerit</span>
                    </li>
                  </ul>
                  <a href="#" className="buy-btn">
                    Get Started
                  </a>
                </div>
              </div>

              <div
                className="col-lg-4 mt-4 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="box featured">
                  <h3>Business Plan</h3>
                  <h4>
                    <sup>$</sup>29<span>per month</span>
                  </h4>
                  <ul>
                    <li>
                      <i className="bx bx-check"></i> Quam adipiscing vitae proin
                    </li>
                    <li>
                      <i className="bx bx-check"></i> Nec feugiat nisl pretium
                    </li>
                    <li>
                      <i className="bx bx-check"></i> Nulla at volutpat diam uteera
                    </li>
                    <li>
                      <i className="bx bx-check"></i> Pharetra massa massa ultricies
                    </li>
                    <li>
                      <i className="bx bx-check"></i> Massa ultricies mi quis
                      hendrerit
                    </li>
                  </ul>
                  <a href="#" className="buy-btn">
                    Get Started
                  </a>
                </div>
              </div>

              <div
                className="col-lg-4 mt-4 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="box">
                  <h3>Developer Plan</h3>
                  <h4>
                    <sup>$</sup>49<span>per month</span>
                  </h4>
                  <ul>
                    <li>
                      <i className="bx bx-check"></i> Quam adipiscing vitae proin
                    </li>
                    <li>
                      <i className="bx bx-check"></i> Nec feugiat nisl pretium
                    </li>
                    <li>
                      <i className="bx bx-check"></i> Nulla at volutpat diam uteera
                    </li>
                    <li>
                      <i className="bx bx-check"></i> Pharetra massa massa ultricies
                    </li>
                    <li>
                      <i className="bx bx-check"></i> Massa ultricies mi quis
                      hendrerit
                    </li>
                  </ul>
                  <a href="#" className="buy-btn">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Frequently Asked Questions</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="faq-list">
              <ul>
                <li data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#faq-list-1"
                  >
                    Non consectetur a erat nam at lectus urna duis?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-1"
                    className="collapse show"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna
                      id volutpat lacus laoreet non curabitur gravida. Venenatis
                      lectus magna fringilla urna porttitor rhoncus dolor purus
                      non.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-2"
                    className="collapsed"
                  >
                    Feugiat scelerisque varius morbi enim nunc?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="300">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-3"
                    className="collapsed"
                  >
                    Dolor sit amet consectetur adipiscing elit?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                      sagittis orci. Faucibus pulvinar elementum integer enim.
                      Sem nulla pharetra diam sit amet nisl suscipit. Rutrum
                      tellus pellentesque eu tincidunt. Lectus urna duis
                      convallis convallis tellus. Urna molestie at elementum eu
                      facilisis sed odio morbi quis
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-4"
                    className="collapsed"
                  >
                    Tempus quam pellentesque nec nam aliquam sem et tortor
                    consequat? <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-4"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Molestie a iaculis at erat pellentesque adipiscing
                      commodo. Dignissim suspendisse in est ante in. Nunc vel
                      risus commodo viverra maecenas accumsan. Sit amet nisl
                      suscipit adipiscing bibendum est. Purus gravida quis
                      blandit turpis cursus in.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="500">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-5"
                    className="collapsed"
                  >
                    Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                    turpis nunc eget lorem dolor?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-5"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Laoreet sit amet cursus sit amet dictum sit amet justo.
                      Mauris vitae ultricies leo integer malesuada nunc vel.
                      Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                      eget lorem dolor sed. Ut venenatis tellus in metus
                      vulputate eu scelerisque.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
