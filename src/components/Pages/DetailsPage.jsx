import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useLocation, useParams } from "react-router-dom";
import { useNewsItem } from "../../queries/useNewsItem";
import { useEvent } from "../../queries/useEvent";
import Details from "../Details";
import ButtonBackToMain from "../Buttons/ButtonBackToMain";
import NotFoundPage from "../Pages/NotFoundPage";

const DetailsPage = () => {
  const location = useLocation()
  const pathname = location.pathname.split("/")[1]
  const params = useParams()
  const parseParams = Object.values(params)[0];
  const { newsItem, isFetched } = useNewsItem(parseParams, pathname === "news")
  const { event, isFetchedEvent } = useEvent(parseParams, pathname === "event")

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
        <>
      	{ isFetched && newsItem
          ?
          <Details props={newsItem.data}/>
          :
          <NotFoundPage />
		}
        </>
		:
		<></>
      }

      { pathname === "event"
        ?
        <>
      	{ isFetchedEvent && event
          ?
          <Details props={event.data}/>
          :
          <NotFoundPage />
        }
        </>
		:
		<></>
      }

    </>

  );
};

export default DetailsPage;
