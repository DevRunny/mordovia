import React from "react";
import ButtonBackToMain from "../../Buttons/ButtonBackToMain";
import MiniCardsComponent from "../../CardsComponens/MiniCardsComponent";
import MiniCardComponent from "../../CardsComponens/MiniCardComponent";
import { useLocation } from "react-router-dom";

export const AchievementPageComponent = () => {
  const location = useLocation()
  const pathname = location.pathname.split("/")[1]

  const props = {
    topic: "Люди",
    hasDetailCard: false,
    title: "ЕЖЕГОДНЫЙ МЕЖДУНАРОДНЫЙ ФЕСТИВАЛЬ ДЖАЗОВОЙ МУЗЫКИ «ВЕЙСЭ-ДЖАЗ» ПОД РУКОВОДСТВОМ ИГОРЯ БУТМАНА",
    subtitle: "Приходите и откройте для себя множество удивительных фактов о Мордовии, ее народе и его творческом" +
      " наследии.",
  }


  return (
    <div>
      <ButtonBackToMain toSection={pathname === "achievement" ? "/#achievements" : "/"} />
      <div className={"achievement-title"}>
        <h1>Культура</h1>
        <div className={"achievement-watch-video"}>
          <span>Смотреть видео</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17 7L7 17M17 7H8M17 7V16" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <MiniCardsComponent>
        <MiniCardComponent props={props} />
        <MiniCardComponent props={props} />
        <MiniCardComponent props={props} />
        <MiniCardComponent props={props} />
        <MiniCardComponent props={props} />
        <MiniCardComponent props={props} />
        <MiniCardComponent props={props} />
        <MiniCardComponent props={props} />
      </MiniCardsComponent>
    </div>
  )
}