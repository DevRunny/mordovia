import React from "react";
import { motion } from "framer-motion";
import { useHoverCard } from "../../hooks/useHoverCard";

export const CardKeyEventsComponent = ({id, img, url, title, subtitle, preview, onlyImage, topic, topicName }) => {
  const { isHovered, setHovered } = useHoverCard()

  const cardVariants = {
    offscreen: {
      y: id  === 0 ? 200 : id === 1 ? 300 : id === 2 ? 400 : id === 3 ? 500 : 0,
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

  const mouseActiveHover = () => {
    setTimeout(() => {
      setHovered(!isHovered)
    }, 100)
  }

  const linkAttributes = url
    ? { target: "_blank", href: url, rel: "noreferrer" }
    : { };


  return (
    <motion.div
      initial={cardVariants.offscreen}
      whileInView={cardVariants.onscreen}
      viewport={{ once: true, amount: "some" }}
      style={ url ? {cursor: "pointer"} : {}}
      onMouseEnter={ () => setHovered(true)}
      onMouseLeave={ () => mouseActiveHover()}
      className={ `introducing-cards__card  ${isHovered ? "active" : ""}` }
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
              zIndex: 4,
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
          <p dangerouslySetInnerHTML={{__html: subtitle}}>
          </p>
        </div>
        :
        <></>
      }
      </a>
    </motion.div>
  )
}