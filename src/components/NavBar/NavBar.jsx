import React, { useState } from "react";
import logo from "../../images/Logo.svg";
import sound from "../../images/Sound.svg";
import soundAnimated from "../../images/Sound-animated.svg";
import clue from "../../images/Clue.svg"
import burgerMenu from "../../images/Burger.svg"
import { Link } from "react-scroll";

export const NavBar = () => {
  const [isOpenBurger, setIsOpenBurger] = useState()
  const [clueVisible, setClueVisible] = useState(false)
  const [audioPlaying, setAudioPlaying] = useState(false)

  const handleOpenBurgerMenu = () => {
    setIsOpenBurger(!isOpenBurger)
  }

  const handlePlayAudio = () => {

    setAudioPlaying(!audioPlaying);

    let audio = document.getElementById("main_audio");
    if (audio.paused) {
      audio.play();
      return;
    }

    audio.pause();
  }

  return (
    <header>
      <div className={"header-logo"}>
        <a href={"/"}>
          <img src={logo} alt={"rpMordovia"} />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <Link
            activeClass="active"
            to="events"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            >
              События
            </Link>
          </li>
          <li>
            <Link
            activeClass="active"
            to="#calendar"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            >
              Афиша
            </Link>
          </li>

          <li>
            <Link
            activeClass="active"
            to="#faq"
            spy={true}
            smooth={true}
            offset={-230}
            duration={500}
            >
              Вопросы-ответы
            </Link>
          </li>

          {/*
          <li>
            <Link
              activeClass="active"
              to="#about-exposition"
              spy={true}
              smooth={true}
              offset={-315}
              duration={500}
              >
                Об экспозиции
              </Link>
          </li>
          <li>
            <Link
            activeClass="active"
            to="how-to-get-there"
            spy={true}
            smooth={true}
            offset={-330}
            duration={500}
            >
              Как добраться
            </Link>
          </li>
          <li><a href={"#news"}>Новости</a></li>
          */}
        </ul>
      </nav>
        <div className={"header-links"}>
          <div className={"social-links"}>
            <div
              className={"sound-wave-wrapper"}
              style={{cursor: "pointer"}}
              onMouseEnter={() => {setClueVisible(true)}}
              onMouseLeave={() => {setClueVisible(false)}}
              onClick={() => {handlePlayAudio()}}>
               
              {audioPlaying
              ?
              <img className={"sound-wave"} src={soundAnimated} alt={"alt"} />
              :
			  <img className={"sound-wave"} src={sound} alt={"alt"} />
			  }

              <img
                style={clueVisible ? {display: "block"} : {display: "none"}}
                className={"sound-wave-clue"}
                src={clue}
                alt={"clue"}
              />
              <audio id="main_audio" src="https://mordovia-russia.ru/audio/mordoviya.mp3" style={{display: "none"}} />
            </div>
            <a href="https://vk.com/officialmordovia" target="_blank" rel="noreferrer">VK</a>
            <a href="https://ok.ru/officialmordovia" target="_blank" rel="noreferrer">OK</a>
            <a href="https://t.me/officialmordovia" target="_blank" rel="noreferrer">TG</a>
          </div>
        </div>
      <button onClick={() => {handleOpenBurgerMenu()}} className={"burger-menuBtn"}>
        <img src={burgerMenu} alt={'menu'}/>
      </button>
      <div style={{display: `${isOpenBurger ? "block" : "none"}`}} className={"burger-menu"}>
        <div className={"burger-menu-wrapper"}>
          <div className={"burger-menu__nav"}>
            <ul>
              <li>
                <Link
                  onClick={() => {handleOpenBurgerMenu()}}
                  activeClass="active"
                  to="events"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                >
                  События
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {handleOpenBurgerMenu()}}
                  activeClass="active"
                  to="#calendar"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Календарь
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {handleOpenBurgerMenu()}}
                  activeClass="active"
                  to="#faq"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Вопросы-ответы
                </Link>
              </li>

              {/*<li>*/}
              {/*  <Link*/}
              {/*    onClick={() => {handleOpenBurgerMenu()}}*/}
              {/*    activeClass="active"*/}
              {/*    to="#about-exposition"*/}
              {/*    spy={true}*/}
              {/*    smooth={true}*/}
              {/*    offset={-210}*/}
              {/*    duration={500}*/}
              {/*  >*/}
              {/*    Об экспозиции*/}
              {/*  </Link>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <Link*/}
              {/*    onClick={() => {handleOpenBurgerMenu()}}*/}
              {/*    activeClass="active"*/}
              {/*    to="how-to-get-there"*/}
              {/*    spy={true}*/}
              {/*    smooth={true}*/}
              {/*    offset={-125}*/}
              {/*    duration={500}*/}
              {/*  >*/}
              {/*    Как добраться*/}
              {/*  </Link>*/}
              {/*</li>*/}
              {/*<li><a href={"#news"}>Новости</a></li>*/}
            </ul>
          </div>
          <div className={"burger-menu__links"}>
            <a href="https://vk.com/officialmordovia" target="_blank" rel="noreferrer">VK</a>
            <a href="https://ok.ru/officialmordovia" target="_blank" rel="noreferrer">OK</a>
            <a href="https://t.me/officialmordovia" target="_blank" rel="noreferrer">TG</a>
          </div>
        </div>
      </div>
    </header>
  );
};