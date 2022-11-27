import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchServices = (page, perPage) => {
  return axios.get(
    `http://localhost:3000/users/get-all-users?page=${page}&perpage=${perPage}`
  );
};
export const useGetAllUsers = (page, perPage) => {
  return useQuery({
    queryKey: ["fetch-users", page, perPage],
    queryFn: () => fetchServices(page, perPage),
    cacheTime: 60000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,

  });
};
