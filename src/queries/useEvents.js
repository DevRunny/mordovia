import { useQuery } from "react-query";
import { getEvents } from "../services/events";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";

export const useEvents = ({queryParams, page}) => {
  const { data, isFetched, ...rest } = useQuery({
    queryKey: [MORDOVIA_ENDPOINTS.events, page],
    queryFn: () => getEvents(queryParams),
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