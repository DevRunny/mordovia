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
      {/*<Titles*/}
      {/*  img={headline}*/}
      {/*  h2={<>Удивительные открытия*/}
      {/*    <br className={"subtitle-desktop"}/> о народе <br className={"subtitle-mobile"}/> республики*/}
      {/*    <br className={"subtitle-desktop"} /> Мордовия</>}*/}
      {/*/>*/}
      {/*<AboutPeopleOfMordoviaSection />*/}
      {/*<Titles*/}
      {/*  img={headline}*/}
      {/*  h2={<>Увлекательные события,*/}
      {/*    <br className={"subtitle-desktop"} /> выставки <br className={"subtitle-mobile"}/> и ярмарки*/}
      {/*    <br className={"subtitle-desktop"} /> народного промысла</>}*/}
      {/*/>*/}
      {/*<KeyEventsSection />*/}
      {/*<Titles*/}
      {/*  img={headline}*/}
      {/*  h2={<>Увлекательные события,*/}
      {/*    <br className={"subtitle-desktop"}/> выставки <br className={"subtitle-mobile"} /> и ярмарки*/}
      {/*    <br className={"subtitle-desktop"}/> народного промысла</>}*/}
      {/*/>*/}
      <CalendarSection />
      {/*<Titles*/}
      {/*  img={headline}*/}
      {/*  h2={<>Интерактивные выставки с уникальными <br className={"subtitle-mobile"} />*/}
      {/*    <br className={"subtitle-desktop"}/> возможностями погружения в культуру <br className={"subtitle-mobile"}/>*/}
      {/*    <br className={"subtitle-desktop"}/> и историю Мордовии.</>}*/}
      {/*/>*/}
      {/*<InteractiveZonesSection />*/}
    </>
  );
};

export default EventsSections;
