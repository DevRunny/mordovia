import React from "react";
import miniFace from "../../../images/mini-face.png";

const FaceOfTheRegion = () => {
  return (
    <div className={"face-of-the-region"}>
      <img src={miniFace} alt={"miniFace"}/>
      <span>Татьяна Константиновна Острейковская</span>
    </div>
  );
};

export default FaceOfTheRegion;
