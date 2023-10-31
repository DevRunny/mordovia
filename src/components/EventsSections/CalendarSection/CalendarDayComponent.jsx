import React from "react";

const CalendarDayComponent = ({day, handleChangeRange, firstDay, secondDay, rangeBetween}) => {
  const activeClass = () => {
    const isReverse = firstDay > secondDay;
    if (isReverse) {
      return `${firstDay === day.title && rangeBetween?.length > 0 ?
        "day_range_second" : secondDay === day.title && rangeBetween?.length > 0  ?
          "day_range_first" : ''}`
    }
    return `${firstDay === day.title && rangeBetween?.length > 0 ? 
        "day_range_first" : secondDay === day.title && rangeBetween?.length > 0  ? 
        "day_range_second" : ''}`
  }
  return (
    <div
      onClick={() => { if (!day.disabled) handleChangeRange(day.title)}}
      key={day.id}
      className={
        `calendar-days__day
        ${day.disabled ? "day_disabled" : ""}
        ${rangeBetween?.includes(day.title) ? 'day_range' : ''}`
      }
    >
      <div className={activeClass()} />
      <div className={`day_initial ${firstDay === day.title || secondDay === day.title ? "day_active" : ""} `}>
        <span className={ "day" }>{day.title}</span>
        <span className={ `day_of_week ${day.isWeekEnd ? "weekend" : ""}` }>{day.weekDay}</span>
      </div>
    </div>
  );
};

export default CalendarDayComponent;
