import React from "react";
import { PATHS } from "../../router";
import { Link } from "react-router-dom";

const ButtonBackToMain = () => {
  return (
    <Link to={PATHS.MAIN}>
      <button
        className={"back-to-main"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19M5 12L11 18M5 12L11 6" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        вернуться
      </button>
    </Link>
  );
};

export default ButtonBackToMain;
