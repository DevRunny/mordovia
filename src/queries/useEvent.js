import { useQuery } from "react-query";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";
import { getEvent } from "../services/event";

export const useEvent = (queryParam, enabled = false) => {
  const { data, ...rest } = useQuery({
    queryKey: MORDOVIA_ENDPOINTS.event,
    queryFn: () => getEvent(`${queryParam}`),
    refetchOnWindowFocus: true,
    enabled
  })

  return {
    event: data,
    isFetchedEvent: rest.isFetched,
    ...rest
  }
}