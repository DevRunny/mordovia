import * as React from "react";
import giftShop from "../images/Gift-shop.png"
import logoFooter from "../images/Logo-footer.svg"
import international from "../images/International.svg"
import investments from "../images/Investments.png"

export const Footer = () => {
  return (
    <footer>
      <div className={"gift-shop"}>
        <a href={"/"}><img src={giftShop} alt={"gift-shop"} /></a>
      </div>
      <div className={"footer"}>
        <div className={"footer__logos"}>
          <div>
            <img src={logoFooter} alt={"logo-footer"} />
          </div>
          <div className={"footer__sponsors"}>
            <img src={international} alt={"logo-international"} />
            <img src={investments} alt={"logo-investments"} />
          </div>
        </div>
        <div className={"footer__navigation"}>
          <h2>Навигация</h2>
          <ul>
            <li><a href={"#events"}>События</a></li>
            <li><a href={"#calendar"}>Календарь</a></li>
            <li><a href={"#about-exposition"}>Об экспозиции</a></li>
            <li><a href={"#where-to-go"}>Как добраться</a></li>
            <li><a href={"#faq"}>Вопросы и ответы</a></li>
            <li><a href={"#news"}>Новости</a></li>
          </ul>
        </div>
        <div className={"social-network"}>
          <h2>Соц. сети</h2>
        </div>
      </div>

    </footer>
  );
};