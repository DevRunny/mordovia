import React from "react";
import MainSection from "../MainSection/MainSection";
import FAQSection from "../FAQSection/FAQSection";
import GiftShop from "../GiftShop/GitfShop";
import News from "../News/News";
import Moments from "../Moments/Moments";
import { useTitles } from "../../queries/useTitles";
import { Titles } from "../Titles/Titles";
import headline from "../../images/Headline.svg";
import StickyTitle from "../Titles/StickyTitle";
import { AboutPeopleOfMordoviaSection } from "../EventsSections/AboutPeopleOfMordoviaSection";
import { KeyEventsSection } from "../EventsSections/KeyEventsSection";
import CalendarSection from "../EventsSections/CalendarSection/CalendarSection";
import InteractiveZonesSection from "../EventsSections/InteractiveZonesSection";
import { useScrollToId } from "../../hooks/useScrollToId";
import Achievements from "../Achievements/Achievements";
// import HowToGetThereSection from "../HowToGetThereSection/HowToGetThereSection"; TODO: подключить как будет готов бэкенд

const Home = () => {
  const { titles, isFetched } = useTitles()
  useScrollToId();

  return (
    <>
      <MainSection />
      <div style={{background: "white", width: "100%", height: "100%"}}>
        <div>
          <Titles img={headline} />
          <StickyTitle subtitle={isFetched ? titles.screen2.text1 : ""} />
          <AboutPeopleOfMordoviaSection id={"favorites"}/>
          {/*<StickyTitle subtitle={isFetched ? titles.screen3.text1 : ""} />
          <KeyEventsSection id={"events"}/>*/}
        </div>
        <CalendarSection id={"afisha"}/>
        <Moments id={"moments"}/>
        <StickyTitle img={headline} notSticky={true} subtitle={isFetched ? titles.screen4.text1 : ""} />
        <InteractiveZonesSection id={"interactive"} />
        {/*<Achievements id={"achievements"}/>*/}
        {/*<HowToGetThereSection id={"how-to-get-there"}/> TODO: подключить как будет готов бэкенд*/}
        <FAQSection id={"questions"}/>
        <News id={"news"}/>
        <GiftShop id={"gift-shop"} />
      </div>
    </>
  );
};

export default Home;
