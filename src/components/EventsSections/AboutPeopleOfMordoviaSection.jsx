import React from "react";
import { motion } from "framer-motion";
import { CardComponent } from "./CardComponent";
import { useOpacity } from "../../hooks/useOpacity";
import { cardsAboutPeople } from "./data";
import { useHoverCard } from "../../hooks/useHoverCard";

export const AboutPeopleOfMordoviaSection = () => {
  const opacity = useOpacity()
  const hover = useHoverCard()

  return (
    <>
        <motion.div
          ref={opacity.ref}
          style={{
            // opacity: opacity.scrollYProgress
            opacity: 1
          }}
          onMouseEnter={ () => hover.setHovered(true) }
          onMouseLeave={ () => hover.setHovered(false) }
          className={`introducing-cards 
          ${hover.isHovered 
            ?
            "active"
            : 
            ""
          }`}
        >
          {cardsAboutPeople.map((card)=> {
            return (

              <CardComponent
                type={"AboutPeopleOfMordovia"}
                key={card.id}
                image={card.image}
                title={card.title}
                description={card.description}
              />

            )
          })}
        </motion.div>
    </>
  );
};