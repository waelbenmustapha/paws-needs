import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const editPet = (data) => {
  return axios.put(`http://localhost:3000/pets/update/${data._id}`, data);
};
export const useUpdatePet = (data) => {
  return useMutation(editPet)
};
