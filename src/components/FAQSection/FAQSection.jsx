import React from "react";
import AccordionComponent from "./AccordionComponent";
import { useFaq } from "../../queries/useFaq";

const FAQSection = ({ id }) => {
  const { faq, isFetched } = useFaq()

  return (
    <section id={id} className={'FAQ'}>
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
    </section>
  );
};

export default FAQSection;
