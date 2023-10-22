import * as React from "react";
import card1 from "../images/cards/card1.png";
import card2 from "../images/cards/card2.png";
import card3 from "../images/cards/card3.png";

export const KeyEventsSection = () => {
  return (
    <div className={"introducing-cards"}>
      <div className={"introducing-cards__card"}>
        <img src={card1} alt={"card1"} />
        <div className={"introducing-cards__description"} >
          <h3>Павильон Республика Мордовия</h3>
          <p>Приходите и откройте для себя  множество удивительных <br />  фактов о Мордовии, ее народе и его творческом наследии.</p>
        </div>
      </div>
      <div className={"introducing-cards__card"}>
        <img src={card2} alt={"card2"} />
        <div className={"introducing-cards__description"}>
          <h3>Павильон Республики Мордовия</h3>
          <p>Приходите и откройте для себя  множество удивительных <br />  фактов о Мордовии, ее народе и его творческом наследии.</p>
        </div>
      </div>
      <div className={"introducing-cards__card"} >
        <img src={card3} alt={"card3"} />
        <div className={"introducing-cards__description"}>
          <h3>Павильон Республики Мордовия</h3>
          <p>Приходите и откройте для себя  множество удивительных <br /> фактов о Мордовии, ее народе и его творческом наследии.</p>
        </div>
      </div>
    </div>
  );
};