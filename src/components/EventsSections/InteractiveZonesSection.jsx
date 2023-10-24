import React from "react";
import CardComponent from "./CardComponent";
import cardHover from "../../images/cards/card-interact-zone1-1.png";

function InteractiveZonesSection() {
  return (
    <>
      <div
        className={"introducing-cards"}
      >
        <CardComponent
          image={cardHover}
          title={"Зона «ТОНАВТКУДО»"}
          description={"Приходите и откройте для себя  множество удивительных фактов о Мордовии, ее народе и его" +
            " творческом наследии."}/>
        <CardComponent
          image={cardHover}
          title={"Путешествие по Мордовии"}
          description={"Приходите и откройте для себя  множество удивительных фактов о Мордовии, ее народе и его" +
            " творческом наследии."}/>
        <CardComponent
          image={cardHover}
          title={"Зона «ТОНАВТКУДО»"}
          description={"Приходите и откройте для себя  множество удивительных фактов о Мордовии, ее народе и его" +
            " творческом наследии."}/>
      </div>
    </>
  );
}

export default InteractiveZonesSection;