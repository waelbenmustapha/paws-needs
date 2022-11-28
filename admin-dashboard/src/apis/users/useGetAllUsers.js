import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetch = (page, perPage) => {
  return axios.get(
    `http://localhost:3000/users/get-all-users?page=${page}&perpage=${perPage}`,
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYzODNiZmQyZWJlMGQyNTYyODBiMDJiOSIsImZ1bGxuYW1lIjoic2FiZXIiLCJlbWFpbCI6InNhYmVyQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiJ9LCJpYXQiOjE2Njk2NDYwNDksImV4cCI6MTY2OTczMjQ0OX0.CSYm22FRizZ_IrlyaRhRTy_IC94rdn-Rn-eK35Czo6E`,
      },
    }
  );
};
export const useGetAllUsers = (page, perPage) => {
  return useQuery({
    queryKey: ["fetch-users", page, perPage],
    queryFn: () => fetch(page, perPage),
    cacheTime: 60000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
};
