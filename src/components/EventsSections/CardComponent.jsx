import React from "react";
import { motion } from "framer-motion";
import { useHoverCard } from "../../hooks/useHoverCard";

export const CardComponent = ({ image, title, description, additionalImage, onlyImage, topic, topicName }) => {
  const hover = useHoverCard()

  const AdditionalImage = () => {
      if (additionalImage) {
        return (
          <motion.div
            whileHover={ {
              opacity: 0,
              mixBlendMode: "unset",
              transition: { duration: 0.5 }
            } }
            className={"card_image-first-wrapper"}
          >
            <motion.img
              className={ "card_image-first" }
              src={ additionalImage }
              alt={ "cardBg" }
            />
          </motion.div>
        )
      }
      return (
        <></>
      )
  }

  return (
    <div
      style={{cursor: "pointer"}}
      onMouseEnter={ () => hover.setHovered(true)}
      onMouseLeave={ () => hover.setHovered(false)}
      className={ `introducing-cards__card  ${hover.isHovered ? "active" : ""}` }
    >
      <AdditionalImage />

      <img src={ image } alt={ "cardImage" } />

      {!onlyImage
        ?
        <div className={ "introducing-cards__description" }>
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
          <p>
            { description }
          </p>
        </div>
        :
        <></>
      }

    </div>
  )
}