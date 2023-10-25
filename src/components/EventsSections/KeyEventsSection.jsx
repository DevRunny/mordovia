import * as React from "react";
import { CardComponent } from "./CardComponent";
import { motion } from "framer-motion";
import { useOpacity } from "../../hooks/useOpacity";
import { cardsKeyEvents } from "./data";
import { useHoverCard } from "../../hooks/useHoverCard";

export const KeyEventsSection = () => {
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
        className={`introducing-cards ${hover.isHovered ? "active" : ""}`}
      >
        {cardsKeyEvents.map((card)=>{
          return (
            <CardComponent
              key={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
              onlyImage={card.onlyImage}
              topic={card.topic}
              topicName={card.topicName}
            />
          )
        })}
      </motion.div>
    </>
  );
};