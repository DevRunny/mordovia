import * as React from "react";
import { CardComponent } from "./CardComponent";
import { motion } from "framer-motion";
import { useOpacity } from "../../hooks/useOpacity";
import { useHoverCard } from "../../hooks/useHoverCard";
import { useAnnounces } from "../../hooks/useAnnounces";

export const KeyEventsSection = () => {
  const opacity = useOpacity()
  const hover = useHoverCard()
  const announces = useAnnounces()

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
        {announces.isLoaded
        ?
          announces.items.screen2.map((card)=>{
              return (
                <CardComponent
                  key={card.id}
                  url={card.url}
                  img={card.img}
                  title={card.title}
                  subtitle={card.subtitle}
                  onlyImage={card.onlyImage}
                  topic={card.topic}
                  topicName={card.topicName}
                />
              )
            })
          :
          <></>
        }
      </motion.div>
    </>
  );
};