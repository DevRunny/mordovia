import React from "react";
import closeFilter from "../../../images/Close-filter.svg";

const CalendarFilterComponent = ({id, title, cnt, topicId, disableFilter, handleChangeFilterFunc}) => {
  return (
      <div key={ id }
           onClick={() => {handleChangeFilterFunc(id)}}
           className={`calendar-filters__filter ${topicId === id ? "filter_active" : ""}`}
           style={id===2 ? {display: "none"} : {} }
           >
        <span>{ title }</span>
        { id !== 1 && id !== 2
        ?
        <span className={"filter_count"}>{ cnt }</span>
        :
        <></>
        }
        {topicId === id
          ?
          <button onClick={(e) => {
            e.stopPropagation();
            disableFilter();
          }}>
            <img className={"filter_closeBtn"} src={closeFilter} alt={"X"} />
          </button>
          :
          <></>
        }
      </div>
  );
};

export default CalendarFilterComponent;
