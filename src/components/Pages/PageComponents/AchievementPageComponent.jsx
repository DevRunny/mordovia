import React, { useState } from "react";
import ButtonBackToMain from "../../Buttons/ButtonBackToMain";
import MiniCardsComponent from "../../CardsComponens/MiniCardsComponent";
import MiniCardComponent from "../../CardsComponens/MiniCardComponent";
import { Link, useLocation } from "react-router-dom";

import videoPlay from "../../../images/Video-play.svg";

export const AchievementPageComponent = (props) => {
  const location = useLocation()
  const pathname = location.pathname.split("/")[1]

  const [videoPlaying, setVideoPlaying] = useState(false)
  const [videoOpened, setVideoOpened] = useState(false)

  const handlePlayVideo = () => {
    setVideoPlaying(true);
    let video = document.getElementById("detail_video");
    if (video.paused) {
      video.play();
      video.setAttribute("controls", "controls");
      return;
    }
  }

  const handleOpenVideo = () => {
  	document.body.classList.add("video-popup-opened");
    setVideoOpened(true);
    setVideoPlaying(false);
  }

  const handleCloseVideo = () => {
  	document.body.classList.remove("video-popup-opened");
    setVideoOpened(false);
  }

  return (
    <div className={"achievement-section"}>
      <ButtonBackToMain toSection={pathname === "achievement" ? "/#achievements" : "/"} />
      {props.props.cat.topic
        ?
        <div className={"achievement-title"}>
          <h1>{props.props.cat.topic}</h1>

          {props.props.cat.video
            ?
            <div className={"achievement-watch-video"} onClick={() => {handleOpenVideo()}}>
              <span>Смотреть видео</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17 7L7 17M17 7H8M17 7V16" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            :
            <></>
          }
        </div>
        :
        <></>
      }

      <MiniCardsComponent>
        {props.props
          ?
          props.props.items.map((achievement) => {
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

  	  {videoOpened && props.props.cat.video
  	    ?
        <div className={"videoPopup"}>
          <div className="detail-video">
            <video id="detail_video" playsInline>
              <source src={ props.props.cat.video } type="video/mp4" />
            </video>
            { !videoPlaying
              ?
              <div className="video-placeholder">
                <img src={videoPlay} alt="" onClick={() => {handlePlayVideo()}} />
              </div>
              :
		      <></>
            }

            <a className={"close-video"} onClick={() => {handleCloseVideo()}}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#D20000"/>
                <path d="M29 19L19 29M29 29L19 19" stroke="#D20000" stroke-linecap="round"/>
              </svg>
            </a>
		  </div>
        </div>
        :
        <></>
      }
    </div>
  )
}