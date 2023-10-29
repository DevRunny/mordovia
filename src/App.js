import "./styles/App.scss";
import "./styles/responsive.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home";
import EventPage from "./components/Pages/EventPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/event"} element={<EventPage />}/>
          <Route path={'*'} element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
