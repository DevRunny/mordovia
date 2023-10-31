import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import EventDetailsPage from "../components/Pages/EventDetailsPage";

export const PATHS = {
  MAIN: "/",
  EVENT: "/event",
  NOTFOUND: "*"
}

export const router = () => {
  return (
    <Routes>
      <Route path={ PATHS.MAIN } element={<Home />} />
      <Route path={ PATHS.EVENT } element={<EventDetailsPage />}/>
      <Route path={ PATHS.NOTFOUND } element={<div>404</div>} />
    </Routes>
  )
}