import "./styles/App.scss";
import "./styles/responsive.scss";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import FAQSection from "./components/FAQSection/FAQSection";
import HowToGetThereSection from "./components/HowToGetThereSection/HowToGetThereSection";
import EventsSections from "./components/EventsSections/EventsSections";
import MainSection from "./components/MainSection/MainSection";
import { Route } from "react-router-dom";
import Router from "./router/Router";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Home />
    </>

  );
}

export default App;
