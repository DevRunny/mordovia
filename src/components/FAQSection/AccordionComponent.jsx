import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import plus from "../../images/Plus.svg";
import minus from "../../images/Minus.svg";

const AccordionComponent = ({question, answer}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div
        onClick={() => setIsOpen((prev) => !prev)}
        className={'accordion'}
      >
        <motion.div
          style={ isOpen ? {borderBottom: 0} : {} }
          className={"accordion__question"}>
        { <h4>{question}</h4> } {isOpen ? <img src={minus} alt={"-"} /> : <img src={plus} alt={"+"} />}
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className={"accordion__answer"}
            initial={{ opacity: 0, y: '-10%' }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{
              opacity: 0,
              y: '-10%',
              transition: {
                duration: 0.5,
              },
            }}
          >
            <span dangerouslySetInnerHTML={{__html: answer}} />
          </motion.div>
        ) : (
          ''
        )}
      </AnimatePresence>
    </>
  );
};

export default AccordionComponent;
