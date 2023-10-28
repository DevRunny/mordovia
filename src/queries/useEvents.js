import { useInfiniteQuery } from "react-query";
import { getEvents } from "../services/events";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";

export const useEvents = ({queryParams}) => {
  const { data, isFetched, ...rest } = useInfiniteQuery({
    queryKey: [MORDOVIA_ENDPOINTS.events],
    queryFn: ({pageParam = 1}) => getEvents(`${queryParams}&page=${pageParam}`),
    getNextPageParam: ((lastPage) => {
      if (lastPage.isFinished) return undefined;
      return lastPage.page + 1;
    }),
    refetchOnWindowFocus: true,
    enabled: true,
  })

  return {
    data,
    isFetchedEvents: isFetched,
    ...rest
  }
}