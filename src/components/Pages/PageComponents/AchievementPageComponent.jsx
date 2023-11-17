import React from "react";
import ButtonBackToMain from "../../Buttons/ButtonBackToMain";
import MiniCardsComponent from "../../CardsComponens/MiniCardsComponent";
import MiniCardComponent from "../../CardsComponens/MiniCardComponent";
import { Link, useLocation } from "react-router-dom";

export const AchievementPageComponent = (props) => {
  const location = useLocation()
  const pathname = location.pathname.split("/")[1]


  return (
    <div className={"achievement-section"}>
      <ButtonBackToMain toSection={pathname === "achievement" ? "/#achievements" : "/"} />
      {props.props[0]?.topic
        ?
        <div className={"achievement-title"}>
          <h1>{props.props[0]?.topic}</h1>
          <div className={"achievement-watch-video"}>
            <span>Смотреть видео</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17 7L7 17M17 7H8M17 7V16" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        :
        <></>
      }

      <MiniCardsComponent>
        {props.props
          ?
          props.props.map((achievement) => {
            return (
              <Link key={achievement.id} to={ achievement.alias ? `${achievement.alias}` : "/not-found" }>
                <MiniCardComponent key={achievement.id} props={achievement} />
              </Link>
            )
          })
          :
          <></>
        }
      </MiniCardsComponent>
    </div>
  )
}