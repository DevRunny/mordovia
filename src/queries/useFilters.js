import { useQuery } from "react-query";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";
import { getFilters } from "../services/filters";

export const useFilters = () => {
  const { data, ...rest  } = useQuery({
    queryKey: MORDOVIA_ENDPOINTS.filters,
    queryFn: getFilters,
    refetchOnWindowFocus: true,
    enabled: true,
  })

  return {
    filters: data,
    ...rest
  }
}