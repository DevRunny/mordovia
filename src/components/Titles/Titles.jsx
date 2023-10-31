import * as React from "react";
// import { useOpacity } from "../../hooks/useOpacity";
import { motion } from "framer-motion";

export const Titles = ({img, h1, h2}) => {
  // const opacityRef = useOpacity()

  return (
    <motion.div
      // ref={opacityRef.ref}
      // style={{
      //   opacity: opacityRef.scrollYProgress
      // }}
      className={"titles"}>
      {img ? <img src={img} alt={"Вас ждут"} /> : <></>}
      {h1 ? <h1>{ h1 }</h1> : <></>}
      {h2 ? <h2 dangerouslySetInnerHTML={{__html: h2}} />: <></>}
    </motion.div>
  );
};