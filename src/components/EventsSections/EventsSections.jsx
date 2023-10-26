import React from "react";
import { AboutPeopleOfMordoviaSection } from "./AboutPeopleOfMordoviaSection";
import { KeyEventsSection } from "./KeyEventsSection";
import CalendarSection from "./CalendarSection/CalendarSection";
import InteractiveZonesSection from "./InteractiveZonesSection";
import headline from "../../images/Headline.svg";
import { Titles } from "../Titles/Titles";

const EventsSections = () => {
  return (
    <>
      <Titles
        h1={<img src={headline} alt="Вас ждут" />}
        h2={<>Удивительные открытия о народе республики Мордовия</>}
      />
      <AboutPeopleOfMordoviaSection />
      <Titles
        h1={<img src={headline} alt="Вас ждут" />}
        h2={<>Увлекательные события, выставки и ярмарки народного промысла</>}
      />
      <KeyEventsSection />
      <Titles
        h1={<img src={headline} alt="Вас ждут" />}
        h2={<>Увлекательные события, выставки и ярмарки народного промысла</>}
      />
      {/*<CalendarSection />*/}
      <Titles
        h1={<img
          // style={ { opacity: 0 }}
          src={headline}
          alt="Вас ждут" />}
        h2={<>Интерактивные выставки с уникальными возможностями погружения в культуру и историю Мордовии.</>}
      />
      <InteractiveZonesSection />
    </>
  );
};

export default EventsSections;
