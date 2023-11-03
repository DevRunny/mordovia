import React from "react";
import { useOpacity } from "../../hooks/useOpacity";
import { motion } from "framer-motion";

const StickyTitle = ({subtitle, notSticky, img}) => {
  const {scrollYProgress, ref} = useOpacity()

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: scrollYProgress,
      }}
      className={`sticky-subtitle ${notSticky ? "not-sticky" : ""}`}>
      {img ? <img src={img} alt={"Вас ждут"} /> : <></>}
      {subtitle ? <h2 dangerouslySetInnerHTML={{__html: subtitle}} />: <></>}
    </motion.div>
  );
};

export default StickyTitle;
