import { useEffect } from "react";

export const useScrollToId = () => {
  const { hash } = window.location;

  const scrollToId = () => {
    switch (hash) {
      case "#events":
        setTimeout(() => {
          const element = document.getElementById('events');
          element.style.scrollMargin = "320px";
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 1000)
        break;

      case "#calendar":
        setTimeout(() => {
          const element = document.getElementById('calendar');
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

        case "#news":
        setTimeout(() => {
          const element = document.getElementById('news');
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
