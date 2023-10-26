import React from "react";
import CalendarCardComponent from "./CalendarCardComponent";
import { days } from "./days";
import prev from "../../../images/Arrow-prev.svg";
import next from "../../../images/Arrow-next.svg";

const CalendarSection = () => {
  return (
    <section className={"calendar-section"}>
      <div className={'calendar-months'}>
        <div className={"calendar-months__month month_active"}>Октябрь</div>
        <div className={"calendar-months__month"}>Ноябрь</div>
        <div className={"calendar-months__month"}>Декабрь</div>
        <div className={"calendar-months__month"}>Январь</div>
        <div className={"calendar-months__month"}>Февраль</div>
        <div className={"calendar-months__month"}>Март</div>
        <div className={"calendar-months__month"}>Апрель</div>
      </div>
      <div className={"calendar-days-wrapper"}>
        {/*<div className={"calendar-days"}>*/}
        {/*  <button><img src={prev} alt={"prev"} /></button>*/}
        {/*  {days.map((day)=> {*/}
        {/*    return (*/}
        {/*      <div id={day.id} className={`calendar-days__day ${day.classRange} ${day.classActive}`}>*/}
        {/*        <span className={"day"}>{day.day}</span>*/}
        {/*        <span className={`day_of_week ${day.class}`}>{day.dayOfWeek}</span>*/}
        {/*      </div>*/}
        {/*    )*/}
        {/*  })}*/}
        {/*  <button><img src={next} alt={"next"} /></button>*/}
        {/*</div>*/}
        <div className={"calendar-filters"}>
          <div className={"calendar-filters__filter"}>
            <span>Завтра</span>
            <span className={"filter_count"}>12</span>
          </div>
          <div className={"calendar-filters__filter filter_active"}>
            <span>Выходные </span>
            <span className={"filter_count"}>11</span>
          </div>
          <div className={"calendar-filters__filter"}>
            <span>Категория </span>
            <span className={"filter_count"}>4</span>
          </div>
          <div className={"calendar-filters__filter"}>
            <span>Категория </span>
            <span className={"filter_count"}>9</span>
          </div>
        </div>
      </div>
    <div className={'calendar-cards'}>
      <CalendarCardComponent />
      <CalendarCardComponent />
      <CalendarCardComponent />
      <CalendarCardComponent />
      <CalendarCardComponent />
      <CalendarCardComponent />
      <CalendarCardComponent />
      <CalendarCardComponent />
    </div>
      <button className={'calendar-section__show-more'}>Показать еще</button>
    </section>
  );
}

export default CalendarSection;