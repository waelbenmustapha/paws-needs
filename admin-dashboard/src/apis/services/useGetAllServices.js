import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchServices = (page, perPage) => {
  return axios.get(
    `http://localhost:3000/services/get?page=${page}&perpage=${perPage}`
  );
};
export const useGetAllServices = (page, perPage) => {
  return useQuery({
    queryKey: ["fetch-services", page, perPage],
    queryFn: () => fetchServices(page, perPage),
    cacheTime: 60000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,

  });
};
