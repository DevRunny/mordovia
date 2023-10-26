import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CardComponent } from "./CardComponent";
import { MobileCardComponent } from "./MobileCardComponent";
import { useOpacity } from "../../hooks/useOpacity";
import { cardsAboutPeople } from "./data";
import { useHoverCard } from "../../hooks/useHoverCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import cardMobile from "../../images/cards/cardMobile.png"
import '@splidejs/react-splide/css/sea-green';
import { useAnnounces } from "../../hooks/useAnnounces";

export const AboutPeopleOfMordoviaSection = () => {
  const opacity = useOpacity()
  const hover = useHoverCard()
  const announces = useAnnounces()

  return (
    <>
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
            {announces.isLoaded && !announces.error
              ?
              announces.items.screen1.map((card)=> {
              return (
                <>
                  <SplideSlide>
                    <MobileCardComponent
                      key={card.id}
                      url={card.url}
                      img={card.img}
                      title={card.title}
                      subtitle={card.subtitle}
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
      <motion.div
        ref={opacity.ref}
        style={{
          // opacity: opacity.scrollYProgress,
          // opacity: 1
        }}
        onMouseEnter={ () => hover.setHovered(true) }
        onMouseLeave={ () => hover.setHovered(false) }
        className={ `introducing-cards ${hover.isHovered ? "active" : "" }`}
      >
          {announces.isLoaded && !announces.error
            ?
            announces.items.screen1.map((card)=> {
                return (
                  <CardComponent
                    key={card.id}
                    url={card.url}
                    img={card.img}
                    title={card.title}
                    subtitle={card.subtitle}
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