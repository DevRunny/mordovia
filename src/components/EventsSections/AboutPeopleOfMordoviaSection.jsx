import React from "react";
import { motion } from "framer-motion";
import { CardComponent } from "./CardComponent";
import { useOpacity } from "../../hooks/useOpacity";
import { useHoverCard } from "../../hooks/useHoverCard";
import "@splidejs/react-splide/css/sea-green";
import { useAnnounces } from "../../queries/useAnnounces";

export const AboutPeopleOfMordoviaSection = () => {
  const opacity = useOpacity()
  const hover = useHoverCard()
  const { announces, isFetched } = useAnnounces({});

  return (
    <>
    {/*  <motion.div*/}
    {/*  ref={opacity.ref}*/}
    {/*  style={{*/}
    {/*    // opacity: opacity.scrollYProgress,*/}
    {/*    // opacity: 1*/}
    {/*  }}*/}
    {/*  onMouseEnter={ () => hover.setHovered(true) }*/}
    {/*  onMouseLeave={ () => hover.setHovered(false) }*/}
    {/*  className={`introducing-cards-mobile ${hover.isHovered ? "active" : "" }`}*/}
    {/*>*/}

    {/*      <Splide>*/}
    {/*        {announces.isLoaded && !announces.error*/}
    {/*          ?*/}
    {/*          announces.items.screen1.map((card)=> {*/}
    {/*          return (*/}
    {/*            <>*/}
    {/*              <SplideSlide>*/}
    {/*                <MobileCardComponent*/}
    {/*                  key={card.id}*/}
    {/*                  url={card.url}*/}
    {/*                  img={card.img}*/}
    {/*                  title={card.title}*/}
    {/*                  subtitle={card.subtitle}*/}
    {/*                />*/}
    {/*              </SplideSlide>*/}
    {/*            </>*/}
    {/*          )*/}
    {/*        })*/}
    {/*        :*/}
    {/*          <></>*/}
    {/*        }*/}
    {/*      </Splide>*/}
    {/*  </motion.div>*/}
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