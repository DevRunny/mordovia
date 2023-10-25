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
        h2={<>Удивительные открытия <br /> о народе республики <br /> Мордовия</>}
      />
      <AboutPeopleOfMordoviaSection />
      <Titles
        h1={<img src={headline} alt="Вас ждут" />}
        h2={<>Увлекательные события, <br/> выставки и ярмарки <br /> народного промысла</>}
      />
      <KeyEventsSection />
      <Titles
        h1={<img src={headline} alt="Вас ждут" />}
        h2={<>Увлекательные события, <br/> выставки и ярмарки <br /> народного промысла</>}
      />
      <CalendarSection />
      <Titles
        h1={<img
          // style={ { opacity: 0 }}
          src={headline}
          alt="Вас ждут" />}
        h2={<>Интерактивные выставки с уникальными возможностями погружения в культуру <br /> и историю Мордовии.</>}
      />
      <InteractiveZonesSection />
    </>
  );
};

export default EventsSections;
