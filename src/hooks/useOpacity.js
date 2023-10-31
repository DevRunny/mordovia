import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export const useOpacity = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["70% 100%", "100% 60%" ],
  })
  const opacityProgress = useTransform(scrollYProgress, [0, 0], [0.2, 1])

  return {
    ref,
    scrollYProgress,
    opacityProgress
  }
};
