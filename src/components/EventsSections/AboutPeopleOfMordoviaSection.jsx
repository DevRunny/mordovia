import React from "react";
import { motion } from "framer-motion";
import { useHoverCard } from "../../hooks/useHoverCard";
import "@splidejs/react-splide/css/sea-green";
import { useAnnounces } from "../../queries/useAnnounces";
import { useWindowSize } from "usehooks-ts";
import { MobileCardComponent } from "../CardsComponens/MobileCardComponent";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { CardComponent } from "../CardsComponens/CardComponent";

export const AboutPeopleOfMordoviaSection = ({id}) => {
  const hover = useHoverCard();
  const { width } = useWindowSize();
  const { announces, isFetched } = useAnnounces({});

  if (width < 767) {
    return (
      <section id={id}
        onMouseEnter={ () => hover.setHovered(true) }
        onMouseLeave={ () => hover.setHovered(false) }
        className={`introducing-cards-mobile ${hover.isHovered ? "active" : "" }`}
      >

        <Splide>
          {announces && isFetched
            ?
            announces.screen1.map((card, index)=> {

            	if (index == 0) {
            		card.img = 'https://mordovia-russia.ru/i/1.gif';
            	}

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
      </section>
    )
  }

  return (
      <motion.section
        id={id}
        onMouseEnter={ () => hover.setHovered(true) }
        onMouseLeave={ () => hover.setHovered(false) }
        className={ `introducing-classic-cards ${hover.isHovered ? "active" : ""}`}
      >
          {announces && isFetched
            ?
            announces.screen1.map((card, index)=> {

            	if (index == 0) {
            		card.img = 'https://mordovia-russia.ru/i/1.gif';
            	}

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
        </motion.section>
  );
};