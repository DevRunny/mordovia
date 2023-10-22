import React from "react";
import { Titles } from "../Titles/Titles";
import headline from "../../images/Headline.svg"
import CardComponent from "./CardComponent";
import card1 from "../../images/cards/card-interact-zone1.png";
import card2 from "../../images/cards/card-interact-zone2.png";
import card3 from "../../images/cards/card-interact-zone3.png";
import cardHover from "../../images/cards/card-interact-zone1-1.png"

function InteractiveZonesSection() {
  return (
    <>
      <Titles h1={<img src={headline} alt="Вас ждут" />} h2={<>Интерактивные выставки с уникальными возможностями погружения в культуру <br /> и историю Мордовии.</>}/>
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