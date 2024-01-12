import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import PlaceList from "../components/PlaceList";

import AOS from "aos";
import "aos/dist/aos.css";

import { KohKong, PhnomPenh } from "../data/PlaceList.json";





const PlaceListPage = ({province}) => {
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

      <PlaceList Province={province} isPopupActive={isPopupActive} />
    </>
  );
};

export default PlaceListPage;
