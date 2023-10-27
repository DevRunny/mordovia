import { request } from "../API/request";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";

export const getZones = () => {
  return request.get(MORDOVIA_ENDPOINTS.zones);
}