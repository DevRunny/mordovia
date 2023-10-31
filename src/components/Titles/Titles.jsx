import React from "react";
import { useOpacity } from "../../hooks/useOpacity";
import { motion } from "framer-motion";

export const Titles = ({img, h1}) => {
  const { ref, scrollYProgress } = useOpacity()

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: scrollYProgress
      }}
      className={"titles"}>
      {img ? <img src={img} alt={"Вас ждут"} /> : <></>}
      {h1 ? <h1>{ h1 }</h1> : <></>}
    </motion.div>
  );
};