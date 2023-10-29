import * as React from "react";
import { CardKeyEventsComponent } from "./CardKeyEventsComponent";
import { motion } from "framer-motion";
import { useOpacity } from "../../hooks/useOpacity";
import { useHoverCard } from "../../hooks/useHoverCard";
import { useWindowSize } from "usehooks-ts";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { MobileCardComponent } from "./MobileCardComponent";
import { useAnnounces } from "../../queries/useAnnounces";

export const KeyEventsSection = ({id}) => {
  const opacity = useOpacity()
  const { isHovered, setHovered } = useHoverCard()
  const { width } = useWindowSize()
  const { announces, isFetched } = useAnnounces({})


  if (width < 767) {
    return (
      <motion.div
        id={id}
        ref={opacity.ref}
        style={{
          // opacity: opacity.scrollYProgress,
        }}
        onMouseEnter={ () => setHovered(true) }
        onMouseLeave={ () => setHovered(false) }
        className={`introducing-cards-mobile ${isHovered ? "active" : "" }`}
      >

        <Splide>
          {announces && isFetched
            ?
            announces.screen2.map((card)=> {
              return (
                <>
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
        id={id}
        ref={opacity.ref}
        style={{
          // opacity: opacity.scrollYProgress
          opacity: 1
        }}
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