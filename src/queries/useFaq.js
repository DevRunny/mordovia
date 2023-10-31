import { useQuery } from "react-query";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";
import { getFaq } from "../services/faq";

export const useFaq = () => {
  const { data, ...rest } = useQuery({
    queryKey: MORDOVIA_ENDPOINTS.faq,
    queryFn: getFaq,
    refetchOnWindowFocus: true,
    enabled: true,
  })

  return {
    faq: data,
    ...rest
  }
}