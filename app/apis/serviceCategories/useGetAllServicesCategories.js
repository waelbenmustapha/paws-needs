import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetch = () => {
  return axios.get(`http://192.168.1.46:3000/servicesCategory/get`);
};
export const useGetAllServicesCategories = () => {
  return useQuery({
    queryKey: ["fetch-all-services-categories"],
    queryFn: () => fetch(),
    cacheTime: 60000*60*12,
  });
};
