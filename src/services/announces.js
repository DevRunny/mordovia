import { request } from "../API/request";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";

export const getAnnounces = () => {
  return request.get(MORDOVIA_ENDPOINTS.announces);
}