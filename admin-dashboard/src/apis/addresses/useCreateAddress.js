import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const addAddress = (data) => {
  return axios.post(`http://localhost:3000/address/create`, data);
};
export const useCreateAddress = (data) => {
  return useMutation(addAddress)
};
