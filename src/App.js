import './styles/App.scss';
import { NavBar } from "./components/NavBar";
import { OffersSection } from "./components/OffersSection";
import { OfferCards } from "./components/OfferCards";
import { KeyEventsSection } from "./components/KeyEventsSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <NavBar/>
      <OffersSection />
      <OfferCards />
      <KeyEventsSection />
      <Footer />
    </>

  );
}

export default App;
