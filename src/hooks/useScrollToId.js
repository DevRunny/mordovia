import { useEffect } from "react";

export const useScrollToId = () => {
  const { hash } = window.location;

  const scrollToId = () => {
    switch (hash) {
      case "#events":
        setTimeout(() => {
          const element = document.getElementById('events');
          element.style.scrollMargin = '260px';
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 1000)
        break;

      case "#afisha":
        setTimeout(() => {
          const element = document.getElementById('afisha');
          element.style.scrollMargin = "160px";
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 1000)
        break;

      case "#questions":
        setTimeout(() => {
          const element = document.getElementById('questions');
          element.style.scrollMargin = "120px";
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 1000)
        break;

      case "#achievements":
        setTimeout(() => {
          const element = document.getElementById('achievements');
          element.style.scrollMargin = "120px";
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 1000)
        break;

      case "#news":
        setTimeout(() => {
          const element = document.getElementById('news');
          element.style.scrollMargin = "120px";
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 1000)
        break;

	  case "#video":
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior : 'smooth'
          });
        }, 1000)
        break;

	  case "#favorites":
        setTimeout(() => {
          const element = document.getElementById('favorites');
          element.style.scrollMargin = "260px";
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 1000)
        break;

	  case "#interactive":
        setTimeout(() => {
          const element = document.getElementById('interactive');
          element.style.scrollMargin = "120px";
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 1000)
        break;

	  case "#achievements":
      setTimeout(() => {
        const element = document.getElementById('achievements');
        element.style.scrollMargin = "120px";
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1000)
        break;

	  case "#map":
        break;

	  case "#shop":
	    setTimeout(() => {
          const element = document.getElementById('gift-shop');
          element.style.scrollMargin = "140px";
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 1000)
        break;

      case "#contacts":
        setTimeout(() => {
          const element = document.querySelector('footer');
          element.style.scrollMargin = "120px";
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 1000)
        break;

      default: break;
    }
  }


  useEffect( () => scrollToId(), [] )
};
