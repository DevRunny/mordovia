import React, { useState } from "react";
import { motion } from "framer-motion";
import DescriptionIntroducingCard from "./DescriptionIntroducingCard";


export const CardComponent = ({ image, title, description, additionalImage, regionDay }) => {
  const [ isHovered, setHovered ] = useState(false)

  const showDescription = {
    initial: {height: 0},
    style: { opacity: 0},
    animate: {
    opacity: isHovered ? 1 : 0,
      height: isHovered ? "auto" : 0,
      transition: { duration: 0.5 }
    },
  }

  const AdditionalImage = () => {
      if (additionalImage) {
        return (
          <motion.img
          whileHover={ {
            opacity: 0,
            mixBlendMode: "unset",
            transition: { duration: 0.5 }
          } }
          className={ "card_image-first" }
          src={ additionalImage }
          alt={ "cardBg" }
        />
        )
      }
      return (
        <></>
      )
  }

  return (
    <motion.div
      whileHover={ {
        cursor: "pointer",
      } }
      onMouseEnter={ () => setHovered(true) }
      onMouseLeave={ () => setHovered(false) }
      className={ "introducing-cards__card" }
    >

      <AdditionalImage />

      {!regionDay
        ?
        <img src={ image } alt={ "cardImage" } />
        :
        <motion.img
          // whileHover={{
          //   flex:
          // }} TODO: НА СТАДИИ РЕШЕНИЯ, СТОИТ ЛИ ДЕЛАТЬ ОСОБЕННЫЙ БЛОК
          src={ image }
          alt={ "cardImage" } />}

      {!regionDay
        ?
        <DescriptionIntroducingCard>
          <h3>{ title }</h3>
          <motion.p
            initial={showDescription.initial}
            style={showDescription.style}
            animate={showDescription.animate}
          >
            { description }
          </motion.p>
        </DescriptionIntroducingCard>
        :
        <></>
      }

    </motion.div>
  )
}