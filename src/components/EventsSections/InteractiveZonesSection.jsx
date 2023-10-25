import React from "react";
import { CardComponent } from "./CardComponent";
import { cardsInteractiveZones } from "./data";
import { useOpacity } from "../../hooks/useOpacity";
import { motion } from "framer-motion";
import sign1 from "../../images/Sign-one.svg";
import sign2 from "../../images/Sign-two.svg";
import { useHoverCard } from "../../hooks/useHoverCard";

function InteractiveZonesSection() {
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
        {cardsInteractiveZones.map((item, index) => {
          return (
            <CardComponent
              type={"InteractiveZones"}
              key={item.id}
              image={item.image}
              title={item.title}
              additionalImage={index === 1 ? sign2 : sign1}
              description={item.description}
            />
          )
        })}
      </motion.div>
    </>
  );
}

export default InteractiveZonesSection;