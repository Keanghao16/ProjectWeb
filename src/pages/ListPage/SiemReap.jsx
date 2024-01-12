import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "../../components/Nav";
const SiemReap = () => {
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

      <div className={`container ${isPopupActive ? "blur-background" : ""}`}>
        <div className="my-4 text-center">
          <h1 className="text-success">Siem Reap Destination</h1>
          <strong>Best Places to explore in Siem Reap</strong>
        </div>

        <div className="row">
          <div className="col-8 offset-2">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-5">
                  <img
                    src="../src/assets/img/SiemReap/Angkor_Wat.jpg"
                    className="card-img-top"
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h4 className="card-title">Angkor Wat</h4>
                    <p className="card-text">
                      Angkor Wat (Khmer: អង្គរវត្ត, "City/Capital of Temples")
                      is a temple complex in Cambodia, located on a site
                      measuring 162.6 hectares (1,626,000 m2; 402 acres). It
                      resides within the ancient Khmer capital city of Angkor.
                      The Guinness World Records considers it as the largest
                      religious structure in the world.
                    </p>
                    <div className="card-body d-flex align-items-center justify-content-center">
                      <a className="card-text" href="#">
                        Details...
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-8 offset-2">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-5">
                  <img
                    src="../src/assets/img/SiemReap/Bayon.jpg"
                    className="card-img-top"
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h4 className="card-title">Bayon Temple</h4>
                    <p className="card-text">
                      The Bayon (Khmer: ប្រាសាទបាយ័ន) is a richly decorated
                      Khmer temple related to Buddhism at Angkor in Cambodia.
                      Built in the late 12th or early 13th century as the state
                      temple of the King Jayavarman VII (Khmer:
                      ព្រះបាទជ័យវរ្ម័នទី ៧), the Bayon stands at the centre of
                      Jayavarman's capital, Angkor Thom (Khmer: អង្គរធំ).
                    </p>
                    <div className="card-body d-flex align-items-center justify-content-center">
                      <a className="card-text" href="#">
                        Details...
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-8 offset-2">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-5">
                  <img
                    src="../src/assets/img/SiemReap/Ta_Prohm.jpg"
                    className="card-img-top"
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h4 className="card-title">Ta Prohm Temple</h4>
                    <p className="card-text">
                      Ta Prohm (Khmer: ប្រាសាទតាព្រហ្ម) is the modern name of a
                      temple near the city of Siem Reap, Cambodia, approximately
                      one kilometre east of Angkor Thom and on the southern edge
                      of the East Baray. It was built in the Bayon style largely
                      in the late 12th century and early 13th century and was
                      originally called Rajavihara (Khmer: រាជវិហារ).
                    </p>
                    <div className="card-body d-flex align-items-center justify-content-center">
                      <a className="card-text" href="#">
                        Details...
                      </a>
                    </div>
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

export default SiemReap;
