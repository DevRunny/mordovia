import React from "react";
import { motion } from "framer-motion";
import { useHoverCard } from "../../hooks/useHoverCard";
import "@splidejs/react-splide/css/sea-green";
import { useAnnounces } from "../../queries/useAnnounces";
import { useWindowSize } from "usehooks-ts";
import { MobileCardComponent } from "../CardsComponens/MobileCardComponent";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { CardComponent } from "../CardsComponens/CardComponent";

export const AboutPeopleOfMordoviaSection = () => {
  const hover = useHoverCard();
  const { width } = useWindowSize();
  const { announces, isFetched } = useAnnounces({});

  if (width < 767) {
    return (
      <div
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
      </div>
    )
  }

  return (
    <>
      <motion.div
        onMouseEnter={ () => hover.setHovered(true) }
        onMouseLeave={ () => hover.setHovered(false) }
        className={ `introducing-classic-cards ${hover.isHovered ? "active" : ""}`}
      >
          {announces && isFetched
            ?
            announces.screen1.map((card, index)=> {
                return (
                  <CardComponent
                    id={index}
                    key={card.id}
                    url={card.url}
                    img={card.img}
                    title={card.title}
                    subtitle={card.subtitle}
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
};