import React from "react";
import miniFace from "../../../images/mini-face.png";
import { useWindowSize } from "usehooks-ts";

const FaceOfTheRegion = ({data}) => {

  const { width } = useWindowSize()

  const handleClickPeople = (id) => {
  	const element = document.getElementById('face-of-the-region-wrapper-'+id);
	element.style.scrollMargin = width > 767 ? "160px" : "100px";
	if (element) {
  	  element.scrollIntoView({ behavior: 'smooth' });
	}
  }

  return (
    <div className={"face-of-the-region"}
    	onClick={() => {handleClickPeople(data.id)}}
    >
      <img src={data.img} alt={"miniFace"}/>
      <span dangerouslySetInnerHTML={{__html: data.name}}></span>
    </div>
  );
};

export default FaceOfTheRegion;
