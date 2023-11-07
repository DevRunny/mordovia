import React from "react";
import MainSection from "../MainSection/MainSection";
import EventsSections from "../EventsSections/EventsSections";
import FAQSection from "../FAQSection/FAQSection";
import GiftShop from "../GiftShop/GitfShop";
import News from "../News/News";
// import Achievements from "../Achievements/Achievements"; TODO: подключить как будет готов бэкенд
// import HowToGetThereSection from "../HowToGetThereSection/HowToGetThereSection"; TODO: подключить как будет готов бэкенд

const Home = () => {
  return (
    <>
      <MainSection />
      <div style={{background: "white", width: "100%", height: "100%"}}>
        <EventsSections id={"events"}/>
        {/*<Achievements /> TODO: подключить как будет готов бэкенд*/}
        {/*<HowToGetThereSection id={"how-to-get-there"}/> TODO: подключить как будет готов бэкенд*/}
        <FAQSection />
        <News />
        <GiftShop />
      </div>
    </>
  );
};

export default Home;
