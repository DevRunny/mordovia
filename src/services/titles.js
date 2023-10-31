import { MORDOVIA_ENDPOINTS } from "../API/endpoints";
import { request } from "../API/request";

export const getContent = () => {
  return request.get(`${MORDOVIA_ENDPOINTS.titles}`)
}