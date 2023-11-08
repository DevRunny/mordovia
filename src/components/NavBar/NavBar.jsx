import React, { useState } from "react";
import logo from "../../images/Logo.svg";
import sound from "../../images/Sound.svg";
import soundAnimated from "../../images/Sound-animated.svg";
import clue from "../../images/Clue.svg";
import burgerMenu from "../../images/Burger.svg";
import burgerMenuExit from "../../images/Burger-exit.svg";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { PATHS } from "../../router";
import { HashLink } from "react-router-hash-link";

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
        <NavLink to={PATHS.MAIN}>
          <img src={logo} alt={"rpMordovia"} />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <Link
            activeClass="active"
            to="events"
            spy={true}
            smooth={true}
            offset={-315}
            duration={500}
            >
              <HashLink
                to={`${PATHS.MAIN + "#events"}`}
                scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -315) }}
              >События</HashLink>
            </Link>
          </li>
          <li>
            <Link
            activeClass="active"
            to="calendar"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            >
              <HashLink
                to={`${PATHS.MAIN + "#calendar"}`}
                scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -200) }}
              >Афиша</HashLink>
            </Link>
          </li>

          <li>
            <Link
            activeClass="active"
            to="questions"
            spy={true}
            smooth={true}
            offset={-190}
            duration={500}
            >
              <HashLink
                to={`${PATHS.MAIN + "#questions"}`}
                scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -190) }}
              >Вопросы-ответы</HashLink>
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

              <img className={"sound-wave"} src={audioPlaying ? soundAnimated : sound} alt={"alt"} />

              <img
                style={clueVisible ? {display: "block"} : {display: "none"}}
                className={"sound-wave-clue"}
                src={clue}
                alt={"clue"}
              />
              <audio id="main_audio" src="https://mordovia-russia.ru/audio/mordoviya.mp3" style={{display: "none"}} />
            </div>
            <a href="https://vk.com/mordovia_russia" target="_blank" rel="noreferrer">VK</a>
            <a href="https://ok.ru/group/70000004289347" target="_blank" rel="noreferrer">OK</a>
            <a href="https://t.me/Mordovia_Russia" target="_blank" rel="noreferrer">TG</a>
          </div>
        </div>
      <button onClick={() => {handleOpenBurgerMenu()}} className={"burger-menuBtn" + (isOpenBurger ? " burger-opened" : "")}>
      	<img src={isOpenBurger ? burgerMenuExit : burgerMenu} alt={'menu'}/>
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
                  offset={-190}
                  duration={500}
                >
                  <HashLink
                    to={`${PATHS.MAIN + "#events"}`}
                    scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -190) }}
                  >События</HashLink>
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
                  <HashLink
                    to={`${PATHS.MAIN + "#calendar"}`}
                    scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -80) }}
                  >Афиша</HashLink>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {handleOpenBurgerMenu()}}
                  activeClass="active"
                  to="#questions"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  <HashLink
                    to={`${PATHS.MAIN + "#questions"}`}
                    scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -80) }}
                  >Вопросы-ответы</HashLink>
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

          <img className={"sound-wave"} src={audioPlaying ? soundAnimated : sound} alt={"alt"} onClick={() => {handlePlayAudio()}} />

          <div className={"burger-menu__links"}>
            <a href="https://vk.com/mordovia_russia" target="_blank" rel="noreferrer">VK</a>
            <a href="https://ok.ru/group/70000004289347" target="_blank" rel="noreferrer">OK</a>
            <a href="https://t.me/Mordovia_Russia" target="_blank" rel="noreferrer">TG</a>
          </div>
        </div>
      </div>
    </header>
  );
};