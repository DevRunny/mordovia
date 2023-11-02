import React, { useEffect, useState } from "react";
import cursor from "../../images/Cursor.svg";
import { Link } from "react-scroll";
import { useWindowSize } from "usehooks-ts";
import { useTitles } from "../../queries/useTitles";

const MainSection = () => {
  const { width } = useWindowSize()
  const { titles, isFetched } = useTitles()

  const [isVideoScrolled, setVideoScrolled] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      if (e.target.documentElement.scrollTop > document.body.scrollHeight / 4)
	    setVideoScrolled(1);
	  else
	    setVideoScrolled(0);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  let main, cursorPointer;

  function handleMouseMove(event) {

    let doc = document.documentElement;
    let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
  	let my = event.clientY + top;

	let mainHeight = main.offsetHeight;

	if (my >= main.offsetTop + mainHeight/2 && my <= main.offsetTop + mainHeight) {
		if (cursorPointer.style.display === 'none') {
			cursorPointer.style.display = 'block';

			document.body.classList.add("cursor-none");
		}

		cursorPointer.style.left = (event.clientX)+'px';
		cursorPointer.style.top = (my - main.offsetTop)+'px';
	} else {
		if (cursorPointer.style.display === 'block') {
			cursorPointer.style.display = 'none';

			document.body.classList.remove("cursor-none");
		}
	}
  }

  setTimeout(function(){
  	main = document.querySelector("main");
  	cursorPointer = document.querySelector(".cursorPointer");

  	document.addEventListener("mousemove", handleMouseMove);
  }, 100);

  return (
    <main>
      <video
        className={`bg-video ${isVideoScrolled ? "video-scrolled" : ""}`}
        autoPlay muted loop playsInline
      >
        <source src={"https://mordovia-russia.ru/video/mordoviya2_mob.mp4"} type="video/mp4" media="(max-width:1024px)" />
        <source src={"https://mordovia-russia.ru/video/mordoviya2.mp4"} type="video/mp4" />
      </video>
      <div className={"about"}>
        <span>4 ноября 2023</span>
        {isFetched ? <span dangerouslySetInnerHTML={{__html: titles.screen1.text1}} /> : <></>}
        <span>12 апреля 2024</span>
      </div>
      <div className={"present"}>
        {isFetched ? <span dangerouslySetInnerHTML={{__html: titles.screen1.text2}} /> : <></>}
      </div>
      <div className={"main-content"}>
        <div className={"main-content__title"}>
          <h1>Мордовия</h1>
          <h4>Экспозиция республики</h4>
        </div>
      </div>

	  <Link
	    className="cursorPointer"
        style={{cursor: "pointer", display: "none", transform: "translate(-50%, -50%)"}}
        activeClass="active"
        to="video-section"
        spy={true}
        smooth={true}
        offset={width < 767 ? -50 :-80}
        duration={500}
      >
        <img src={cursor} alt={"↓"} />
      </Link>

      <div id="video-section"></div>
    </main>
  );
};

export default MainSection;
