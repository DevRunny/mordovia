import * as React from "react";
import { motion } from "framer-motion";
import { CardComponent } from "./CardComponent";
import { useOpacity } from "../../hooks/useOpacity";
import { cardsAboutPeople } from "./data";

export const AboutPeopleOfMordoviaSection = () => {
  const opacity = useOpacity()

  return (
    <>
        <motion.div
          ref={opacity.ref}
          style={{
            opacity: opacity.scrollYProgress
          }}
          className={"introducing-cards"}
        >
          {cardsAboutPeople.map((card)=> {
            return (
              <CardComponent
                type={"AboutPeopleOfMordovia"}
                key={card.id}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            )
          })}
        </motion.div>
    </>
  );
};