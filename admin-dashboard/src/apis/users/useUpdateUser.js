import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const updateUser = (data) => {
  return axios.put(
    `http://localhost:3000/users/update-user/${data._id}`,
    data,
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYzODNiZmQyZWJlMGQyNTYyODBiMDJiOSIsImZ1bGxuYW1lIjoic2FiZXIiLCJlbWFpbCI6InNhYmVyQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiJ9LCJpYXQiOjE2Njk2NDYwNDksImV4cCI6MTY2OTczMjQ0OX0.CSYm22FRizZ_IrlyaRhRTy_IC94rdn-Rn-eK35Czo6E`,
      },
    }
  );
};
export const useUpdateUser = (data) => {
  return useMutation(updateUser);
};
