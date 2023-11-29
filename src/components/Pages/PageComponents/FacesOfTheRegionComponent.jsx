import React from "react";
import ButtonBackToMain from "../../Buttons/ButtonBackToMain";
import FaceOfTheRegionComponent from "./FaceOfTheRegionItemComponent";
import FaceOfTheRegionDetailsComponent from "./FaceOfTheRegionItemDetailsComponent";
import { useRegionPersons } from "../../../queries/useRegionPersons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const FacesOfTheRegionComponent = () => {
  
  const { persons, isFetched } = useRegionPersons()

  return (
    <div>
      <ButtonBackToMain toSection={"/#achievements"} />
      <div className={"faces-of-the-region-wrapper"}>
        <h1 className={"title"}>Лица региона</h1>
        { persons && persons.groups && persons.groups.length > 0
          ?
          <Swiper
	        spaceBetween={0}
	        slidesPerView={"auto"}
	        className={"faces-of-the-region-list"}
	      >
            { persons.groups.map((group, index) => {
              return (
                <SwiperSlide className={"person-people-group"}>
                  { group.map((item, index2) => {
                    return (
                      <FaceOfTheRegionComponent 
                      	data={item}
                      />
					)})
				  }
				</SwiperSlide>
              )
            })}
          </Swiper>
          :
          <></>
        }

        { persons && persons.items && persons.items.length > 0
          ?
          <div>
            { persons.items.map((person, index) => {
              return (
                <FaceOfTheRegionDetailsComponent 
                  data={person}
                />
              )
            })}
          </div>
          :
          <></>
        }
      </div>
    </div>
  );
};

export default FacesOfTheRegionComponent;
