import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import DetailsPage from "../components/Pages/DetailsPage";
import NotFoundPage from "../components/Pages/NotFoundPage";

export const PATHS = {
  MAIN: "/",
  EVENT: "/event-details",
  NOTFOUND: "*"
}

export const router = () => {
  return (
    <Routes>
      <Route path={ PATHS.MAIN } element={<Home />} />
      {/*<Route path={ PATHS.EVENT } element={<DetailsPage />}/> TODO: подключить как будет готов бэкенд */}
      <Route path={ PATHS.NOTFOUND } element={<NotFoundPage />} />
    </Routes>
  )
}