import React from "react";

const Mondulkiri = () => {
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
          <h1 className="text-success">Phnom Penh Destination</h1>
          <strong>Best Places to explore in Phnom Penh</strong>
        </div>

        <div className="col-8 offset-2">
          <div className="card">
            <div className="row g-0">
              <div className="col-md-5">
                <img src="" />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">National Museum of Cambodia</h5>
                  <p className="card-text">
                    The National Museum of Cambodia (Khmer: សារមន្ទីរជាតិ) is
                    Cambodia's largest museum of cultural history and is the
                    country's leading historical and archaeological museum. It
                    is located in Chey Chumneas, Phnom Penh.
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
                <img src="" />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">National Museum of Cambodia</h5>
                  <p className="card-text">
                    The National Museum of Cambodia (Khmer: សារមន្ទីរជាតិ) is
                    Cambodia's largest museum of cultural history and is the
                    country's leading historical and archaeological museum. It
                    is located in Chey Chumneas, Phnom Penh.
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
                <img src="" />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">National Museum of Cambodia</h5>
                  <p className="card-text">
                    The National Museum of Cambodia (Khmer: សារមន្ទីរជាតិ) is
                    Cambodia's largest museum of cultural history and is the
                    country's leading historical and archaeological museum. It
                    is located in Chey Chumneas, Phnom Penh.
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
    </>
  );
};

export default Mondulkiri;
