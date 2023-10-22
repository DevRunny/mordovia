import * as React from "react";
import card1 from "../images/cards/card1.png";
import card2 from "../images/cards/card2.png";
import card3 from "../images/cards/card3.png";
import IntroducingCard from "./IntroducingCard";


export const OfferCards = () => {
  return (
        <div
          className={"introducing-cards"}
        >
          <IntroducingCard
            card={card1}
            h3Text={"Павильон Республика Мордовия"}
            pText={"Приходите и откройте для себя  множество удивительных фактов о Мордовии, ее народе и его" +
              " творческом наследии."}/>
          <IntroducingCard
            card={card2}
            h3Text={"Павильон Республика Мордовия"}
            pText={"Приходите и откройте для себя  множество удивительных фактов о Мордовии, ее народе и его" +
              " творческом наследии."}/>
          <IntroducingCard
            card={card3}
            h3Text={"Павильон Республика Мордовия"}
            pText={"Приходите и откройте для себя  множество удивительных фактов о Мордовии, ее народе и его" +
              " творческом наследии."}/>
        </div>
  );
};