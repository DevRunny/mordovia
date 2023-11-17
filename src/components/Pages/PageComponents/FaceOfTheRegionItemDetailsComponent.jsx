import React from "react";
import bigFace from "../../../images/big-face.png";

const FaceOfTheRegionDetailsComponent = () => {
  return (
    <div className={"face-of-the-region-wrapper"}>
      <div className={"face-of-the-region-info"}>
        <span>ЛЮДИ</span>
        <h1>ТАТЬЯНА КОНСТАНТИНОВНА ОСТРЕЙКОВСКАЯ</h1>
        <div className={"positions"}>
          <p>РОССИЙСКИЙ УЧЁНЫЙ В ОБЛАСТИ ПЕДИАТРИИ</p>
          <p>ЧЛЕН-КОРРЕСПОНДЕНТ ОТДЕЛЕНИЯ МЕДИЦИНСКИХ НАУК РАН</p>
        </div>
      </div>
      <div className={"face-of-the-region-description"}>
        <img src={bigFace} alt={"bigFace"} />
        <span>
          Главная задача Выставки — представить достижения нашей страны в самых разных отраслях на одной площадке, показать россиянам настоящую современную Россию, которой можно и нужно гордиться. Участниками Выставки станут все 89 регионов России, федеральные министерства, корпорации и общественные организации.
Решение о проведении Выставки закреплено Указом Президента РФ от 29.03.2023 № 215 «Об Организационном комитете по подготовке и проведению Международной выставки-форума «Россия».
        </span>
      </div>
    </div>
  );
};

export default FaceOfTheRegionDetailsComponent;
