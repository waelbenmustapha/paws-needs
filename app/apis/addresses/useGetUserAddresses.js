import { useQuery } from "@tanstack/react-query";
import { execRequestToken } from "../../utils/execRequestsToken";


export const fetch = ( userId ) => {
    return execRequestToken({
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
