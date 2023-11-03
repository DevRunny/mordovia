import React from "react";
import { NavBar } from "../NavBar/NavBar";
import MainSection from "../MainSection/MainSection";
import EventsSections from "../EventsSections/EventsSections";
import FAQSection from "../FAQSection/FAQSection";
import { Footer } from "../Footer/Footer";
import GiftShop from "../GiftShop/GitfShop";
// import News from "../News/News"; TODO: подключить как будет готов бэкенд
// import Achievements from "../Achievements/Achievements"; TODO: подключить как будет готов бэкенд
// import HowToGetThereSection from "../HowToGetThereSection/HowToGetThereSection"; TODO: подключить как будет готов бэкенд

const Home = () => {
  return (
    <>
      <NavBar/>
      <MainSection />
      <div style={{background: "white", width: "100%", height: "100%"}}>
        <EventsSections id={"events"}/>
        {/*<Achievements /> TODO: подключить как будет готов бэкенд*/}
        {/*<HowToGetThereSection id={"how-to-get-there"}/> TODO: подключить как будет готов бэкенд*/}
        <FAQSection />
        {/*<News /> TODO: подключить как будет готов бэкенд*/}
        <GiftShop />
        <Footer />
      </div>
    </>
  );
};

export default Home;
