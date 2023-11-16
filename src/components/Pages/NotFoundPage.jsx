import React, { useEffect, useState } from "react";
import notFound from "../../images/NotFound.svg";
import { animateScroll as scroll } from "react-scroll";
import ButtonBackToMain from "../Buttons/ButtonBackToMain";

const NotFoundPage = () => {

  const [timed, setTimed] = useState(0);

  const scrollToTop = () => {
    const options = {
      duration: 0,
      smooth: false,
    };
    scroll.scrollToTop(options);
  };

  useEffect(() => {
    scrollToTop();
    setTimeout(() => {
	  setTimed(1);
    }, 1000);
  }, [])

  return (
    <div style={{opacity: timed}}>
      <ButtonBackToMain toSection={""} />
      <div className={"error-404"}>
        <img src={notFound} alt={"404"} />
        <span>Страница не найдена</span>
      </div>
      
    </div>
  );
};

export default NotFoundPage;
