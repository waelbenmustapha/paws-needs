
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const deleteAddress = (data) => {
  return axios.delete(
    `http://localhost:3000/address/delete/${data}`,
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYzODNiZmQyZWJlMGQyNTYyODBiMDJiOSIsImZ1bGxuYW1lIjoic2FiZXIiLCJlbWFpbCI6InNhYmVyQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiJ9LCJpYXQiOjE2Njk5MjMwNTEsImV4cCI6MTY3NzEyMzA1MX0.5qubtCB0BcVsArxQjsYTXjRxFdHUyvAyYKwmWv3Zbi0`,
      },
    }
  );
};
export const useDeleteAddress = (data) => {
  return useMutation(deleteAddress);
};

