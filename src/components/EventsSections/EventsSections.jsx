import React from "react";
import { AboutPeopleOfMordoviaSection } from "./AboutPeopleOfMordoviaSection";
import { KeyEventsSection } from "./KeyEventsSection";
import CalendarSection from "./CalendarSection/CalendarSection";
import InteractiveZonesSection from "./InteractiveZonesSection";
import headline from "../../images/Headline.svg";
import { Titles } from "../Titles/Titles";
import { useTitles } from "../../queries/useTitles";

const EventsSections = ({id}) => {
    const { titles, isFetched } = useTitles()

  return (
    <section id={id}>
        <Titles
          img={headline}
          h2={isFetched ? titles.screen2.text1 : ""}
        />

      <AboutPeopleOfMordoviaSection />
      <Titles
        img={headline}
        h2={isFetched ? titles.screen3.text1 : ""}
      />
      <KeyEventsSection id={"#about-exposition"}/>
      <Titles
        img={headline}
        h2={isFetched ? titles.screen3.text1 : ""}
      />
      <CalendarSection id={"#calendar"}/>
      <Titles
        img={headline}
        h2={isFetched ? titles.screen4.text1 : ""}
      />
      <InteractiveZonesSection />
    </section>
  );
};

export default EventsSections;
