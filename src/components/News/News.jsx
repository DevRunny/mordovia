import React from "react";
import { Titles } from "../Titles/Titles";
import { CardComponent } from "../CardsComponens/CardComponent";
import { useHoverCard } from "../../hooks/useHoverCard";
import { useWindowSize } from "usehooks-ts";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { MobileCardComponent } from "../CardsComponens/MobileCardComponent";
import { useNews } from "../../queries/useNews";

const News = () => {
  const hover = useHoverCard();
  const { width } = useWindowSize();
  const { news, isFetched } = useNews();

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
              {isFetched && news
                ?
                news.news.map((card, index) => {
                  return (
                    <SplideSlide key={card.id}>
                      <MobileCardComponent
                        id={index}
                        img={card.img}
                        topicName={card.topic}
                        isNews={true}
                        title={card.title}
                        subtitle={card.subtitle}
                        date={card.date}
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
    <div id={"#news"}>
      <Titles notSticky={true} h1={"Новости"}/>
      <div className={"news"}>
        <div
          onMouseEnter={ () => hover.setHovered(true) }
          onMouseLeave={ () => hover.setHovered(false) }
          className={ `introducing-classic-cards ${hover.isHovered ? "active" : ""}`}
        >
          {isFetched && news
            ?
            news.news.map((card, index) => {
              return (
                  <CardComponent
                    key={card.id}
                    id={index}
                    img={card.img}
                    topicName={card.topic}
                    isNews={true}
                    title={card.title}
                    subtitle={card.subtitle}
                    date={card.date}
                    alias={card.alias}
                  />
              )
            })
            :
            <></>
          }
        </div>
      </div>
    </div>
  );
};

export default News;
