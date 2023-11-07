import React from "react";
import MainSection from "../MainSection/MainSection";
import FAQSection from "../FAQSection/FAQSection";
import GiftShop from "../GiftShop/GitfShop";
import News from "../News/News";
import { useTitles } from "../../queries/useTitles";
import { Titles } from "../Titles/Titles";
import headline from "../../images/Headline.svg";
import StickyTitle from "../Titles/StickyTitle";
import { AboutPeopleOfMordoviaSection } from "../EventsSections/AboutPeopleOfMordoviaSection";
import { KeyEventsSection } from "../EventsSections/KeyEventsSection";
import CalendarSection from "../EventsSections/CalendarSection/CalendarSection";
import InteractiveZonesSection from "../EventsSections/InteractiveZonesSection";
// import Achievements from "../Achievements/Achievements"; TODO: подключить как будет готов бэкенд
// import HowToGetThereSection from "../HowToGetThereSection/HowToGetThereSection"; TODO: подключить как будет готов бэкенд

const Home = () => {
  const { titles, isFetched } = useTitles()

  return (
    <>
      <MainSection />
      <div style={{background: "white", width: "100%", height: "100%"}}>
        <div>
          <Titles img={headline} />
          <StickyTitle subtitle={isFetched ? titles.screen2.text1 : ""} />
          <AboutPeopleOfMordoviaSection id={"events"}/>
          <StickyTitle subtitle={isFetched ? titles.screen3.text1 : ""} />
          <KeyEventsSection id={"about-exposition"}/>
        </div>
        <CalendarSection id={"calendar"}/>
        <StickyTitle img={headline} notSticky={true} subtitle={isFetched ? titles.screen4.text1 : ""} />
        <InteractiveZonesSection />
        {/*<Achievements id={"achievements}/> TODO: подключить как будет готов бэкенд*/}
        {/*<HowToGetThereSection id={"how-to-get-there"}/> TODO: подключить как будет готов бэкенд*/}
        <FAQSection id={"faq"}/>
        <News id={"news"}/>
        <GiftShop id={"gift-shop"} />
      </div>
    </>
  );
};

export default Home;
