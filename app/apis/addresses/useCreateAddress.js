import { useMutation } from "@tanstack/react-query";
import { execRequest } from "../../utils/execRequests";

export const add = (data) => {
  return execRequest({
    url: "/address/create",
    method: "POST",
    data,
  });
};

export const useCreateAddress = () => {
  return useMutation(add);
};
