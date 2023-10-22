import React, { useState } from "react";
import { motion } from "framer-motion";

export const CardComponent = ({ card, h3Text, pText, cardHover }) => {
  const [isHovered, setHovered] = useState(false)
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={"introducing-cards__card"}>
      <img src={card} alt={"card1"} />
      <div
        className={"introducing-cards__description"}
      >
        <h3>{ h3Text }</h3>
        <motion.p
          initial={{height: 0}}
          style={{opacity: 0}}
          animate={{
            opacity: isHovered ? 1 : 0,
            height: isHovered ? "auto" : 0,
            transition: {duration: 0.5}
          }}
        >
          {pText}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default CardComponent