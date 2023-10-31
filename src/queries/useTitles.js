import { useQuery } from "react-query";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";
import { getContent } from "../services/titles";

export const useTitles = () => {
  const { data, ...rest } = useQuery({
    queryKey: MORDOVIA_ENDPOINTS.titles,
    queryFn: getContent,
    refetchOnWindowFocus: true,
    enabled: true
  })

  return {
    titles: data,
    ...rest
  }
}