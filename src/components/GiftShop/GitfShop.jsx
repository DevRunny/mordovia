import React from "react";
import giftShop from "../../images/Gift-shop.svg";
import giftShopMobile from "../../images/Gift-shop-mobile.svg";
import { useWindowSize } from "usehooks-ts";


const GiftShop = () => {
  const { width } = useWindowSize()
  return (
    <div className={"gift-shop"}>
      <a href={"/"}><img src={width > 767 ? giftShop : giftShopMobile} alt={"gift-shop"} /></a>
    </div>
  );
};

export default GiftShop;