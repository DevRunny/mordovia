import React from "react";
import { useHoverCard } from "../../hooks/useHoverCard";
import { Link } from "react-router-dom";
import CardContentMobile from "./CardContentMobile";

export const MobileCardComponent = ({ img, url, title, subtitle, preview, onlyImage, topicName, date, isNews, alias }) => {
  const hover = useHoverCard();

  const props = {img, title, subtitle, preview, onlyImage, topicName, date};

  url = alias ? ((isNews ? "news/" : "") + alias) : url;

  return (
    <div
      style={ url ? {cursor: "pointer"} : {}}
      onMouseEnter={ () => hover.setHovered(true)}
      onMouseLeave={ () => hover.setHovered(false)}
      className={ `introducing-cards-mobile__card  ${hover.isHovered ? "active" : ""}` }
    >

    {url
      ?
	    <Link to={url}><CardContentMobile props={props} /></Link>
	  :
      <CardContentMobile props={props} />
	}

    </div>
  )
}