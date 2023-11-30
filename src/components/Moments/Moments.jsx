import React from "react";
import { Titles } from "../Titles/Titles";
import { useWindowSize } from "usehooks-ts";
import { useMoments } from "../../queries/useMoments";
import Fancybox from "../Fancybox/Fancybox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import 'swiper/css/autoplay';

const Moments = ({ id }) => {
  const { width } = useWindowSize();
  const { moments, isFetched } = useMoments();

  const handleMomentCardClick = (element) => {
  	let el = document.getElementById(element);
  	el.click();
  }

  if (width < 767) {
    return (
      <section id={id}>
        <Titles notSticky={true} h1={"Моменты"}/>
        <div className={"achievement-watch-video"} onClick={() => { handleMomentCardClick("moments_photo_id_0") }}>
          <span>Смотреть все</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17 7L7 17M17 7H8M17 7V16" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className={"moments"}>
         {isFetched && moments
           ?
            moments.data.map((card, index) => {
              return (
              	<React.Fragment key={index}>
                { index < 6
                  ?
              	  <a className={"moments-card"} onClick={() => { handleMomentCardClick("moments_photo_id_" + index) }}>
              	    <img src={card.img} allt="" />
				  </a>
				  :
				  <></>
				}
				</React.Fragment>
              )
            })
            :
            <></>
          }
        </div>

        <div style={{display: "none"}}>
          <Fancybox>
        	{isFetched && moments
              ?
              moments.data.map((card, index) => {
                return (
          	      <a key={index} data-fancybox="gallery" href={ card.img } id={"moments_photo_id_" + index}>
    			    <img key={ index } src={ card.img } alt="" />
                  </a>
                )
              })
              :
              <></>
    		}
          </Fancybox>
        </div>
      </section>
    )
  }

  return (
    <section id={id}>
      <div className="section-title-wrapper">
        <Titles notSticky={true} h1={"Моменты"}/>
        <div className={"achievement-watch-video"} onClick={() => { handleMomentCardClick("moments_photo_id_0") }}>
          <span>Смотреть все</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17 7L7 17M17 7H8M17 7V16" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className={"moments"}>
        {isFetched && moments
        ?
        <Swiper
          modules={[Autoplay]}
	      spaceBetween={0}
	      slidesPerGroup={1}
	      slidesPerView={"auto"}
	      allowTouchMove={false}
	      preventInteractionOnTransition={true}
	      autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop={true}
          className={"moments-slider"}
          speed="5000"
	    >
          {
            moments.data.map((card, index) => {
              return (
              	<SwiperSlide key={card.id}>
              	  <a className={"moments-card" + (card.isHeart ? " is_heart" : "")} onClick={() => { handleMomentCardClick("moments_photo_id_" + index) }}>
              	    <img src={card.img} allt="" />
				  </a>
                </SwiperSlide>
              )
            })
          }
		</Swiper>
		:
        <></>
        }
      </div>

      <div style={{display: "none"}}>
        <Fancybox>
      	{isFetched && moments
          ?
          moments.data.map((card, index) => {
            return (
      	      <a key={index} data-fancybox="gallery" href={ card.img } id={"moments_photo_id_" + index}>
			    <img key={ index } src={ card.img } alt="" />
              </a>
            )
          })
          :
          <></>
		}
		</Fancybox>
      </div>
    </section>
  );
};

export default Moments;
