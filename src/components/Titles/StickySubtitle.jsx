import React from "react";
import { useOpacity } from "../../hooks/useOpacity";
import { motion } from "framer-motion";

const StickySubtitle = ({subtitle}) => {
  const {scrollYProgress, ref} = useOpacity()

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: scrollYProgress,
      }}
      className={"sticky-subtitle"}>
      {subtitle ? <h2 dangerouslySetInnerHTML={{__html: subtitle}} />: <></>}
    </motion.div>
  );
};

export default StickySubtitle;