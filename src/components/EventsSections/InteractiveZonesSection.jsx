import React from "react";
import { useOpacity } from "../../hooks/useOpacity";
import { motion } from "framer-motion";
import { useHoverCard } from "../../hooks/useHoverCard";
import { useWindowSize } from "usehooks-ts";
import { useZones } from "../../queries/useZones";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { MobileCardComponent } from "../CardsComponens/MobileCardComponent";
import { CardComponent } from "../CardsComponens/CardComponent";

function InteractiveZonesSection({id}) {
  const hover = useHoverCard()
  const { width } = useWindowSize()
  const { zones, isFetched } = useZones()

  if (width < 767) {
    return (
      <motion.div
        id={id}
        onMouseEnter={ () => hover.setHovered(true) }
        onMouseLeave={ () => hover.setHovered(false) }
        className={`introducing-cards-mobile ${hover.isHovered ? "active" : "" }`}
      >

        <Splide>
          {zones && isFetched
            ?
            zones.map((card)=> {
              return (
                <React.Fragment key={card.id}>
                  <SplideSlide>
                    <MobileCardComponent
                      key={ card.id }
                      img={ card.img }
                      title={ card.title }
                      preview={ card.preview }
                      subtitle={ card.subtitle }
                    />
                  </SplideSlide>
                </React.Fragment>
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
        id={id}
        onMouseEnter={ () => hover.setHovered(true) }
        onMouseLeave={ () => hover.setHovered(false) }
        className={`introducing-classic-cards ${hover.isHovered ? "active" : ""}`}
      >
        { zones && isFetched
          ?
          zones.map((card, index) => {
            return (
              <CardComponent
                id={index}
                key={ card.id }
                img={ card.img }
                title={ card.title }
                preview={card.preview }
                subtitle={ card.subtitle }
                type="1"
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