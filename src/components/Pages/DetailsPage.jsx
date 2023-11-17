import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useLocation, useParams } from "react-router-dom";
import { useNewsItem } from "../../queries/useNewsItem";
import { useEvent } from "../../queries/useEvent";
import { useAchievementsItem } from "../../queries/useAchievementsItem";
import DetailsPageComponent from "./PageComponents/DetailsPageComponent";
import NotFoundPage from "../Pages/NotFoundPage";

const DetailsPage = () => {
  const location = useLocation()
  const pathname = location.pathname.split("/")[1]
  const params = useParams()
  const parseParams = Object.values(params)[0];
  const { newsItem, isFetched } = useNewsItem(parseParams, pathname === "news")
  const { event, isFetchedEvent } = useEvent(parseParams, pathname === "event")
  const { achievementsItem, isFetchedAchievementsItem } = useAchievementsItem(parseParams, pathname === "achievement")

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
      { pathname === "news"
        ?
      	isFetched && newsItem
          ?
          <DetailsPageComponent props={newsItem.data}/>
          :
          <NotFoundPage />
		    :
		      <></>
      }

      { pathname === "event"
        ?
      	isFetchedEvent && event
          ?
          <DetailsPageComponent props={event.data}/>
          :
          <NotFoundPage />
		    :
		      <></>
      }

      { pathname === "achievement"
        ?
          isFetchedAchievementsItem && achievementsItem
            ?
            <DetailsPageComponent props={achievementsItem.data} />
            :
            <NotFoundPage />
        :
        <></>
      }

    </>

  );
};

export default DetailsPage;
