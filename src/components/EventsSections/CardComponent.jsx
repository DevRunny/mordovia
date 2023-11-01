import React from "react";
import { motion } from "framer-motion";
import { useHoverCard } from "../../hooks/useHoverCard";

export const CardComponent = ({ img, url, title, subtitle, preview, onlyImage, topic, topicName }) => {
  const hover = useHoverCard()

  const linkAttributes = url
    ? { target: "_blank", href: url, rel: "noreferrer" }
    : { };

  return (
    <div
      style={ url ? {cursor: "pointer"} : {}}
      onMouseEnter={ () => hover.setHovered(true)}
      onMouseLeave={ () => hover.setHovered(false)}
      className={ `introducing-classic-cards__card ${hover.isHovered ? "active" : ""}` }
    >

      <a {...linkAttributes}>

        {preview
          ?
          <motion.img
            whileHover={{
              opacity: 0,
              transition: {duration: 0.5}
            }}
            style={{
              position: "absolute",
              width: "100%",
              zIndex: 2,
            } }
            src={preview}
            alt={"preview"}
          />
          :
          <></>
        }
        <img src={ img } alt={ "cardImage" } />

        {!onlyImage
          ?
          <div className={ "introducing-classic-cards__description" }>
            {topic
              ?
              <div style={{marginBottom: 18}} className={"calendar-card__topic"}>
            <span>
              { topicName }
            </span>
                <svg className={'calendar-card__arrow-link'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M17 7L7 17M17 7H8M17 7V16" stroke="#2B2B2B" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              :
              <></>
            }
            <h3>{ title }</h3>
            <p dangerouslySetInnerHTML={{__html: subtitle}}>
            </p>
          </div>
          :
          <></>
        }
        </a>
    </div>
  )
}