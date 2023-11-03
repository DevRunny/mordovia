import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import EventDetailsPage from "../components/Pages/EventDetailsPage";

export const PATHS = {
  MAIN: "/",
  EVENT: "/event-details",
  NOTFOUND: "*"
}

export const router = () => {
  return (
    <Routes>
      <Route path={ PATHS.MAIN } element={<Home />} />
      {/*<Route path={ PATHS.EVENT } element={<EventDetailsPage />}/> TODO: подключить как будет готов бэкенд */}
      <Route path={ PATHS.NOTFOUND } element={<div>404</div>} />
    </Routes>
  )
}