import React from "react";
import bgVideo from "../../video/Mordovia-background.mp4"
import cursor from "../../images/Cursor.svg"

const MainSection = () => {
  return (
    <main>
      <div className={"about"}>
        <span>4 ноября 2023</span>
        <span>Международная выставка – форум Россия</span>
        <span>12 апреля 2024</span>
      </div>
      <video className={ "bg-video" } autoPlay loop>
        <source src={ bgVideo } type="video/mp4" />
      </video>
      <div className={"main-content"}>
        <div className={"main-content__title"}>
          <h1>Мордовия</h1>
          <h4>Экспозиция республики</h4>
        </div>
      </div>
      <div className={"present"}>
        <a href={'/'}><img src={cursor} alt={"↓"} /></a>
        <span>
          Приходите и откройте для себя множество <br /> удивительных фактов о Мордовии, ее народе <br /> и его творческом наследии.
        </span>
      </div>
    </main>
  );
};

export default MainSection;
