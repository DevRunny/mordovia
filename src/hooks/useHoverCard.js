import { useState } from "react";

export const useHoverCard = () => {
  const [ isHovered, setHovered ] = useState(false)


  return {
    isHovered,
    setHovered,
  }

};

