import * as React from "react";
import { CardComponent } from "./CardComponent";
import { motion } from "framer-motion";
import { useOpacity } from "../../hooks/useOpacity";
import { cardsKeyEvents } from "./data";

export const KeyEventsSection = () => {
  const opacity = useOpacity()
  return (
    <>
      <motion.div
        ref={opacity.ref}
        style={{
          opacity: opacity.scrollYProgress,
        }}
        className={"introducing-cards"}
      >
        {/*<div className={"introducing-cards__card-region-day"}>*/}
        {/*  /!*<h1>День региона</h1>*!/*/}
        {/*  /!*<span>30 ноября в 19:00</span>*!/*/}
        {/*  <img src={regionDay} alt={'region-day'} />*/}
        {/*</div>*/}
        {cardsKeyEvents.map((card)=>{
          return (
            <CardComponent key={card.id} image={card.image} title={card.title} description={card.description} regionDay={card.regionDay} />
          )
        })}
      </motion.div>
    </>
  );
};