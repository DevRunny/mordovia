import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link, useParams } from "react-router-dom";
import { PATHS } from "../../router";
import { useNewsItem } from "../../queries/useNewsItem";
import { useEvent } from "../../queries/useEvent";
import Details from "../Details";
import ButtonBackToMain from "../Buttons/ButtonBackToMain";

const DetailsPage = ({ newsEnable, eventEnable }) => {
  const params = useParams()
  const parseParams = Object.values(params)[0];
  const { newsItem, isFetched } = useNewsItem(parseParams, newsEnable)
  const { event, isFetchedEvent } = useEvent(parseParams, eventEnable)

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
      <ButtonBackToMain />
      { isFetched && newsItem
        ?
          <Details props={newsItem.data}/>
        :
          <></>
      }
      {isFetchedEvent && event
        ?
          <Details props={event.data} />
        :
          <></>
      }

    </>

  );
};

export default DetailsPage;
