import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const addServiceCategory = (data) => {
  return axios.post(`http://localhost:3000/servicesCategory/create`, data);
};
export const useCreateServiceCategory = (data) => {
  return useMutation(addServiceCategory)
};
