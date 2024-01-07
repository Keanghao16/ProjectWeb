import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const backToTop = document.querySelector(".back-to-top");

    if (backToTop) {
      const toggleBackToTop = () => {
        if (window.scrollY > 100) {
          backToTop.classList.add("active");
        } else {
          backToTop.classList.remove("active");
        }
      };

      window.addEventListener("load", toggleBackToTop);
      window.addEventListener("scroll", toggleBackToTop);

      return () => {
        window.removeEventListener("load", toggleBackToTop);
        window.removeEventListener("scroll", toggleBackToTop);
      };
    }
  }, []);

  return (
    <>
      <div id="footer">
        {/* Include the Boxicons stylesheet */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.4/css/boxicons.min.css"
          integrity="sha512-cn16Qw8mzTBKpu08X0fwhTSv02kK/FojjNLz0bwp2xJ4H+yalwzXKFw/5cLzuBZCxGWIA+95X4skzvo8STNtSg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <div className="footer-top">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>TRIP PLANNER</h3>
                <p>
                  1234 BKK <br />
                  SENSOK, PHNOM PENH 56789
                  <br />
                  Cambodia <br />
                  <br />
                  <strong>Phone:</strong> +85512345678
                  <br />
                  <strong>Email:</strong> info@tripplanner.com
                  <br />
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>Connect with us on social media</p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="#" className="google-plus">
                    <i className="bx bxl-skype"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container footer-bottom clearfix">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>TRIP PLANNER</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="#">Your BoY SaTuRn</a>
          </div>
        </div>
      </div>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default Footer;
