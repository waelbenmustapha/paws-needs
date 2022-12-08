import { useMutation } from "@tanstack/react-query";
import { execRequest } from "../../utils/execRequests";

export const add = (data) => {
  return execRequest({
    url: "/pets/create",
    method: "POST",
    data,
  });
};

export const useCreatePet = () => {
  return useMutation(add);
};
