import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const addPet = (data) => {
  return axios.post(`http://localhost:3000/pets/create`, data);
};
export const useCreatePet = (data) => {
  return useMutation(addPet)
};
