import React from "react";

const MiniCardsComponent = ({children}) => {
  return (
    <div className={'mini-cards'}>
      {children}
    </div>
  );
};

export default MiniCardsComponent;
