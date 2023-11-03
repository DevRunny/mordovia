import React from "react";
import { Titles } from "../Titles/Titles";
import { CardComponent } from "../CardsComponens/CardComponent";
import newsCard from "../../images/News-card.png";
import { useHoverCard } from "../../hooks/useHoverCard";
import { useWindowSize } from "usehooks-ts";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { MobileCardComponent } from "../CardsComponens/MobileCardComponent";

const News = () => {
  const hover = useHoverCard();
  const { width } = useWindowSize();

  if (width < 767) {
    return (
      <div id={"#news"}>
        <Titles notSticky={true} h1={"Новости"}/>
        <div className={"news"}>
          <div
            onMouseEnter={ () => hover.setHovered(true) }
            onMouseLeave={ () => hover.setHovered(false) }
            className={`introducing-cards-mobile ${hover.isHovered ? "active" : "" }`}
          >
            <Splide
            >
              <SplideSlide>
                <MobileCardComponent
                  img={newsCard}
                  topic={true}
                  topicName={"Новость"}
                  isNews={true}
                  title={"Масторава – карнавал чудес"}
                  subtitle={"Приходите и откройте для себя множество удивительных фактов о Мордовии, её народе и его творческом наследии."}
                  date={"29 ноября 19:00"}
                />
              </SplideSlide>
              <SplideSlide>
                <MobileCardComponent
                  img={newsCard}
                  topic={true}
                  topicName={"Новость"}
                  isNews={true}
                  title={"Масторава – карнавал чудес"}
                  subtitle={"Приходите и откройте для себя множество удивительных фактов о Мордовии, её народе и его творческом наследии."}
                  date={"29 ноября 19:00"}
                />
              </SplideSlide>
              <SplideSlide>
                <MobileCardComponent
                  img={newsCard}
                  topic={true}
                  topicName={"Новость"}
                  isNews={true}
                  title={"Масторава – карнавал чудес"}
                  subtitle={"Приходите и откройте для себя множество удивительных фактов о Мордовии, её народе и его творческом наследии."}
                  date={"29 ноября 19:00"}
                />
              </SplideSlide>
              <SplideSlide>
                <MobileCardComponent
                  img={newsCard}
                  topic={true}
                  topicName={"Новость"}
                  isNews={true}
                  title={"Масторава – карнавал чудес"}
                  subtitle={"Приходите и откройте для себя множество удивительных фактов о Мордовии, её народе и его творческом наследии."}
                  date={"29 ноября 19:00"}
                />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id={"#news"}>
      <Titles notSticky={true} h1={"Новости"}/>
      <div className={"news"}>
        <div
          onMouseEnter={ () => hover.setHovered(true) }
          onMouseLeave={ () => hover.setHovered(false) }
          className={ `introducing-classic-cards ${hover.isHovered ? "active" : ""}`}
        >
        <CardComponent
          id={0}
          img={newsCard}
          topic={true}
          topicName={"Новость"}
          isNews={true}
          title={"Масторава – карнавал чудес"}
          subtitle={"Приходите и откройте для себя множество удивительных фактов о Мордовии, её народе и его творческом наследии."}
          date={"29 ноября 19:00"}
          />
        <CardComponent
          id={1}
          img={newsCard}
          topic={true}
          topicName={"Новость"}
          isNews={true}
          title={"Масторава – карнавал чудес"}
          subtitle={"Приходите и откройте для себя множество удивительных фактов о Мордовии, её народе и его творческом наследии."}
          date={"29 ноября 19:00"}
          />
        <CardComponent
          id={2}
          img={newsCard}
          topic={true}
          topicName={"Новость"}
          isNews={true}
          title={"Масторава – карнавал чудес"}
          subtitle={"Приходите и откройте для себя множество удивительных фактов о Мордовии, её народе и его творческом наследии."}
          date={"29 ноября 19:00"}
          />
          <CardComponent
            id={3}
            img={newsCard}
            topic={true}
            topicName={"Новость"}
            isNews={true}
            title={"Масторава – карнавал чудес"}
            subtitle={"Приходите и откройте для себя множество удивительных фактов о Мордовии, её народе и его творческом наследии."}
            date={"29 ноября 19:00"}
          />
        </div>
      </div>
    </div>
  );
};

export default News;
