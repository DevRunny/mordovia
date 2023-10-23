import React from "react";
import CardComponent from "./CardComponent";
import cardHover from "../../images/cards/card-interact-zone1-1.png"

function InteractiveZonesSection() {
  return (
    <>
      <div
        className={"introducing-cards"}
      >
        <CardComponent
          card={cardHover}
          h3Text={"Зона «ТОНАВТКУДО»"}
          pText={"Приходите и откройте для себя  множество удивительных фактов о Мордовии, ее народе и его" +
            " творческом наследии."}/>
        <CardComponent
          card={cardHover}
          h3Text={"Путешествие по Мордовии"}
          pText={"Приходите и откройте для себя  множество удивительных фактов о Мордовии, ее народе и его" +
            " творческом наследии."}/>
        <CardComponent
          card={cardHover}
          h3Text={"Зона «ТОНАВТКУДО»"}
          pText={"Приходите и откройте для себя  множество удивительных фактов о Мордовии, ее народе и его" +
            " творческом наследии."}/>
      </div>
    </>
  );
}

export default InteractiveZonesSection;