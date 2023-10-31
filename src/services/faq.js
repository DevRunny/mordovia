import { request } from "../API/request";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";

export const getFaq = () => {
  return request.get(`${MORDOVIA_ENDPOINTS.faq}`)
}