import React from "react";

const InnerFooter = () => {
  return (
    <div id="footer">
      {/* Include the Boxicons stylesheet */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.4/css/boxicons.min.css"
        integrity="sha512-cn16Qw8mzTBKpu08X0fwhTSv02kK/FojjNLz0bwp2xJ4H+yalwzXKFw/5cLzuBZCxGWIA+95X4skzvo8STNtSg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

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
  );
};

export default InnerFooter;
