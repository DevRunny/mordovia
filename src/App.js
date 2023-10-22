import './styles/App.scss';
import { NavBar } from "./components/NavBar/NavBar";
import { AboutPeopleOfMordoviaSection } from "./components/EventsSections/AboutPeopleOfMordoviaSection";
import { KeyEventsSection } from "./components/EventsSections/KeyEventsSection";
import { Footer } from "./components/Footer/Footer";
import FAQ from "./components/FAQ/FAQ";
import HowToGetThereSection from "./components/HowToGetThereSection/HowToGetThereSection";
import InteractiveZonesSection from "./components/EventsSections/InteractiveZonesSection";
import CalendarSection from "./components/CalendarSection/CalendarSection";

function App() {
  return (
    <>
      <NavBar/>
      <AboutPeopleOfMordoviaSection />
      <KeyEventsSection />
      <CalendarSection />
      <InteractiveZonesSection />
      <HowToGetThereSection />
      <FAQ />
      <Footer />
    </>

  );
}

export default App;
