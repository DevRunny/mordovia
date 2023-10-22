import * as React from "react";
import card1 from "../../images/cards/card1.png";
import card2 from "../../images/cards/card2.png";
import card3 from "../../images/cards/card3.png";
import CardComponent from "./CardComponent";
import { Titles } from "../Titles/Titles";
import headline from "../../images/Headline.svg"


export const AboutPeopleOfMordoviaSection = () => {
  return (
    <>
      <Titles h1={<img src={headline} alt="Вас ждут" />} h2={<>Удивительные открытия <br /> о народе республики <br /> Мордовия</>}/>
        <div
          className={"introducing-cards"}
        >
          <CardComponent
            card={card1}
            h3Text={"Павильон Республика Мордовия"}
            pText={"Приходите и откройте для себя  множество удивительных фактов о Мордовии, ее народе и его" +
              " творческом наследии."}/>
          <CardComponent
            card={card2}
            h3Text={"Павильон Республика Мордовия"}
            pText={"Приходите и откройте для себя  множество удивительных фактов о Мордовии, ее народе и его" +
              " творческом наследии."}/>
          <CardComponent
            card={card3}
            h3Text={"Павильон Республика Мордовия"}
            pText={"Приходите и откройте для себя  множество удивительных фактов о Мордовии, ее народе и его" +
              " творческом наследии."}/>
        </div>
    </>
  );
};