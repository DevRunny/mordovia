import React from "react";
import { AboutPeopleOfMordoviaSection } from "./AboutPeopleOfMordoviaSection";
import { KeyEventsSection } from "./KeyEventsSection";
import CalendarSection from "./CalendarSection/CalendarSection";
import InteractiveZonesSection from "./InteractiveZonesSection";
import headline from "../../images/Headline.svg";
import { Titles } from "../Titles/Titles";
import { useTitles } from "../../queries/useTitles";
import StickySubtitle from "../Titles/StickySubtitle";

const EventsSections = ({id}) => {
    const { titles, isFetched } = useTitles()

  return (
    <section id={id}>
      <div>
        <Titles
          img={headline}
        />
        <StickySubtitle subtitle={isFetched ? titles.screen2.text1 : ""} />
        <AboutPeopleOfMordoviaSection />
        <StickySubtitle subtitle={isFetched ? titles.screen3.text1 : ""} />
        <KeyEventsSection id={"#about-exposition"}/>
      </div>
      <CalendarSection id={"#calendar"}/>
      <StickySubtitle classPosition={"not-sticky"} subtitle={isFetched ? titles.screen4.text1 : ""} />
      <InteractiveZonesSection />
    </section>
  );
};

export default EventsSections;
