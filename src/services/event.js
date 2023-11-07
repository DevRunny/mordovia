import { request } from "../API/request";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";

export const getEvent = (queryParam) => {
  return request.get(`${MORDOVIA_ENDPOINTS.event}?alias=${queryParam}`)
}