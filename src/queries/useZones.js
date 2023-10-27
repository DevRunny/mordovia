import { useQuery } from "react-query";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";
import { getZones } from "../services/zones";

export const useZones = () => {
  const { data, ...rest } = useQuery({
    queryKey: MORDOVIA_ENDPOINTS.zones,
    queryFn: getZones,
    refetchOnWindowFocus: true,
    enabled: true
  })

  return {
    zones: data,
    ...rest
  }
}