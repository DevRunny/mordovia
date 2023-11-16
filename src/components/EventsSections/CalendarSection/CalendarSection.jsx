import React, { useCallback, useEffect, useState } from "react";
import MiniCardComponent from "../../CardsComponens/MiniCardComponent";
import prev from "../../../images/Arrow-prev.svg";
import next from "../../../images/Arrow-next.svg";
import { useFilters } from "../../../queries/useFilters";
import { useEvents } from "../../../queries/useEvents";
import CalendarDayComponent from "./CalendarDayComponent";
import { Link } from "react-router-dom";
import CalendarFilterComponent from "./CalendarFilterComponent";
import MiniCardsComponent from "../../CardsComponens/MiniCardsComponent";

const CalendarSection = ({id}) => {
  const [activeMonth, setActiveMonth] = useState('');
  const [activeDate, setActiveDate] = useState()
  const [topicId, setTopicId] = useState();
  const [queryParams, setQueryParams] = useState();
  const [allEvents, setAllEvents] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const [allMonths, setAllMonths] = useState([]);
  const [monthId, setMonthId] = useState();
  const [rangeBetween, setRangeBetween] = useState();

  const [firstDay, setFirstDay] = useState(null);
  const [secondDay, setSecondDay] = useState(null);

  const { filters, isFetched } = useFilters();
  const { isFetchedEvents, fetchNextPage, data, refetch} = useEvents({queryParams});

  const countingRangeBetween = () => {
    const allDays = filters ? filters.months.find((month) => month.id === monthId)?.days.map((day) => day.title) : [];
    if (allDays && allDays.length > 0) {
      const indexFirstDay = allDays.indexOf(firstDay);
      const indexSecondDay = allDays.indexOf(secondDay);
      let range = [];

      if (activeDate && !secondDay) {
        setRangeBetween([]);
        return;
      }

      if (indexFirstDay < indexSecondDay) {
        range = allDays.slice(indexFirstDay + 1, indexSecondDay)
      }
      if (indexFirstDay > indexSecondDay) {
        range = allDays.slice(indexSecondDay + 1, indexFirstDay)
      }

      setRangeBetween(range);
    }
  }

  const formatDate = (needRangeDate) => {
    const formatedDate = {};
    if (filters) {
      const month = filters.months.find((month) => month.title === activeMonth)
      if (month) {
        const firstDate = month.days.find((day) => day.title === firstDay).date;
        const arrayFirstDate = firstDate.split('.').reverse().join('-');
        formatedDate.arrayFirstDate = arrayFirstDate;
        if (needRangeDate && secondDay) {
          const secondDate = month.days.find((day) => day.title === secondDay).date;
          const arraySecondDate = secondDate.split('.').reverse().join('-');
          if (new Date(arraySecondDate) < new Date(arrayFirstDate)) {
            formatedDate.arrayFirstDate = arraySecondDate;
            formatedDate.arraySecondDate = arrayFirstDate;
          } else {
            formatedDate.arraySecondDate = arraySecondDate;
          }
        }
      }
    }

    return formatedDate;
  }

  const handleChangeRange = useCallback((day) => {
      setActiveDate(null);
      if (firstDay === day) {
        setFirstDay(null);
        setRangeBetween([]);
        return;
      }
      if (secondDay === day) {
        setSecondDay(null);
        setRangeBetween([]);
        return;
      }
      if (!firstDay) {
        setFirstDay(day);
        return;
      }
      if (!secondDay) {
        setSecondDay(day);
        return;
      }
      setFirstDay(day);
      setSecondDay(null);
      setRangeBetween([]);
  }, [firstDay, secondDay])

  const handleChangeMonth = (month) => {
    setActiveMonth(month);
    setActiveDate(null);
  }

  const handleChangeFilter = (filterId) => {
    setTopicId(filterId);
    if (firstDay && secondDay) {
      const range = formatDate(true)
      setQueryParams(`${monthId ? 'monthId=' + monthId : ''}${filterId ? '&topicId=' + filterId : ''}&date=${range.arrayFirstDate}&dateEnd=${range.arraySecondDate}`);
      return;
    }
    if (firstDay) {
      const date = formatDate(false);
      setQueryParams(`${monthId ? 'monthId=' + monthId : ''}${filterId ? '&topicId=' + filterId : ''}&date=${date.arrayFirstDate}`);
      return;
    }
    setQueryParams(`${monthId ? 'monthId=' + monthId : ''}${filterId ? '&topicId=' + filterId : ''}`);
  }

  const handleChangeFilterDate = (filterDate) => {
    const allDays = filters ? filters.months.find((month) => month.id === monthId)?.days : [];
    const actualMonthTomorrow = filters ? filters.months.find((month) => month.id === filters.tomorrow.monthId)?.title : [];
    const tomorrowDay = allDays.find((day) => day.id === filters.tomorrow.dayId)?.title;
    const weekendStart = allDays.find(day => day.id === filters.weekend.start.dayId)?.title;
    const weekendEnd = allDays.find(day => day.id === filters.weekend.end.dayId)?.title;

    setActiveMonth(actualMonthTomorrow);

    if (filterDate === 1) {
  	  setActiveDate(filterDate);
      setFirstDay(tomorrowDay);
      setSecondDay(null);
    }
    if (filterDate === 2) {
      setActiveDate(filterDate);
      setFirstDay(weekendStart);
      setSecondDay(weekendEnd);
    }
  }

  const handleResetFilterDate = () => {
    if (activeDate === 1) {
      setFirstDay(null);
    }
    if (activeDate === 2) {
      setFirstDay(null);
      setSecondDay(null);
    }
    setActiveDate(null);
  }

  const handleResetTopic = () => {
    setTopicId(null)
  }

  const handleChangePrevMonth = () => {
    setActiveDate(null);
    const activeMonthIndex = allMonths.indexOf(activeMonth);
    const prevMonth = allMonths[activeMonthIndex - 1];
    const lastMonth = allMonths[allMonths.length - 1];
    if (prevMonth) {
      setActiveMonth(prevMonth)
    } else {
      setActiveMonth(lastMonth);
    }
  }

  const handleChangeNextMonth = () => {
    setActiveDate(null);
    const activeMonthIndex = allMonths.indexOf(activeMonth);
    const nextMonth = allMonths[activeMonthIndex + 1];
    const firstMonth = allMonths[0];
    if (nextMonth) {
      setActiveMonth(nextMonth)
    } else {
      if (firstMonth) {
        setActiveMonth(firstMonth);
      }
    }
  }

  useEffect(() => {
    if (!queryParams) return;
    setIsLastPage(false);
    refetch()
  }, [queryParams])

  useEffect(() => {
    if (filters) {
      const allMonths = filters.months.map((month) => month.title);
      const activeMonth = filters.months.find((month) => month.active);
      setAllMonths(allMonths);
      setActiveMonth(activeMonth.title);
    }
  }, [filters])

  useEffect(() => {
    if (!filters) return;
    const monthId = filters ? filters.months.find((month) => month.title === activeMonth)?.id : [];
    setMonthId(monthId);
    const allDays = filters ? filters.months.find((month) => month.id === monthId)?.days : [];
    const tomorrowDay = allDays ? allDays.find((day) => day.id === filters.tomorrow.dayId)?.title : [];
    const weekendStart = allDays ? allDays.find(day => day.id === filters.weekend.start.dayId)?.title : [];
    const weekendEnd = allDays ? allDays.find(day => day.id === filters.weekend.end.dayId)?.title : [];
    if (activeDate === 1) {
      setFirstDay(tomorrowDay);
      return;
    }

    if (activeDate === 2) {
      setFirstDay(weekendStart);
      setSecondDay(weekendEnd);
      return;
    }

    setFirstDay(null);
    setSecondDay(null);
  }, [activeMonth])

  useEffect(() => {
    if (!filters) return;
    const monthId = filters ? filters.months.find((month) => month.title === activeMonth)?.id : [];
    setMonthId(monthId);
    setQueryParams(`${monthId ? 'monthId=' + monthId : ''}${topicId ? '&topicId=' + topicId : ''}`);
  }, [activeMonth])


  useEffect(() => {
    setQueryParams(`${monthId ? 'monthId=' + monthId : ''}${topicId ? '&topicId=' + topicId : ''}`);
  }, [topicId])

  useEffect(() => {
    if (data) {
      const isLastPage = data.pages[data.pages.length - 1].isFinished;
      if (isLastPage) {
        setIsLastPage(true);
      }

      const allEvents = data.pages.map(
        (page) => page.events
      ).reduce((prev, current) =>{
        return [...prev, ...current];
      }, []);
      setAllEvents(allEvents);
    }
  }, [data, topicId, firstDay, secondDay])

  useEffect(() => {
    if (firstDay && secondDay) countingRangeBetween();
    if (!firstDay && !secondDay) countingRangeBetween();
    if (firstDay && !secondDay && activeDate) countingRangeBetween();
  }, [firstDay, secondDay, activeMonth])

  useEffect(() => {
    if (firstDay && secondDay) {
      const range = formatDate(true)
      setQueryParams(`${monthId ? 'monthId=' + monthId : ''}${topicId ? '&topicId=' + topicId : ''}&date=${range.arrayFirstDate}&dateEnd=${range.arraySecondDate}`);
      return;
    }
    if (firstDay) {
      const date = formatDate(false);
      setQueryParams(`${monthId ? 'monthId=' + monthId : ''}${topicId ? '&topicId=' + topicId : ''}&date=${date.arrayFirstDate}`);
    }
    if (!firstDay && !secondDay) {
      setQueryParams(`${monthId ? 'monthId=' + monthId : ''}${topicId ? '&topicId=' + topicId : ''}`);
    }
  }, [firstDay, secondDay])

  return (
    <section id={id} className={"calendar-section"}>
      <div className={'calendar-wrapper'}>
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
          <div className="calendar-days-wrapper">
            <button onClick={() => {handleChangePrevMonth()}}><img src={prev} alt={"prev"} /></button>
            {filters && filters.months && isFetched
              ?
              filters.months.find((month) => month.id === monthId)?.days.map((day) => {
                return (
                  <CalendarDayComponent
                    key={day.id}
                    day={day}
                    handleChangeRange={handleChangeRange}
                    firstDay={firstDay}
                    secondDay={secondDay}
                    rangeBetween={rangeBetween}
                  />
                )
              })
              :
              <></>
            }
            <button
            onClick={() => {handleChangeNextMonth()}}
            ><img src={next} alt={"next"} /></button>
          </div>
      </div>

      <div className={"calendar-filters"}>
        <CalendarFilterComponent
          id={1}
          title={"Завтра"}
          disableFilter={handleResetFilterDate}
          handleChangeFilterFunc={handleChangeFilterDate}
          topicId={activeDate}
          cnt={filters && isFetched ? filters.tomorrow.cnt : 0}
        />
        <CalendarFilterComponent
          id={2}
          title={"Выходные"}
          disableFilter={handleResetFilterDate}
          handleChangeFilterFunc={handleChangeFilterDate}
          topicId={activeDate}
          cnt={filters && isFetched ? filters.weekend.cnt : 0}
        />
        {filters && isFetched
          ?
          filters.topics.map((topic) => {
            return (
              <CalendarFilterComponent
                key={topic.id}
                id={topic.id}
                handleChangeFilterFunc={handleChangeFilter}
                title={topic.title}
                cnt={topic.cnt}
                disableFilter={handleResetTopic}
                topicId={topicId}
              />
            )
          })
          :
          <></>
        }
      </div>

      </div>
      </div>
      <MiniCardsComponent>
      {allEvents && isFetchedEvents
      	?
        allEvents.map((event) => {
          return (
            event.hasDetailCard
              ?
              <Link key={event.id} to={ event.alias ? `event/${event.alias}` : "" } >
                <MiniCardComponent key={event.id} props={ event } />
              </Link>
              :
              <MiniCardComponent key={event.id} props={ event } />
          )
        })
        :
        <></>
      }

    </MiniCardsComponent>
        {!isLastPage && allEvents.length > 0 ?
          <button
            onClick={ () => fetchNextPage() }
            className={'calendar-section__show-more'}
          >
            Показать еще
          </button> :
          <></>
        }
    </section>
  );
}

export default CalendarSection;