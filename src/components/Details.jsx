import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useWindowSize } from "usehooks-ts";

import Fancybox from "./Fancybox";

import videoPlay from "../images/Video-play.svg";

const Details = ({ props }) => {
  const { width } = useWindowSize()

  const [videoPlaying, setVideoPlaying] = useState(true)

  const handlePlayVideo = () => {
    setVideoPlaying(0);
    let video = document.getElementById("detail_video");
    video.play();
    video.setAttribute("controls", "controls");
  }

  const declOfNum = (n, titles) => {
    return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2]
  }

  return (
    <div className={"event-details-page"}>
      <div className={"event"}>
        <div className={"event__info"}>
          <span>{ props.topic }</span>
          <h1>{ props.title }</h1>
          <div className={"event-date-and-point-wrapper"}>
            <div className={"date"}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 7V12L15 15M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="#2B2B2B"
                  strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
              <p>{ props.date }</p>
            </div>
            <div className={"point"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.657 16.6567L13.414 20.8997C13.039 21.2743 12.5306 21.4848 12.0005 21.4848C11.4704 21.4848 10.962 21.2743 10.587 20.8997L6.343 16.6567C5.22422 15.5379 4.46234 14.1124 4.15369 12.5606C3.84504 11.0087 4.00349 9.40022 4.60901 7.93844C5.21452 6.47665 6.2399 5.22725 7.55548 4.34821C8.87107 3.46918 10.4178 3 12 3C13.5822 3 15.1289 3.46918 16.4445 4.34821C17.7601 5.22725 18.7855 6.47665 19.391 7.93844C19.9965 9.40022 20.155 11.0087 19.8463 12.5606C19.5377 14.1124 18.7758 15.5379 17.657 16.6567Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>{ props.place }</p>
            </div>
          </div>
        </div>
      </div>
      <div className={"event-details-content"}>
        <div className={"event__details"}>
          { props.img
            ?
            <img className={"details_photo"} src={ props.img } alt={"eventPhoto"} />
            :
            <></>
          }
          <div className={"details_description"} dangerouslySetInnerHTML={{__html: props.descr}}>
          </div>
          { props.video
            ?
            <div className="detail-video">
              <video id="detail_video" playsInline>
                <source src={ props.video } type="video/mp4" />
              </video>
              { videoPlaying
                ?
                <div className="video-placeholder">
                  <img src={videoPlay} alt="" onClick={() => {handlePlayVideo()}} />
                </div>
                :
				<></>
              }
			</div>
            :
            <></>
          }
        </div>
        { props.gallery && props.gallery.length > 0
          ?
          <div className={ "event__gallery-wrapper" }>
            <h4>Галерея</h4>
            
            <div className={ "event__gallery" }>

            <Fancybox>

              {width > 767
                ?
                props.gallery.map((img, index) => {
                  return (
                  	<a key={index} data-fancybox="gallery" href={ img } style={{ display: index > 7 ? "none": "inline-block" }}>
                      <img key={ index } src={ img } alt={ `img-${ index }` } />
                      { props.gallery.length > 8 && index == 7
                        ?
                        <div className="galleryPlaceholder">Еще {props.gallery.length-8} {declOfNum(props.gallery.length-8, ["фотография", "фотографии", "фотографий"])}</div>
                        :
                        <></>
                      }
                    </a>
                  )
                })
                :
                <Splide>
                  { props.gallery.map((img, index) => {
                    return (
                      <React.Fragment key={index}>
                      { index > 7
                        ?
                        <a key={index} data-fancybox="gallery" href={ img } style={{display: "none"}}>
                          <img key={ index } src={ img } alt={ `img-${ index }` } />
                        </a>
                        :
                        <SplideSlide key={index}>
                          <a data-fancybox="gallery" href={ img }>
                            <img key={ index } src={ img } alt={ `img-${ index }` } />
                            { props.gallery.length > 8 && index == 7
                              ?
                              <div className="galleryPlaceholder">Еще {props.gallery.length-8} {declOfNum(props.gallery.length-8, ["фотография", "фотографии", "фотографий"])}</div>
                              :
                              <></>
                            }
                          </a>
                        </SplideSlide>
                      }
                      </React.Fragment>
                    )})}
                </Splide>

              }
              </Fancybox>
            </div>
			
          </div>
          :
          <></>
        }
        { props.persons && props.persons.length > 0
          ?
          <div className={"event__members"}>
            <h4>Участники</h4>
            <div className={"members_list"}>
              { props.persons.map((person, index) => {
                return (
                  <div key={index} className={"members_member"}>
                    <img src={ person.img } alt={"memberPhoto"} />
                    <div className={"member_info"}>
                      <h3>{ person.name }</h3>
                      <p>{ person.descr }</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          :
          <></>
        }
      </div>
    </div>
  );
};

export default Details;
