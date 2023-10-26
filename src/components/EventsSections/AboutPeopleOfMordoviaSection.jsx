import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CardComponent } from "./CardComponent";
import { MobileCardComponent } from "./MobileCardComponent";
import { useOpacity } from "../../hooks/useOpacity";
import { cardsAboutPeople } from "./data";
import { useHoverCard } from "../../hooks/useHoverCard";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import cardMobile from "../../images/cards/cardMobile.png"
import '@splidejs/react-splide/css/sea-green';

export const AboutPeopleOfMordoviaSection = () => {
  const opacity = useOpacity()
  const hover = useHoverCard()

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
          // className={ `introducing-cards ${hover.isHovered ? "active" : "" }`}
          className={`introducing-cards-mobile ${hover.isHovered ? "active" : "" }`}
        >
          <Splide>
            {cardsAboutPeople.map((card)=> {
              return (
                <>
                  <SplideSlide>
                    <MobileCardComponent
                      key={card.id}
                      image={cardMobile}
                      title={card.title}
                      description={card.description}
                    />
                  </SplideSlide>
                </>
              )
            })}
          </Splide>
          {/*{window.innerWidth < 767*/}
          {/*  ?*/}
          {/*  cardsAboutPeople.map((card)=> {*/}
          {/*      return (*/}
          {/*        <CardComponent*/}
          {/*          key={card.id}*/}
          {/*          image={card.image}*/}
          {/*          title={card.title}*/}
          {/*          description={card.description}*/}
          {/*        />*/}

          {/*      )*/}
          {/*    })*/}
          {/*  :*/}
          {/*  <Splide>*/}
          {/*    {cardsAboutPeople.map((card)=> {*/}
          {/*      return (*/}
          {/*        <>*/}
          {/*          <SplideSlide>*/}
          {/*            <MobileCardComponent*/}
          {/*              key={card.id}*/}
          {/*              image={cardMobile}*/}
          {/*              title={card.title}*/}
          {/*              description={card.description}*/}
          {/*            />*/}
          {/*          </SplideSlide>*/}
          {/*        </>*/}
          {/*      )*/}
          {/*    })}*/}
          {/*  </Splide>*/}
          {/*}*/}
        </motion.div>
    </>
  );
};