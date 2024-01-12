import React from "react";

const LocationBTN = ({ url }) => {
  const openLink = () => {
    window.open(url, "_blank");
  };
  return (
    <button onClick={openLink} class="shadow btn custom-btn">
      <i class="bi bi-geo-alt-fill"></i> Location
    </button>
  );
};

export default LocationBTN;
