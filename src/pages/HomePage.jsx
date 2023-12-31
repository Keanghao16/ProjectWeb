import React, { useEffect, useState } from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  const [isPopupActive, setIsPopupActive] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Nav
        currentPage="HomePage"
        headerElementId="header"
        isPopupActive={isPopupActive}
        setPopupActive={setIsPopupActive}
      />

      <section
        id="hero"
        className={`d-flex ${isPopupActive ? "blur-background" : ""}`}
      >
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
                  src="public/image/cambodia.jpg"
                  className="img-fluid img animated rounded-circle mb-2"
                  alt=""
                />
              </div>
              <div
                className="col-sm-6 pt-4 pt-lg-0 content"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <h3>Create a best trip in Cambodia</h3>
                <p className="fst-italic">
                  Nestled in the heart of Southeast Asia, Cambodia beckons with
                  its rich cultural tapestry, ancient wonders, and warm
                  hospitality. This enchanting kingdom, known as the "Land of
                  Smiles," boasts a history that unfolds through magnificent
                  temples, lush landscapes, and resilient communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ======= features ======= --> */}
        <section id="pricing" className="pricing">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Trending Destination</h2>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <div className="row gy-4 align-items-center features-item">
              <div
                className="col-lg-5 order-2 order-lg-1"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>Siem Reap</h3>
                <p>
                  <i>Five Fact about Siem Reap Province</i>
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check"></i> Siem Reap is a city located
                    in northwestern Cambodia.
                  </li>
                  <li>
                    <i className="bi bi-check"></i>
                    It is famous for being the gateway to the ancient temples of
                    Angkor, including the iconic Angkor Wat.
                  </li>
                  <li>
                    <i className="bi bi-check"></i>
                    Siem Reap has a vibrant and bustling night market where
                    visitors can shop for souvenirs, handicrafts, and sample
                    local cuisine.
                  </li>
                  <li>
                    <i className="bi bi-check"></i>
                    The city is home to the Angkor National Museum, which
                    displays artifacts and exhibits about the history and
                    culture of the Angkor civilization.
                  </li>
                  <li>
                    <i className="bi bi-check"></i>
                    Siem Reap has a tropical climate with a distinct wet and dry
                    season, making it best to visit during the cooler months
                    from November to February.
                  </li>
                </ul>
              </div>
              <div
                className="col-lg-7 order-1 order-lg-2 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay="100"
              >
                <div className="image-stack">
                  <img
                    src="public/image/srp.jpg"
                    alt=""
                    className="stack-front"
                  />
                  <img
                    src="public/image/tonle.jpg"
                    alt=""
                    className="stack-back"
                  />
                </div>
              </div>
            </div>
            {/* <!-- Features Item --> */}

            <div className="row gy-4 align-items-stretch justify-content-between features-item ">
              <div
                className="col-lg-6 d-flex align-items-center features-img-bg"
                data-aos="zoom-out"
              >
                <img
                  src="public/image/kohkongisland.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
              </div>
              <div
                className="col-lg-5 d-flex justify-content-center flex-column"
                data-aos="fade-up"
              >
                <h3>Koh Kong Island</h3>
                <p>
                  <i>Five Fact about Koh Kong</i>
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check"></i>
                    Koh Kong is a province located in southwestern Cambodia.
                  </li>
                  <li>
                    <i className="bi bi-check"></i>
                    It is known for its stunning natural beauty, including
                    pristine beaches and lush rainforests.
                  </li>
                  <li>
                    <i className="bi bi-check"></i>
                    The province is home to the largest national park in
                    Cambodia, the Cardamom Mountains Protected Forest.
                  </li>
                  <li>
                    <i className="bi bi-check"></i>
                    Koh Kong is a popular eco-tourism destination, offering
                    activities such as jungle trekking, wildlife spotting, and
                    kayaking.
                  </li>
                  <li>
                    <i className="bi bi-check"></i>
                    The province shares a border with Thailand and is a gateway
                    for travelers crossing between the two countries.
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Features Item --> */}
          </div>
        </section>
        {/* <!--info2--> */}
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
                  src="public/image/cam.jpg"
                  className="img-fluid animated rounded-circle mb-2"
                  alt=""
                />
              </div>
              <div
                className="col-sm-6 pt-4 pt-lg-0 content"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <h3>Let's Enjoy Your Trip with Us</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
        <section id="faq" className="faq section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>FAQ</h2>
              <p>Here is some frequency asked questions in our Website</p>
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
                    When the best time to visit Siem Reap?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <ul
                    id="faq-list-1"
                    className="collapse show"
                    data-bs-parent=".faq-list"
                  >
                    <li>
                      The best time to visit Siem Reap is during the dry season
                      from November to March when the weather is pleasant, and
                      you can enjoy clear skies and explore the attractions
                      comfortably.
                    </li>
                  </ul>
                </li>

                <li data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-2"
                    className="collapsed"
                  >
                    What are the recommended resturants to eat in Koh Kong?
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <ul
                    id="faq-list-2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <li>
                      Indulge in delicious seafood at The River Restaurant,
                      savor mouthwatering barbecued delights at Rusty Keyhole,
                      or enjoy stunning views while dining at Koh Kong Bay
                      Restaurant. These establishments offer a variety of
                      culinary experiences to satisfy your taste buds.
                    </li>
                  </ul>
                </li>

                <li data-aos="fade-up" data-aos-delay="300">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-3"
                    className="collapsed"
                  >
                    What are the best things to do in Mondulkiri?
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <ul
                    id="faq-list-3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <li>
                      Mondulkiri offers a plethora of exciting activities, such
                      as visiting the breathtaking Bousra Waterfall, exploring
                      the Elephant Valley Project, discovering the Sea Forest,
                      trekking through the Phnom Dos Kromom Mountain, enjoying a
                      Coffee Plantation Tour, experiencing the Bou Sra Village,
                      visiting the Dohkrormom Mountain, exploring the Oraing
                      District, discovering the Yok Sros Phlom Temple, visiting
                      the Jahoo Gibbon Camp, exploring the Romnea Wildlife
                      Sanctuary, experiencing the Pong Village, discovering the
                      Chrey Thom Waterfall, and enjoying the vibrant Sen Monorom
                      Market.
                    </li>
                  </ul>
                </li>

                <li data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-4"
                    className="collapsed"
                  >
                    Where can i find authentic Khmer cuisine in Phnom Penh?
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <ul
                    id="faq-list-4"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <li>
                      To savor authentic Khmer cuisine, Friends the Restaurant
                      is a great choice, offering delicious dishes while
                      supporting a social enterprise. Romdeng is another
                      fantastic option, located in a beautifully restored
                      colonial building, serving traditional Cambodian
                      delicacies. For a refined dining experience, Malis
                      showcases the diversity and complexity of Khmer flavors.
                      These restaurants offer a delightful culinary journey
                      through the tastes of Cambodia.
                    </li>
                  </ul>
                </li>

                <li data-aos="fade-up" data-aos-delay="500">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-5"
                    className="collapsed"
                  >
                    What are the some travel tips for visitting Kampot?
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <ul
                    id="faq-list-5"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <li>
                      Plan your visit to Bokor National Park during the dry
                      season, wear sturdy footwear when exploring caves, check
                      water levels at the Teuk Chhou Rapids, and consider
                      renting a motorbike or bicycle for exploring the
                      countryside.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* <!-- End Frequently Asked Questions Section d--> */}
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
