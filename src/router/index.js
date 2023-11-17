import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import DetailsPage from "../components/Pages/DetailsPage";
import NotFoundPage from "../components/Pages/NotFoundPage";
import { AchievementPage } from "../components/Pages/AchievementPage";
import FacesOfTheRegionPage from "../components/Pages/FacesOfTheRegionPage";

export const PATHS = {
  MAIN: "/",
  NEWS: "/news/*",
  EVENT: "/event/*",
  ACHIEVEMENT: "/achievement/:alias",
  ACHIEVEMENT_DETAILS: "/achievement/:alias/:alias",
  FACES_OF_THE_REGION: "achievement/people", //Роут для "Лица региона"
  NEWS_EMPTY: "/news",
  EVENT_EMPTY: "/event",
  ACHIEVEMENT_EMPTY: "/achievement",
  NOTFOUND: "*"
}

export const router = () => {

  return (
    <Routes>
      <Route path={ PATHS.MAIN } element={<Home />} />
      <Route path={ PATHS.NEWS } element={<DetailsPage />} />
      <Route path={ PATHS.EVENT } element={<DetailsPage />} />
      <Route path={ PATHS.ACHIEVEMENT } element={<AchievementPage />} />
      <Route path={ PATHS.ACHIEVEMENT_DETAILS } element={<DetailsPage />} />
      <Route path={ PATHS.FACES_OF_THE_REGION } element={<FacesOfTheRegionPage />} />
      <Route path={ PATHS.NOTFOUND } element={<NotFoundPage />} />
      <Route path={ PATHS.NEWS_EMPTY} element={<NotFoundPage />} />
      <Route path={ PATHS.EVENT_EMPTY} element={<NotFoundPage />} />
      <Route path={ PATHS.ACHIEVEMENT_EMPTY} element={<NotFoundPage />} />
    </Routes>
  )
}