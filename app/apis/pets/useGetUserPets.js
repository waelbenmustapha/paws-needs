import { useQuery } from "@tanstack/react-query";
import { execRequestToken } from "../../utils/execRequestsToken";

export const fetch = (userId) => {
  return execRequestToken({
    url: "/pets/user-pets/" + userId,
    method: "GET",
  });
};
export const useGetUserPets = (userId) => {

  return useQuery({
    queryKey: ["fetch-user-pets"],
    queryFn: () => fetch(userId),
    cacheTime: 60000 * 60 * 12,
  });
};
