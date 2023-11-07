import { request } from "../API/request";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";

export const getNewsItem = (queryParam) => {
  return request.get(`${MORDOVIA_ENDPOINTS.newsItem}?alias=${queryParam}`);
}