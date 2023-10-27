import * as React from "react";
import logo from "../../images/Logo.svg";
import sound from "../../images/Sound.svg";
import burgerMenu from "../../images/Burger.svg"

export const NavBar = () => {
  return (
    <header>
      <div className={"header-logo"}>
        <a href={"/"}>
          <img src={logo} alt={"rpMordovia"} />
        </a>
      </div>
      <nav>
        <ul>
          <li><a href={"#events"}>События</a></li>
          <li><a href={"#calendar"}>Календарь</a></li>
          <li><a href={"#about-exposition"}>Об экспозиции</a></li>
          <li><a href={"#how-to-get-there"}>Как добраться</a></li>
          <li><a href={"#news"}>Новости</a></li>
        </ul>
      </nav>
        <div className={"header-links"}>
          <div className={"social-links"}>
            <a href={'/'}><img src={sound} alt={"alt"} /></a>
            <a href={'/'}>VK</a>
            <a href={'/'}>OK</a>
            <a href={'/'}>TG</a>
          </div>
        </div>
      <div className={"burger-menu-wrapper"}>
        <button className={"burger-menu"}>
          <img src={burgerMenu} alt={'menu'}/>
        </button>
      </div>
    </header>
  );
};