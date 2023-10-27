import React from "react";
import cursor from "../../images/Cursor.svg";

const MainSection = () => {
  return (
    <main>
      <video className={ "bg-video" }
             autoPlay muted loop playsInline
      >
        <source src={"http://test.srcdev.ru/mordoviya2.mp4"} type="video/mp4" />
      </video>
      <div className={"about"}>
        <span>4 ноября 2023</span>
        <span>Международная <br className={"about-mobile"} /> выставка – форум Россия</span>
        <span>12 апреля 2024</span>
      </div>
      <div className={"present"}>
        <a href={'/'}><img src={cursor} alt={"↓"} /></a>
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
