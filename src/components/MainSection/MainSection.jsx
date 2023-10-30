import React from "react";
import cursor from "../../images/Cursor.svg";
import { Link } from "react-scroll";
import { useWindowSize } from "usehooks-ts";

const MainSection = () => {
  const { width } = useWindowSize()

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
        className={ "bg-video" }
        autoPlay muted loop playsInline
      >
        <source src={"https://mordovia-russia.ru/video/mordoviya2.mp4"} type="video/mp4" />
      </video>
      <div className={"about"}>
        <span>4 ноября 2023</span>
        <span>Международная <br className={"about-mobile"} /> выставка – форум Россия</span>
        <span>12 апреля 2024</span>
      </div>
      <div className={"present"}>
        
        <span>
          Приходите и откройте для себя множество
          <br className={"present-desktop"}  />
          удивительных фактов
          <br className={"present-mobile"} />о Мордовии, ее народе
          <br className={"present-desktop"}  /> и его творческом наследии.
        </span>
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
        to="events"
        spy={true}
        smooth={true}
        offset={width < 767 ? -50 :-80}
        duration={500}
      >
        <img src={cursor} alt={"↓"} />
      </Link>

    </main>
  );
};

export default MainSection;
