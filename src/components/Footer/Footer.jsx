import * as React from "react";
import international from "../../images/International.svg";
import investments from "../../images/Investments.png";
import iconSite from "../../images/Icon-site.png";


export const Footer = () => {
  return (
    <footer>
      <div className={"footer"}>
        <div className={"footer__logos"}>
          <div className={"footer__sponsors"}>
            <img src={international} alt={"logo-international"} />
            <img src={investments} alt={"logo-investments"} />
          </div>
        </div>
        <div className={"footer__social-network"}>
          <div className={"footer__links-wrapper"}>
            <span>Экспозиция Республики Мордовия</span>
            <div className={"footer__links"}>
              <a href="https://e-mordovia.ru" target="_blank" rel="noreferrer">VK</a>
              <a href="https://e-mordovia.ru" target="_blank" rel="noreferrer">TG</a>
              <a href="https://e-mordovia.ru" target="_blank" rel="noreferrer">OK</a>
            </div>
          </div>
          <div className={"footer__links-wrapper"}>
            <span>Глава Республики Мордовия Артем Здунов</span>
            <div className={"footer__links"}>
              <a href="https://vk.com/artem_zdunov" target="_blank" rel="noreferrer">VK</a>
              <a href="https://t.me/zdunov" target="_blank" rel="noreferrer">TG</a>
              <a href="https://ok.ru/artem.zdunov" target="_blank" rel="noreferrer">OK</a>
            </div>
          </div>
          <div className={"footer__links-wrapper"}>
              <span>Республика Мордовия</span>
              <div className={"footer__links"}>
                <a href="https://e-mordovia.ru" target="_blank" rel="noreferrer">
                  <img src={iconSite} alt={'site'} />
                </a>
                <a href="https://vk.com/officialmordovia" target="_blank" rel="noreferrer">VK</a>
                <a href="https://t.me/officialmordovia" target="_blank" rel="noreferrer">TG</a>
                <a href="https://rutube.ru/channel/25013908/" target="_blank" rel="noreferrer">RUTUBE</a>
                <a href="https://ok.ru/officialmordovia" target="_blank" rel="noreferrer">OK</a>
                <a href="https://dzen.ru/officialmordovia" target="_blank" rel="noreferrer">ДЗЕН</a>
              </div>
          </div>
          <div className={"footer__links-wrapper"}>
            <span>Мордовское землячество</span>
            <div className={"footer__links"}>
              <a href="https://t.me/mordzem13" target="_blank" rel="noreferrer">TG</a>
            </div>
          </div>
          <div className={"footer__links-wrapper"}>
              <span>Инвестиционный портал Республики Мордовия</span>
              <div className={"footer__links"}>
                <a href="https://www.investrm.ru" target="_blank" rel="noreferrer">
                  <img src={iconSite} alt={'site'} />
                </a>
              </div>
          </div>
        </div>
      </div>

    </footer>
  );
};