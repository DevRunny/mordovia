import React from "react";
import {Route, Routes} from "react-router-dom"
import Home from "../components/Home/Home";

const Router = () => {
  return (
    <>
      <Routes >
        <Route path={"/"} element={<Home/>}>
          <Route path={"alias"} >
            <div>mem</div>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default Router;
