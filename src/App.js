import "./styles/App.scss";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import FAQSection from "./components/FAQSection/FAQSection";
import HowToGetThereSection from "./components/HowToGetThereSection/HowToGetThereSection";
import EventsSections from "./components/EventsSections/EventsSections";
import MainSection from "./components/MainSection/MainSection";

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
