import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import DetailsPage from "../components/Pages/DetailsPage";
import NotFoundPage from "../components/Pages/NotFoundPage";

export const PATHS = {
  MAIN: "/",
  NEWS: "/news/*",
  EVENT: "/event/*",
  NEWS_EMPTY: "/news",
  EVENT_EMPTY: "/event",
  NOTFOUND: "*"
}

export const router = () => {

  return (
    <Routes>
      <Route path={ PATHS.MAIN } element={<Home />} />
      <Route path={ PATHS.NEWS } element={<DetailsPage newsEnable={true} />} />
      <Route path={ PATHS.EVENT } element={<DetailsPage eventEnable={true} />} />
      <Route path={ PATHS.NOTFOUND } element={<NotFoundPage />} />
      <Route path={ PATHS.NEWS_EMPTY} element={<NotFoundPage />} />
      <Route path={ PATHS.EVENT_EMPTY} element={<NotFoundPage />} />
    </Routes>
  )
}