import { useQuery } from "react-query";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";
import { getMoments } from "../services/moments";

export const useMoments = () => {
  const { data, ...rest } = useQuery({
    queryKey: MORDOVIA_ENDPOINTS.moments,
    queryFn: getMoments,
    refetchOnWindowFocus: true,
    enabled: true,
  })

  return {
    moments: data,
    ...rest
  }
}