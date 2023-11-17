import { request } from "../API/request";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";

export const getAchievements = (queryParams) => {
  return request.get(`${MORDOVIA_ENDPOINTS.achievements}?alias=${queryParams}`);
}