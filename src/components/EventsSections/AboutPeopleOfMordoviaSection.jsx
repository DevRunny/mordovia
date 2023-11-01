import React from "react";
import { motion } from "framer-motion";
import { useOpacity } from "../../hooks/useOpacity";
import { useHoverCard } from "../../hooks/useHoverCard";
import "@splidejs/react-splide/css/sea-green";
import { useAnnounces } from "../../queries/useAnnounces";
import { useWindowSize } from "usehooks-ts";
import { MobileCardComponent } from "./MobileCardComponent";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { CardComponent } from "./CardComponent";

export const AboutPeopleOfMordoviaSection = () => {
  const opacity = useOpacity()
  const hover = useHoverCard()
  const { width } = useWindowSize()
  const { announces, isFetched } = useAnnounces({});

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
          {announces && isFetched
            ?
            announces.screen1.map((card)=> {
              return (
                <React.Fragment key={card.id}>
                  <SplideSlide>
                    <MobileCardComponent
                      key={card.id}
                      url={card.url}
                      img={card.img}
                      title={card.title}
                      subtitle={card.subtitle}
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
        ref={opacity.ref}
        style={{
          // opacity: opacity.scrollYProgress,
          // opacity: 1
        }}
        onMouseEnter={ () => hover.setHovered(true) }
        onMouseLeave={ () => hover.setHovered(false) }
        className={ `introducing-classic-cards ${hover.isHovered ? "active" : ""}`}
      >
          {announces && isFetched
            ?
            announces.screen1.map((card)=> {
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