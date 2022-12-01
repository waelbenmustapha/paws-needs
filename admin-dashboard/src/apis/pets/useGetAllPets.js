import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetch = (page, perPage, search) => {
  return axios.get(
    `http://localhost:3000/pets/get-all?search=${search?search:""}&page=${page}&perpage=${perPage}`,
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYzODNiZmQyZWJlMGQyNTYyODBiMDJiOSIsImZ1bGxuYW1lIjoic2FiZXIiLCJlbWFpbCI6InNhYmVyQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiJ9LCJpYXQiOjE2Njk5MjMwNTEsImV4cCI6MTY3NzEyMzA1MX0.5qubtCB0BcVsArxQjsYTXjRxFdHUyvAyYKwmWv3Zbi0`,
      },
    }
  );
};
export const useGetAllPets = (page, perPage,search) => {
  return useQuery({
    queryKey: ["fetch-pets", page, perPage,search],
    queryFn: () => fetch(page, perPage,search),
    cacheTime: 60000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
};
