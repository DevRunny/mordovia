import React from "react";
import { useOpacity } from "../../hooks/useOpacity";
import { motion } from "framer-motion";
import { useHoverCard } from "../../hooks/useHoverCard";
import { useWindowSize } from "usehooks-ts";
import { useZones } from "../../queries/useZones";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { MobileCardComponent } from "./MobileCardComponent";
import { CardComponent } from "./CardComponent";

function InteractiveZonesSection() {
  const opacity = useOpacity()
  const hover = useHoverCard()
  const { width } = useWindowSize()
  const { zones, isFetched } = useZones()

  if (width < 767) {
    return (
      <motion.div
        ref={opacity.ref}
        style={{
          // opacity: opacity.scrollYProgress,
          // opacity: 1
        }}
        onMouseEnter={ () => hover.setHovered(true) }
        onMouseLeave={ () => hover.setHovered(false) }
        className={`introducing-cards-mobile ${hover.isHovered ? "active" : "" }`}
      >

        <Splide>
          {zones && isFetched
            ?
            zones.map((card)=> {
              return (
                <>
                  <SplideSlide>
                    <MobileCardComponent
                      key={ card.id }
                      img={ card.img }
                      title={ card.title }
                      preview={ card.preview }
                      subtitle={ card.subtitle }
                    />
                  </SplideSlide>
                </>
              )
            })
            :
            <></>
          }
        </Splide>
      </motion.div>
    )
  }

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
        className={`introducing-classic-cards ${hover.isHovered ? "active" : ""}`}
      >
        { zones && isFetched
          ?
          zones.map((card) => {
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