import React, { useState } from "react";
import { motion } from "framer-motion";

export const CardComponent = ({ image, title, description }) => {
  const [isHovered, setHovered] = useState(false)
  return (
    <motion.div
      whileHover={{
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={"introducing-cards__card"}>
      <img src={image} alt={"cardImage"} />
      <div
        className={"introducing-cards__description"}
      >
        <h3>{ title }</h3>
        <motion.p
          initial={{height: 0}}
          style={{opacity: 0}}
          animate={{
            opacity: isHovered ? 1 : 0,
            height: isHovered ? "auto" : 0,
            transition: {duration: 0.5}
          }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default CardComponent