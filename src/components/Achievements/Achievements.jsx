import React from "react";
import { Titles } from "../Titles/Titles";
import { CardComponent } from "../CardsComponens/CardComponent";
import achieveCard from "../../images/Achieve-card.png";
import { useHoverCard } from "../../hooks/useHoverCard";
import { useWindowSize } from "usehooks-ts";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { MobileCardComponent } from "../CardsComponens/MobileCardComponent";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const Achievements = ({ id }) => {
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
              <SplideSlide>
                <MobileCardComponent
                  img={achieveCard}
                  topic={true}
                  topicName={"Люди"}
                  title={"Масторава – карнавал чудес"}
                  subtitle={"Приходите и откройте для себя множество удивительных фактов о Мордовии, её народе и его творческом наследии."}
                />
              </SplideSlide>
              <SplideSlide>
                <MobileCardComponent
                  img={achieveCard}
                  topic={true}
                  topicName={"Производство"}
                  title={"Масторава – карнавал чудес"}
                  subtitle={"Приходите и откройте для себя множество удивительных фактов о Мордовии, её народе и его творческом наследии."}
                />
              </SplideSlide>
              <SplideSlide>
                <MobileCardComponent
                  img={achieveCard}
                  topic={true}
                  topicName={"Искусство"}
                  title={"Масторава – карнавал чудес"}
                  subtitle={"Приходите и откройте для себя множество удивительных фактов о Мордовии, её народе и его творческом наследии."}
                />
              </SplideSlide>
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
            <SwiperSlide>
          <CardComponent
            id={0}
            img={achieveCard}
            topic={true}
            topicName={"Люди"}
            title={"Масторава – карнавал чудес"}
            subtitle={"Приходите и откройте для себя множество удивительных фактов о Мордовии, её народе и его творческом наследии."}
            isAchievement={true}
            alias={"testovoe"}
            type="3"
          />
            </SwiperSlide>
            <SwiperSlide>
          <CardComponent
            id={1}
            img={achieveCard}
            topic={true}
            topicName={"Люди"}
            title={"Масторава – карнавал чудес"}
            subtitle={"Приходите и откройте для себя множество удивительных фактов о Мордовии, её народе и его творческом наследии."}
            isAchievement={true}
            type="3"
          />
            </SwiperSlide>
            <SwiperSlide>
          <CardComponent
            id={2}
            img={achieveCard}
            topic={true}
            topicName={"Люди"}
            title={"Масторава – карнавал чудес"}
            subtitle={"Приходите и откройте для себя множество удивительных фактов о Мордовии, её народе и его творческом наследии."}
            isAchievement={true}
            type="3"
          />
            </SwiperSlide>
            <SwiperSlide>
              <CardComponent
                id={3}
                img={achieveCard}
                topic={true}
                topicName={"Люди"}
                title={"Масторава – карнавал чудес"}
                subtitle={"Приходите и откройте для себя множество удивительных фактов о Мордовии, её народе и его творческом наследии."}
                isAchievement={true}
                type="3"
              />
            </SwiperSlide>
          </Swiper>
      </div>
    </div>
  );
};

export default Achievements;
