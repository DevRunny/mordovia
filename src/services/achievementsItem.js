import { request } from "../API/request";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";

export const getAchievementsItem = (queryParams) => {
  return request.get(`${MORDOVIA_ENDPOINTS.achievementsItem}?alias=${queryParams}`);
}