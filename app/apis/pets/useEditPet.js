import { useMutation } from "@tanstack/react-query";
import { execRequest } from "../../utils/execRequests";

export const edit = (data) => {
  return execRequest({
    url: "/pets/update/"+data._id,
    method: "PUT",
    data,
  });
};

export const useEditPet = () => {
  return useMutation(edit);
};
