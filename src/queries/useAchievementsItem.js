import { useQuery } from "react-query";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";
import { getAchievementsItem } from "../services/achievementsItem";

export const useAchievementsItem = (queryParam, enabled = false) => {
  const { data, isFetched, ...rest } = useQuery({
    queryKey: [MORDOVIA_ENDPOINTS.achievementsItem],
    queryFn: () => getAchievementsItem(`${queryParam}`),
    refetchOnWindowFocus: true,
    enabled
  })

  return {
    achievementsItem: data,
    isFetchedAchievementsItem: isFetched,
    ...rest
  }
}
