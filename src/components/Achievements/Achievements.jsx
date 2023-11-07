import React from "react";
import { Titles } from "../Titles/Titles";
import { CardComponent } from "../CardsComponens/CardComponent";
import achieveCard from "../../images/Achieve-card.png";
import { useHoverCard } from "../../hooks/useHoverCard";
import { useWindowSize } from "usehooks-ts";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { MobileCardComponent } from "../CardsComponens/MobileCardComponent";

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
        <div
          onMouseEnter={ () => hover.setHovered(true) }
          onMouseLeave={ () => hover.setHovered(false) }
          className={ `introducing-classic-cards ${hover.isHovered ? "active" : ""}`}
        >
          <CardComponent
            id={0}
            img={achieveCard}
            topic={true}
            topicName={"Люди"}
            title={"Масторава – карнавал чудес"}
            subtitle={"Приходите и откройте для себя множество удивительных фактов о Мордовии, её народе и его творческом наследии."}
          />
          <CardComponent
            id={1}
            img={achieveCard}
            topic={true}
            topicName={"Люди"}
            title={"Масторава – карнавал чудес"}
            subtitle={"Приходите и откройте для себя множество удивительных фактов о Мордовии, её народе и его творческом наследии."}
          />
          <CardComponent
            id={2}
            img={achieveCard}
            topic={true}
            topicName={"Люди"}
            title={"Масторава – карнавал чудес"}
            subtitle={"Приходите и откройте для себя множество удивительных фактов о Мордовии, её народе и его творческом наследии."}
          />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
