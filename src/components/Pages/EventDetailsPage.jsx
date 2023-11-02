import React, { useEffect } from "react";
import { NavBar } from "../NavBar/NavBar";
import eventPhoto from "../../images/Event-photo.png";
import eventVideo from "../../images/Event-video.png";
import eventGallery from "../../images/Event-gallery-photo.png";
import morePhoto from "../../images/Event-gallery-morephoto.png";
import memberPhoto from "../../images/Event-member.png";
import { animateScroll as scroll } from "react-scroll";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";
import { PATHS } from "../../router";

const EventDetailsPage = () => {

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
      <NavBar />
      <Link to={PATHS.MAIN}>
        <button
          className={"back-to-main"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M5 12L11 18M5 12L11 6" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          вернуться
        </button>
      </Link>
      <div className={"event-details-page"}>
        <div className={"event"}>
          <div className={"event__info"}>
            <span>Событие</span>
            <h1>Мордовское национальное искусство </h1>
            <div className={"event-date-and-point-wrapper"}>
              <div className={"date"}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 7V12L15 15M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="#2B2B2B"
                    strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
                <p>24 ноября 19:00</p>
              </div>
              <div className={"point"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.657 16.6567L13.414 20.8997C13.039 21.2743 12.5306 21.4848 12.0005 21.4848C11.4704 21.4848 10.962 21.2743 10.587 20.8997L6.343 16.6567C5.22422 15.5379 4.46234 14.1124 4.15369 12.5606C3.84504 11.0087 4.00349 9.40022 4.60901 7.93844C5.21452 6.47665 6.2399 5.22725 7.55548 4.34821C8.87107 3.46918 10.4178 3 12 3C13.5822 3 15.1289 3.46918 16.4445 4.34821C17.7601 5.22725 18.7855 6.47665 19.391 7.93844C19.9965 9.40022 20.155 11.0087 19.8463 12.5606C19.5377 14.1124 18.7758 15.5379 17.657 16.6567Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>Экспозиция Республики Мордовия</p>
              </div>
            </div>
          </div>
        </div>
        <div className={"event-details-content"}>
        <div className={"event__details"}>
          <img src={eventPhoto} alt={"eventPhoto"} />
          <div className={"details_description"}>
            <span>
            Главная задача
            Выставки — представить достижения нашей страны в самых разных отраслях на одной площадке,
            показать россиянам настоящую современную Россию, которой можно и нужно гордиться.
            Участниками Выставки станут все 89 регионов России, федеральные министерства,
            корпорации и общественные организации.
            Решение о проведении Выставки закреплено Указом Президента РФ от 29.03.2023
            № 215 «Об Организационном комитете по подготовке и проведению
            Международной выставки-форума „Россия“.
          </span>
            <span>
            Главная задача
            Выставки — представить достижения нашей страны в самых разных отраслях на одной площадке,
            показать россиянам настоящую современную Россию, которой можно и нужно гордиться.
            Участниками Выставки станут все 89 регионов России, федеральные министерства,
            корпорации и общественные организации.
            Решение о проведении Выставки закреплено Указом Президента РФ от 29.03.2023
            № 215 «Об Организационном комитете по подготовке и проведению
            Международной выставки-форума „Россия“.
          </span>
            <span>
            Главная задача
            Выставки — представить достижения нашей страны в самых разных отраслях на одной площадке,
            показать россиянам настоящую современную Россию, которой можно и нужно гордиться.
            Участниками Выставки станут все 89 регионов России, федеральные министерства,
            корпорации и общественные организации.
            Решение о проведении Выставки закреплено Указом Президента РФ от 29.03.2023
            № 215 «Об Организационном комитете по подготовке и проведению
            Международной выставки-форума „Россия“.
          </span>
          </div>
          <img src={eventVideo} alt={"event-video"} />
        </div>
        <div className={"event__gallery-wrapper"}>
          <h4>Галерея</h4>
          <div className={"event__gallery"}>
            <img src={eventGallery} alt={"event-gallery"} />
            <img src={eventGallery} alt={"event-gallery"} />
            <img src={eventGallery} alt={"event-gallery"} />
            <img src={eventGallery} alt={"event-gallery"} />
            <img src={eventGallery} alt={"event-gallery"} />
            <img src={eventGallery} alt={"event-gallery"} />
            <img src={eventGallery} alt={"event-gallery"} />
            <img src={morePhoto} alt={"morePhoto"} />
          </div>
        </div>
        <div className={"event__members"}>
          <h4>Участники</h4>
          <div className={"members_list"}>
            <div className={"members_member"}>
              <img src={memberPhoto} alt={"memberPhoto"} />
              <h3>Станислав  Михайлович Дужников</h3>
              <p>Российский актёр театра, кино, телевидения</p>
            </div>
            <div className={"members_member"}>
              <img src={memberPhoto} alt={"memberPhoto"} />
              <h3>Станислав  Михайлович Дужников</h3>
              <p>Российский актёр театра, кино, телевидения</p>
            </div>
            <div className={"members_member"}>
              <img src={memberPhoto} alt={"memberPhoto"} />
              <h3>Станислав  Михайлович Дужников</h3>
              <p>Российский актёр театра, кино, телевидения</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>

  );
};

export default EventDetailsPage;
