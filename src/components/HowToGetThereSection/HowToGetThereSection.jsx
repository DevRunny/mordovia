import React from "react";
import { Titles } from "../Titles/Titles";
import pavilion from "../../images/Map-pavilion.svg";
import exposition from "../../images/Map-exposition.svg";

const HowToGetThereSection = () => {
  return (
    <div id={"#how-to-get-there"}>
      <Titles h1={"Как добраться"} h2={""}/>
      <div className={"how-to-get-there"}>
        <div className={"how-to-get-there__link"}>
          <a href={'/'}>
            <img src={pavilion} alt={'pavilion'} />
          </a>
        </div>
        <div className={"how-to-get-there__link"}>
          <a href={'/'}>
            <img src={exposition} alt={'exposition'} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowToGetThereSection;
