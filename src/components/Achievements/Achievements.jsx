import React from "react";
import { Titles } from "../Titles/Titles";
import { CardComponent } from "../CardsComponens/CardComponent";
import { useHoverCard } from "../../hooks/useHoverCard";
import { useWindowSize } from "usehooks-ts";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { MobileCardComponent } from "../CardsComponens/MobileCardComponent";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { useCategoriesAchievements } from "../../queries/useCategoriesAchievements";

const Achievements = ({ id }) => {
  const { categoriesAchievements, isFetched} = useCategoriesAchievements();
  const hover = useHoverCard();
  const { width } = useWindowSize();

  if (width < 767) {
    return (
      <div id={id}>
        <Titles notSticky={true} h1={"Достижения"}/>
        <div className={"achievements"}>
          <div
            onMouseEnter={ () => hover.setHovered(true) }
            onMouseLeave={ () => hover.setHovered(false) }
            className={`introducing-cards-mobile ${hover.isHovered ? "active" : "" }`}
          >
            <Splide
            >
              {isFetched && categoriesAchievements
                ?
                categoriesAchievements.categoriesAchievements.map((cat, index) => {
                  return(
                    <SplideSlide key={cat.id}>
                      <MobileCardComponent
                        id={index}
                        img={cat.img}
                        topicName={cat.topic}
                        title={cat.subtitle}
                        subtitle={cat.descr}
                        alias={cat.alias}
                        isAchievement={true}
                        type={"3"}
                      />
                    </SplideSlide>
                  )
                })
                :
                <></>
              }
            </Splide>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id={id}>
      <Titles notSticky={true} h1={"Достижения"}/>
      <div className={"achievements"}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={3}
            navigation
            onMouseEnter={ () => hover.setHovered(true) }
            onMouseLeave={ () => hover.setHovered(false) }
            className={ `introducing-classic-cards ${hover.isHovered ? "active" : ""}`}
          >
            {isFetched && categoriesAchievements
              ?
              categoriesAchievements.categoriesAchievements.map((cat, index) => {
                return(
                  <SwiperSlide key={cat.id}>
                    <CardComponent
                    id={index}
                    img={cat.img}
                    topicName={cat.topic}
                    title={cat.subtitle}
                    subtitle={cat.descr}
                    alias={cat.alias}
                    isAchievement={true}
                    type={"3"}
                    />
                  </SwiperSlide>
                )
              })
              :
              <></>
            }
          </Swiper>
      </div>
    </div>
  );
};

export default Achievements;
