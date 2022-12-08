import { useQuery } from "@tanstack/react-query";
import { execRequest } from "../../utils/execRequests";


export const fetch = ( userId ) => {
    return execRequest({
      url: '/address/user-addresses/'+userId,
      method: 'GET',
    })
  };
export const useGetUserAdresses = (userId) => {
  return useQuery({
    queryKey: ["fetch-user-addresses"],
    queryFn: () => fetch(userId),
    cacheTime: 60000*60*12,
  });
};
