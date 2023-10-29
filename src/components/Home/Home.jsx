import React from "react";
import { NavBar } from "../NavBar/NavBar";
import MainSection from "../MainSection/MainSection";
import EventsSections from "../EventsSections/EventsSections";
import HowToGetThereSection from "../HowToGetThereSection/HowToGetThereSection";
import FAQSection from "../FAQSection/FAQSection";
import { Footer } from "../Footer/Footer";
import GiftShop from "../GiftShop/GitfShop";

const Home = () => {


  return (
    <>
      <NavBar/>
      <MainSection />
      <div style={{background: "white", width: "100%", height: "100%"}}>
        <EventsSections id={"events"}/>
        <HowToGetThereSection id={"how-to-get-there"}/>
        <FAQSection />
        <GiftShop />
        <Footer />
      </div>
    </>
  );
};

export default Home;
