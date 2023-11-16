import { request } from "../API/request";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";

export const getCategoriesAchievements = () => {
  return request.get(MORDOVIA_ENDPOINTS.categoriesAchievements);
}