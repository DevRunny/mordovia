import React from "react";
import ButtonBackToMain from "../../Buttons/ButtonBackToMain";
import FaceOfTheRegionComponent from "./FaceOfTheRegionItemComponent";
import FaceOfTheRegionDetailsComponent from "./FaceOfTheRegionItemDetailsComponent";

const FacesOfTheRegionComponent = () => {
  return (
    <div>
      <ButtonBackToMain toSection={"/#achievements"} />
      <div className={"faces-of-the-region-wrapper"}>
        <h1 className={"title"}>Лица региона</h1>
        <div className={"faces-of-the-region-list"}>
          <FaceOfTheRegionComponent />
          <FaceOfTheRegionComponent />
          <FaceOfTheRegionComponent />
          <FaceOfTheRegionComponent />
          <FaceOfTheRegionComponent />
          <FaceOfTheRegionComponent />
          <FaceOfTheRegionComponent />
          <FaceOfTheRegionComponent />
          <FaceOfTheRegionComponent />
          <FaceOfTheRegionComponent />
          <FaceOfTheRegionComponent />
          <FaceOfTheRegionComponent />
        </div>
        <FaceOfTheRegionDetailsComponent />
        <FaceOfTheRegionDetailsComponent />
      </div>
    </div>
  );
};

export default FacesOfTheRegionComponent;
