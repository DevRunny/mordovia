import React from "react";
import miniFace from "../../../images/mini-face.png";

const FaceOfTheRegion = ({data}) => {
  return (
    <div className={"face-of-the-region"}>
      <img src={data.img} alt={"miniFace"}/>
      <span>{data.name}</span>
    </div>
  );
};

export default FaceOfTheRegion;
