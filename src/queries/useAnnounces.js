import { useQuery } from "react-query";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";
import { getAnnounces } from "../services/announces";

export const useAnnounces = (
  {
    // refetchOnWindowFocus = true,
    // enabled = true,
  }
) => {
  const { data, ...rest } = useQuery({
    queryKey: MORDOVIA_ENDPOINTS.announces,
    queryFn: getAnnounces,
    // refetchOnWindowFocus,
    // enabled
  })

  return {
    announces: data?.data,
    ...rest
  }
}