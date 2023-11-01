import React from "react";
import closeFilter from "../../../images/Close-filter.svg";

const CalendarFilterComponent = ({id, title, cnt, topicId, setTopicIdState, handleChangeFilterFunc}) => {
  return (
      <div key={ id }
           onClick={() => {handleChangeFilterFunc(id)}}
           className={`calendar-filters__filter ${topicId === id ? "filter_active" : ""}`}>
        <span>{ title }</span>
        {cnt ? <span className={"filter_count"}>{ cnt }</span> : <></>}
        {topicId === id
          ?
          <button onClick={(e) => {
            e.stopPropagation();
            setTopicIdState(null);
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
