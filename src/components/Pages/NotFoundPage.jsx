import React from "react";
import { NavBar } from "../NavBar/NavBar";
import notFound from "../../images/NotFound.svg"
import { PATHS } from "../../router";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <NavBar />
      <Link to={PATHS.MAIN}>
        <button
          className={"back-to-main"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M5 12L11 18M5 12L11 6" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          вернуться
        </button>
      </Link>
      <div className={"error-404"}>
        <img src={notFound} alt={"404"} />
        <span>Страница не найдена</span>
      </div>
      
    </>
  );
};

export default NotFoundPage;
