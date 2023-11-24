import React from "react";
import { motion } from "framer-motion";
import { useHoverCard } from "../../hooks/useHoverCard";
import { Link } from "react-router-dom";
import CardContent from "./CardContent";

export const CardComponent = ({id, img, url, title, subtitle, preview, onlyImage, topicName, date, isNews = false, isAchievement = false, type, alias }) => {
  const hover = useHoverCard();

  const props = { img, title, subtitle, preview, onlyImage, topicName, date, isNews };

  const cardVariants = {
    offscreen: {
      y: id  === 0 ? 200 : id === 1 ? 300 : id === 2 ? 350 : id === 3 ? 400 : 0,
      opacity: 0.2
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
      }
    }
  };

  url = alias ? isNews ? ((isNews ? "news/" : "") + alias) : isAchievement ? ((isAchievement ? "achievement/" : "") + alias) : url : url;

  return(
  	<motion.div
      initial={cardVariants.offscreen}
      whileInView={cardVariants.onscreen}
      viewport={{ once: true, amount: "some" }}
      style={ url && url.length ? {cursor: "pointer"} : {}}
      onMouseEnter={ () => hover.setHovered(true)}
      onMouseLeave={ () => hover.setHovered(false)}
      className={ `introducing-classic-cards__card introducing-classic-cards__card-${type} ${isNews ? "news-cards" : (isAchievement ? "achievement-cards" : "")} ${hover.isHovered ? "active" : ""}` }
    >

    {url
      ?
	    <Link to={url}><CardContent props={props} /></Link>
	  :
	    <CardContent props={props} />
	}

    </motion.div>
  )

}