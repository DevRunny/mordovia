import { useQuery } from "react-query";
import { getEvents } from "../services/events";

export const useEvents = () => {
  const { data, isFetched, ...rest } = useQuery({
    queryKey: "",
    queryFn: getEvents,
    refetchOnWindowFocus: true,
    enabled: true,
  })

  return {
    data,
    events: data?.events,
    isFetchedEvents: isFetched,
    ...rest
  }
}