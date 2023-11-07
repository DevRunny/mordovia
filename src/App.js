import "./styles/App.scss";
import "./styles/responsive.scss";
import { BrowserRouter } from "react-router-dom";
import { router } from "./router";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {router()}
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
