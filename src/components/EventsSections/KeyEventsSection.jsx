import * as React from "react";
import { CardKeyEventsComponent } from "../CardsComponens/CardKeyEventsComponent";
import { motion } from "framer-motion";
import { useHoverCard } from "../../hooks/useHoverCard";
import { useWindowSize } from "usehooks-ts";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { MobileCardComponent } from "../CardsComponens/MobileCardComponent";
import { useAnnounces } from "../../queries/useAnnounces";

export const KeyEventsSection = ({id, ref}) => {
  const { isHovered, setHovered } = useHoverCard()
  const { width } = useWindowSize()
  const { announces, isFetched } = useAnnounces({})


  if (width < 767) {
    return (
      <motion.div
        id={id}
        onMouseEnter={ () => setHovered(true) }
        onMouseLeave={ () => setHovered(false) }
        className={`introducing-cards-mobile ${isHovered ? "active" : "" }`}
      >

        <Splide>
          {announces && isFetched
            ?
            announces.screen2.map((card)=> {
              return (
                <React.Fragment key={card.id}>
                  <SplideSlide>
                    <MobileCardComponent
                      key={card.id}
                      url={card.url}
                      img={card.img}
                      title={card.title}
                      subtitle={card.subtitle}
                      onlyImage={card.onlyImage}
                      topic={card.topic}
                      topicName={card.topicName}
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
        ref={ref}
        onMouseEnter={ () => setHovered(true) }
        onMouseLeave={ () => setHovered(false) }
        className={`introducing-cards ${isHovered ? "active" : ""}`}
      >
        {announces && isFetched
        ?
          announces.screen2.map((card)=>{
              return (
                <CardKeyEventsComponent
                  key={card.id}
                  url={card.url}
                  img={card.img}
                  title={card.title}
                  subtitle={card.subtitle}
                  onlyImage={card.onlyImage}
                  topic={card.topic}
                  topicName={card.topicName}
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