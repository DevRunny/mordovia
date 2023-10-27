import React from "react";
import { CardComponent } from "./CardComponent";
import { useOpacity } from "../../hooks/useOpacity";
import { motion } from "framer-motion";
import { useHoverCard } from "../../hooks/useHoverCard";
import { useQuery } from "react-query";
import { MORDOVIA_ENDPOINTS } from "../../API/endpoints";
import { getZones } from "../../services/zones";

function InteractiveZonesSection() {
  const opacity = useOpacity()
  const hover = useHoverCard()
  const { data, isFetched } = useQuery(MORDOVIA_ENDPOINTS.zones, getZones)

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
        { data && isFetched
          ?
          data.map((card) => {
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