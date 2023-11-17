import React, { useEffect } from "react";
import FacesOfTheRegionComponent from "./PageComponents/FacesOfTheRegionComponent";
import { animateScroll as scroll } from "react-scroll";

const FacesOfTheRegionPage = () => {

  const scrollToTop = () => {
    const options = {
      duration: 0,
      smooth: false,
    };
    scroll.scrollToTop(options);
  };

  useEffect(() => {
    scrollToTop();
  }, [])

  return (
    <>
      <FacesOfTheRegionComponent />
    </>
  );
};

export default FacesOfTheRegionPage;
