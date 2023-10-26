import React from "react";
import { CardComponent } from "./CardComponent";
import { useOpacity } from "../../hooks/useOpacity";
import { motion } from "framer-motion";
import { useHoverCard } from "../../hooks/useHoverCard";
import { useZones } from "../../hooks/useZones";

function InteractiveZonesSection() {
  const opacity = useOpacity()
  const hover = useHoverCard()
  const zones = useZones()

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
        { zones.isLoaded
          ?
          zones.items.map((card) => {
            return (
              <CardComponent
                key={ card.id }
                img={ card.img }
                title={ card.title }
                preview={card.preview }
                subtitle={ card.subtitle }
              />
            )
          })
          :
          <></>
        }
      </motion.div>
    </>
  );
}

export default InteractiveZonesSection;