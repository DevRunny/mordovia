import { useQuery } from "react-query";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";
import { getNewsItem } from "../services/newsItem";

export const useNewsItem = (queryParam, enabled = false) => {
  const { data, ...rest } = useQuery({
    queryKey: MORDOVIA_ENDPOINTS.newsItem,
    queryFn: () => getNewsItem(`${queryParam}`),
    refetchOnWindowFocus: true,
    enabled,
  })

  return {
    newsItem: data,
    ...rest
  }
}