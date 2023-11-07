import { request } from "../API/request";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";

export const getNews = () => {
  return request.get(MORDOVIA_ENDPOINTS.news);
}