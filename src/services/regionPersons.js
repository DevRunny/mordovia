import { request } from "../API/request";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";

export const getRegionPersons = () => {
  return request.get(MORDOVIA_ENDPOINTS.regionPersons);
}