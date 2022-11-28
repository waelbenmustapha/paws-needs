
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const deleteservicecategory = (data) => {
  return axios.delete(
    `http://localhost:3000/servicesCategory/delete/${data}`,
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYzODNiZmQyZWJlMGQyNTYyODBiMDJiOSIsImZ1bGxuYW1lIjoic2FiZXIiLCJlbWFpbCI6InNhYmVyQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiJ9LCJpYXQiOjE2Njk2NDYwNDksImV4cCI6MTY2OTczMjQ0OX0.CSYm22FRizZ_IrlyaRhRTy_IC94rdn-Rn-eK35Czo6E`,
      },
    }
  );
};
export const useDeleteServiceCategory = (data) => {
  return useMutation(deleteservicecategory);
};

