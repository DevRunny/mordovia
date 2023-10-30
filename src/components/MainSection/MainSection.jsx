import React from "react";
import cursor from "../../images/Cursor.svg";
import { Link } from "react-scroll";
import { useWindowSize } from "usehooks-ts";

const MainSection = () => {
  const { width } = useWindowSize()

  return (
    <main>
      <video
        className={ "bg-video" }
        autoPlay muted loop playsInline
      >
        <source src={"https://mordovia-russia.ru/video/mordoviya2.mp4"} type="video/mp4" />
      </video>
      <div className={"about"}>
        <span>4 ноября 2023</span>
        <span>Международная <br className={"about-mobile"} /> выставка – форум Россия</span>
        <span>12 апреля 2024</span>
      </div>
      <div className={"present"}>
        <Link
          style={{cursor: "pointer"}}
          activeClass="active"
          to="events"
          spy={true}
          smooth={true}
          offset={width < 767 ? -50 :-80}
          duration={500}
        >
          <img src={cursor} alt={"↓"} />
        </Link>
        <span>
          Приходите и откройте для себя множество
          <br className={"present-desktop"}  />
          удивительных фактов
          <br className={"present-mobile"} />о Мордовии, ее народе
          <br className={"present-desktop"}  /> и его творческом наследии.
        </span>
      </div>
      <div className={"main-content"}>
        <div className={"main-content__title"}>
          <h1>Мордовия</h1>
          <h4>Экспозиция республики</h4>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
