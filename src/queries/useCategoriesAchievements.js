import { useQuery } from "react-query";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";
import { getCategoriesAchievements } from "../services/categoriesAchievements";

export const useCategoriesAchievements = () => {
  const { data, ...rest } = useQuery({
    queryKey: MORDOVIA_ENDPOINTS.categoriesAchievements,
    queryFn: getCategoriesAchievements,
    refetchOnWindowFocus: true,
    enabled: true,
  })

  return {
    categoriesAchievements: data,
    ...rest
  }
}