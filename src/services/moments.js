import { request } from "../API/request";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";

export const getMoments = () => {
  return request.get(MORDOVIA_ENDPOINTS.moments);
}