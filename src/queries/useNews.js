import { useQuery } from "react-query";
import { MORDOVIA_ENDPOINTS } from "../API/endpoints";
import { getNews } from "../services/news";

export const useNews = () => {
  const { data, ...rest } = useQuery({
    queryKey: MORDOVIA_ENDPOINTS.news,
    queryFn: getNews,
    refetchOnWindowFocus: true,
    enabled: true,
  })

  return {
    news: data,
    ...rest
  }
}