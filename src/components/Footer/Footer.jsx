import * as React from "react";
import giftShop from "../../images/Gift-shop.svg";
import international from "../../images/International.svg";
import investments from "../../images/Investments.png";
import iconSite from "../../images/Icon-site.png";

export const Footer = () => {
  return (
    <footer>
      <div className={"gift-shop"}>
        <a href={"/"}><img src={giftShop} alt={"gift-shop"} /></a>
      </div>
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
              <a href={'/'}>VK</a>
              <a href={'/'}>TG</a>
              <a href={'/'}>OK</a>
            </div>
          </div>
          <div className={"footer__links-wrapper"}>
            <span>Глава Республики Мордовия Артем Здунов</span>
            <div className={"footer__links"}>
              <a href={'/'}>VK</a>
              <a href={'/'}>TG</a>
              <a href={'/'}>OK</a>
            </div>
          </div>
            <div className={"footer__links-wrapper"}>
              <span>Республика Мордовия</span>
              <div className={"footer__links"}>
                <a href={'/'}>
                  <img src={iconSite} alt={'site'} />
                </a>
                <a href={'/'}>VK</a>
                <a href={'/'}>TG</a>
                <a href={'/'}>RUTUBE</a>
                <a href={'/'}>OK</a>
                <a href={'/'}>ДЗЕН</a>
              </div>
            </div>
          <div className={"footer__links-wrapper"}>
            <span>Мордовское землячество</span>
            <div className={"footer__links"}>
              <a href={'/'}>TG</a>
            </div>
          </div>
            <div className={"footer__links-wrapper"}>
              <span>Инвестиционный портал Республики Мордовия</span>
              <div className={"footer__links"}>
                <a href={'/'}>
                  <img src={iconSite} alt={'site'} />
                </a>
              </div>
            </div>
        </div>
      </div>

    </footer>
  );
};