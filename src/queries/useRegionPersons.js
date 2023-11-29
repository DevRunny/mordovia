import { useQuery } from "react-query";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";
import { getRegionPersons } from "../services/regionPersons";

export const useRegionPersons = () => {
  const { data, isFetched, ...rest } = useQuery({
    queryKey: MORDOVIA_ENDPOINTS.regionPersons,
    queryFn: getRegionPersons,
    refetchOnWindowFocus: true,
    enabled: true
  })

  return {
    persons: data,
    isFetched: isFetched,
    ...rest
  }
}
