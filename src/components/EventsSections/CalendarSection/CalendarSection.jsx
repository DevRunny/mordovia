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
      <div className={"calendar-days__days-and-filters"}>
        <div className="calendar-days">

          <div className="days-range"></div>


          <div className="calendar-days-wrapper">
            <button><img src={prev} alt={"prev"} /></button>
            <div className="calendar-days__day">
              <span className="day">1</span>
              <span className="day_of_week weekend">сб</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">2</span>
              <span className="day_of_week weekend">вс</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">3</span>
              <span className="day_of_week">пн</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">4</span>
              <span className="day_of_week">вт</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">5</span>
              <span className="day_of_week">ср</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">6</span>
              <span className="day_of_week">чт</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">7</span>
              <span className="day_of_week">пт</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">8</span>
              <span className="day_of_week weekend">сб</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">9</span>
              <span className="day_of_week weekend">вс</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">10</span>
              <span className="day_of_week">пн</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">11</span>
              <span className="day_of_week">вт</span>
            </div>
            <div className="calendar-days__day day_active">
              <span className="day">12</span>
              <span className="day_of_week">ср</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">13</span>
              <span className="day_of_week">чт</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">14</span>
              <span className="day_of_week">пт</span>
            </div>
            <div className="calendar-days__day day_active">
              <span className="day">15</span>
              <span className="day_of_week weekend">сб</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">16</span>
              <span className="day_of_week weekend">вс</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">17</span>
              <span className="day_of_week">пн</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">18</span>
              <span className="day_of_week">вт</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">19</span>
              <span className="day_of_week">ср</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">20</span>
              <span className="day_of_week">чт</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">21</span>
              <span className="day_of_week">пт</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">22</span>
              <span className="day_of_week weekend">сб</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">23</span>
              <span className="day_of_week weekend">вс</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">24</span>
              <span className="day_of_week">пн</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">25</span>
              <span className="day_of_week">вт</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">26</span>
              <span className="day_of_week">ср</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">27</span>
              <span className="day_of_week">чт</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">28</span>
              <span className="day_of_week">пт</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">29</span>
              <span className="day_of_week weekend">сб</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">30</span>
              <span className="day_of_week weekend">вс</span>
            </div>
            <div className="calendar-days__day">
              <span className="day">31</span>
              <span className="day_of_week">пн</span>
            </div>
            <button><img src={next} alt={"next"} /></button>
          </div>

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
      </div>
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