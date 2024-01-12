import React, { useEffect } from "react";
import InnerNav from "../components/InnerNav";
import {
  Angkor,
  Bayon,
  Museum,
  MuseumTS,
  RoyalPalace,
  Taprom,
} from "../assets/img";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const SiemReapList = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const navigate = useNavigate();

  const NavigateToMuseum = () => {
    navigate("/discover/siemreaplist/angkordetail");
  };
  const NavigateToMuseum2 = () => {
    navigate("");
  };
  const NavigateToRoyal = () => {
    navigate("");
  };

  return (
    <>
      <InnerNav currentPage="SiemReapList" headerElementId="header" />

      <div className="bruhtf">
        <div className="my-4 text-center">
          <h1 className="text-success">Siem Reap Destination</h1>
          <strong>Best Places to explore in Siem Reap</strong>
        </div>

        <div>
          <div className="col-8 offset-2">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-5">
                  <img src={Angkor} className="card-img-top" alt="" />
                </div>
                <div className="d-flex col-md-7 ">
                  <div className="d-flex card-body justify-content-center">
                    <h5 className="card-title">Angkor Wat</h5>
                    <p className="card-text">
                      Angkor Wat (Khmer: អង្គរវត្ត, "City/Capital of Temples")
                      is a temple complex in Cambodia, located on a site
                      measuring 162.6 hectares (1,626,000 m2; 402 acres). It
                      resides within the ancient Khmer capital city of Angkor.
                      The Guinness World Records considers it as the largest
                      religious structure in the world.
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
                  <img src={Bayon} className="card-img-top" alt="" />
                </div>
                <div className="d-flex col-md-7 ">
                  <div className="d-flex card-body justify-content-center">
                    <h5 className="card-title">Bayon Temple</h5>
                    <p className="card-text">
                      The Bayon (Khmer: ប្រាសាទបាយ័ន) is a richly decorated
                      Khmer temple related to Buddhism at Angkor in Cambodia.
                      Built in the late 12th or early 13th century as the state
                      temple of the King Jayavarman VII (Khmer:
                      ព្រះបាទជ័យវរ្ម័នទី ៧), the Bayon stands at the centre of
                      Jayavarman's capital, Angkor Thom (Khmer: អង្គរធំ).
                    </p>

                    <a className="card-text" onClick={NavigateToMuseum2}>
                      Details...
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row g-0">
                <div className="col-md-5">
                  <img src={Taprom} className="card-img-top" alt="" />
                </div>
                <div className="d-flex col-md-7 ">
                  <div className="d-flex card-body justify-content-center">
                    <h5 className="card-title">Ta Prohm Temple</h5>
                    <p className="card-text">
                      Ta Prohm (Khmer: ប្រាសាទតាព្រហ្ម) is the modern name of a
                      temple near the city of Siem Reap, Cambodia, approximately
                      one kilometre east of Angkor Thom and on the southern edge
                      of the East Baray. It was built in the Bayon style largely
                      in the late 12th century and early 13th century and was
                      originally called Rajavihara (Khmer: រាជវិហារ).
                    </p>

                    <a className="card-text" onClick={NavigateToMuseum}>
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

export default SiemReapList;
