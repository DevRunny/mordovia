import * as React from "react";

export const Titles = ({h1, h2}) => {
  return (
    <div className={"titles"}>
      <h1>{ h1 }</h1>
      <h2>{ h2 }</h2>
    </div>
  );
};