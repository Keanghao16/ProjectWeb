import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import PlaceDetail from "../components/PlaceDetail";

import AOS from "aos";
import "aos/dist/aos.css";

import "../assets/css/style.css";
import { KohKong, PhnomPenh } from "../data/PlaceDetail.json";

const PlaceDetailPage = () => {
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

      <PlaceDetail place={PhnomPenh} isPopupActive={isPopupActive} />

    </>
  );
};

export default PlaceDetailPage;
