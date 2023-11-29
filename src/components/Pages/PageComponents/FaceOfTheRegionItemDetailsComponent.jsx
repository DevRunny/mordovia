import React from "react";
import bigFace from "../../../images/big-face.png";

const FaceOfTheRegionDetailsComponent = ({data}) => {
  return (
    <div className={"face-of-the-region-wrapper"} id={"face-of-the-region-wrapper-"+data.id}>
      <div className={"face-of-the-region-info"}>
        <span>ЛЮДИ</span>
        <h1 dangerouslySetInnerHTML={{__html: data.name}}></h1>
        <div className={"positions"} dangerouslySetInnerHTML={{__html: data.subtitle}}></div>
      </div>
      <div className={"face-of-the-region-description"}>
        <img src={data.img} alt={"bigFace"} />
        <span dangerouslySetInnerHTML={{__html: data.descr}}></span>
      </div>
    </div>
  );
};

export default FaceOfTheRegionDetailsComponent;
