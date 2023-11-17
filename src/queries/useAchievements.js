import { useQuery } from "react-query";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";
import { getAchievements } from "../services/achievements";

export const useAchievements = (queryParam, enabled = false) => {
  const { data, ...rest } = useQuery({
    queryKey: [MORDOVIA_ENDPOINTS.achievements],
    queryFn: () => getAchievements(`${queryParam}`),
    refetchOnWindowFocus: true,
    enabled
  })

  return {
    achievements: data,
    ...rest
  }
}