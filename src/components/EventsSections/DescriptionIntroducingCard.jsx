import React from "react";

const DescriptionIntroducingCard = ({children}) => {
  return (
    <>
      <div className={ "introducing-cards__description" }>
        {children}
      </div>
    </>
  );
};

export default DescriptionIntroducingCard;
