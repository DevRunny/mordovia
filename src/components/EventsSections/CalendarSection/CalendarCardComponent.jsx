import React, { useState } from "react";
import { motion } from "framer-motion";

const CalendarCardComponent = ({props}) => {
  const [isHovered, setHovered] = useState(false)
  const colorBlack = "#2B2B2B"
  const colorWhite = "#FFFFFF"
  const duration = 0.5;


  return (
    <motion.div
      whileHover={{
        backgroundImage: `url(${props.img})`,
        backgroundSize: "cover",
        cursor: "pointer",
        transition: {duration: duration}
      }}
      whileTap={{
        backgroundImage: `url(${props.img})`,
        backgroundSize: "cover",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={"calendar-card"}
    >
      <div className={"calendar-card__topic"}>
        <motion.span
          initial={{color: colorBlack}}
          animate={{
            color : isHovered ? colorWhite : colorBlack,
            transition: {duration: duration}
          }}
        >
          { props.topic }
        </motion.span>
        <svg className={'calendar-card__arrow-link'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <motion.path
            initial={{stroke: colorBlack}}
            animate={{
              stroke : isHovered ? colorWhite : colorBlack,
              transition: {duration: duration}
            }}
            d="M17 7L7 17M17 7H8M17 7V16" stroke="#2B2B2B" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className={"calendar-card__description"}>
        <motion.h3
        initial={{color: colorBlack}}
        animate={{
          color : isHovered ? colorWhite : colorBlack,
          transition: {duration: duration}
        }}
        >
          { props.title }
        </motion.h3>
        <motion.p
          initial={{height: 0, color: colorBlack}}
          style={{opacity: 0}}
          animate={{
            color : isHovered ? colorWhite : colorBlack,
            height : isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0,
            transition: {duration: duration}
          }}
        >
          { props.subtitle }
        </motion.p>
      </div>
      <div className={"calendar-card__date"}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            initial={{stroke: colorBlack}}
            animate={{
              stroke : isHovered ? colorWhite : colorBlack,
              transition: {duration: duration}
            }}
            d="M12 7V12L15 15M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="#2B2B2B"
            strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
        <motion.p
          initial={{color: colorBlack}}
          animate={{
            color : isHovered ? colorWhite : colorBlack,
            transition: {duration: duration}
          }}
        >
          { props.date + " " + props.t }
        </motion.p>
      </div>
    </motion.div>
  );
}

export default CalendarCardComponent;