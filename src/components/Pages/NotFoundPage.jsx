import React, { useEffect } from "react";
import notFound from "../../images/NotFound.svg";
import { animateScroll as scroll } from "react-scroll";
import ButtonBackToMain from "../Buttons/ButtonBackToMain";

const NotFoundPage = () => {

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
      <ButtonBackToMain />
      <div className={"error-404"}>
        <img src={notFound} alt={"404"} />
        <span>Страница не найдена</span>
      </div>
      
    </>
  );
};

export default NotFoundPage;
