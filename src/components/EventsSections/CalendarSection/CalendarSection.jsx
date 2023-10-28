import React, { useEffect, useState } from "react";
import CalendarCardComponent from "./CalendarCardComponent";
import prev from "../../../images/Arrow-prev.svg";
import next from "../../../images/Arrow-next.svg";
import { useFilters } from "../../../queries/useFilters";
import { useEvents } from "../../../queries/useEvents";

const CalendarSection = () => {
  const { filters, isFetched } = useFilters();
  const [activeMonth, setActiveMonth] = useState('');
  const [topicId, setTopicId] = useState();
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(8);
  const [queryParams, setQueryParams] = useState(`page=1`);
  const { events, isFetchedEvents, refetch } = useEvents({queryParams, page});
  const [allEvents, setAllEvents] = useState([]);
  const [isFirstLoad, setFirstLoad] = useState(false);

  const handleChangeMonth = (month) => {
    setActiveMonth(month)
  }

  const handleChangeFilter = (filterId) => {
    setTopicId(filterId)
  }

  // useEffect(() => {
  //   if (events) {
  //     setAllEvents((prev) => [...prev, events])
  //   }
  // }, [events])
  //
  // console.log(events)
  //
  // console.log(queryParams)
  //
  // useEffect(() => {
  //   refetch();
  // }, [queryParams, refetch])
  //
  // useEffect(() => {
  //   setQueryParams(`page=${page}`)
  // }, [page])


  return (
    <section className={"calendar-section"}>
      <div className={'calendar-months'}>
        {filters && isFetched
        ?
          filters.months.map((month) => {
            return(
              <div
                onClick={() => {handleChangeMonth(month.title)}}
                key={month.id}
                className={`calendar-months__month ${activeMonth === month.title ? "month_active" : ""}`}>
                  { month.title }
              </div>
            )
          })
          :
          <></>
        }
      </div>

      <div className={"calendar-days__days-and-filters"}>
        <div className="calendar-days">
          <div className="days-range"></div>
          <div className="calendar-days-wrapper">
            <button><img src={prev} alt={"prev"} /></button>
            {filters && isFetched
              ?
              filters.months[0].days.map((day) => {
                return (
                  <div key={day.id} className="calendar-days__day">
                    <span className="day">{day.title}</span>
                    <span className={ `day_of_week ${day.isWeekEnd ? "weekend" : ""}` }>{day.weekDay}</span>
                  </div>
                )
              })
              :
              <></>
            }
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
        {filters && isFetched
          ?
          filters.topics.map((topic) => {
            return (
              <div key={ topic.id }
                   onClick={() => {handleChangeFilter(topic.id)}}
                   className={`calendar-filters__filter ${topicId === topic.id ? "filter_active" : ""}`}>
                <span>{ topic.title }</span>
                <span className={"filter_count"}>{ topic.cnt }</span>
              </div>
            )
          })
          :
          <></>
        }
      </div>
      </div>
    <div className={'calendar-cards'}>
      {events && isFetchedEvents
        ?
        events.map((event) => {
          return (
            <CalendarCardComponent props={ event } />
          )
        })
        :
        <></>
      }

    </div>
      <button
        onClick={ () => { setPage((prev) => prev + 1) }}
        className={'calendar-section__show-more'}
      >
        Показать еще
      </button>
    </section>
  );
}

export default CalendarSection;