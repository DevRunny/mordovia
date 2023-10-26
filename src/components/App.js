import "../styles/App.scss";
import "../styles/responsive.scss";
import { NavBar } from "./NavBar/NavBar";
import { Footer } from "./Footer/Footer";
import FAQSection from "./FAQSection/FAQSection";
import HowToGetThereSection from "./HowToGetThereSection/HowToGetThereSection";
import EventsSections from "./EventsSections/EventsSections";
import MainSection from "./MainSection/MainSection";

function App() {
  return (
    <>
      <NavBar/>
      <MainSection />
      <div style={{background: "white", width: "100%", height: "100%"}}>
        <EventsSections />
        <HowToGetThereSection />
        <FAQSection />
        <Footer />
      </div>
    </>

  );
}

export default App;
