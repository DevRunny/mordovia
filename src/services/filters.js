import { request } from "../API/request";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";

export const getFilters = () => {
  return request.get(MORDOVIA_ENDPOINTS.filters);
}