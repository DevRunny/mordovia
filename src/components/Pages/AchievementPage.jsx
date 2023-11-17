import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { AchievementPageComponent } from "./PageComponents/AchievementPageComponent";
import { useAchievements } from "../../queries/useAchievements";
import NotFoundPage from "./NotFoundPage";

export const AchievementPage = () => {
  const location = useLocation()
  const pathname = location.pathname.split("/")[1]
  const params = useParams()
  const parseParams = Object.values(params)[0];
  const { achievements, isFetched } = useAchievements(parseParams, pathname === "achievement");

  const scrollToTop = () => {
    const options = {
      duration: 0,
      smooth: false,
    };
    scroll.scrollToTop(options);
  };

  useEffect(() => {
    scrollToTop();
  }, [])

  return (
    <>
      {isFetched && achievements
        ?
        <AchievementPageComponent props={achievements.achievements}/>
        :
        <NotFoundPage />
      }
    </>
  )
}