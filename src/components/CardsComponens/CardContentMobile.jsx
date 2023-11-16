import React from "react";
import { motion } from "framer-motion";

const CardContentMobile = ({props}) => {
  return (
    <>
      {props.preview
        ?
        <motion.img
          whileHover={{
            opacity: 0,
            transition: {duration: 0.5}
          }}
          style={{
            position: "absolute"
          } }
          src={props.preview} alt={"preview"} />
        :
        <></>
      }
      <img src={ props.img } alt={ "cardImage" } />

      {!props.onlyImage
        ?
        <div className={ `introducing-cards-mobile__description ${props.isNews ? "introducing-cards-mobile__mobile" : ""}` }>
          {props.topicName
            ?
            <div style={{marginBottom: 18}} className={"mini-card__topic"}>
            <span>
              { props.topicName }
            </span>
              <svg className={'mini-card__arrow-link'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M17 7L7 17M17 7H8M17 7V16" stroke="#2B2B2B" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            :
            <></>
          }
          <h3>{ props.title }</h3>
          <p dangerouslySetInnerHTML={ { __html: props.subtitle } }/>
          {props.date
            ?
            <div className={"mini-card__date"}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 7V12L15 15M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="#2B2B2B"
                  strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
              <span>
                  { props.date }
                </span>
            </div>
            :
            <></>
          }
        </div>
        :
        <></>
      }
    </>
  );
};

export default CardContentMobile;
