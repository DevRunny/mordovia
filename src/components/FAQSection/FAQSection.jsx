import React from "react";
import AccordionComponent from "./AccordionComponent";
import { useFaq } from "../../queries/useFaq";

const FAQSection = () => {
  const { faq, isFetched } = useFaq()

  return (
    <div className={'FAQ'} id="#faq">
      {isFetched
        ?
        faq.map((item) => {
          return (
            <AccordionComponent
              key={item.id}
              question={item.question}
              answer={item.answer}
              />
          )
        })
        :
        <></>
      }
    </div>
  );
};

export default FAQSection;
