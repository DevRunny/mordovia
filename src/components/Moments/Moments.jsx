import React from "react";
import { Titles } from "../Titles/Titles";
import { useWindowSize } from "usehooks-ts";
import { useMoments } from "../../queries/useMoments";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Moments = ({ id }) => {
  const { width } = useWindowSize();
  const { moments, isFetched } = useMoments();

  if (width < 767) {
    return (
      <section id={id}>
        <Titles notSticky={true} h1={"Моменты"}/>
        <div className={"moments"}>
        </div>
      </section>
    )
  }

  return (
    <section id={id}>
      <Titles notSticky={true} h1={"Моменты"}/>
      <div className={"moments"}>
        <Swiper
	      spaceBetween={15}
	      slidesPerView={"auto"}
	      loop={true}
          className={"moments-slider"}
		  speed={1000}
	    >
          {isFetched && moments
            ?
            moments.data.map((card, index) => {
              return (
              	  <SwiperSlide key={card.id}>
              	    <div class={"moments-card" + (card.isHeart ? " is_heart" : "")}>
              	      <img src={card.img} allt="" />
					</div>
                  </SwiperSlide>
              )
            })
            :
            <></>
          }
		</Swiper>
      </div>
    </section>
  );
};

export default Moments;
