import { request } from "../API/request";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";

export const getEvents = (queryParams) => {
  return request.get(`${MORDOVIA_ENDPOINTS.events}?${queryParams}`)
}