import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const editServiceCategory = (data) => {
  return axios.put(`http://localhost:3000/servicesCategory/update/${data._id}`, data);
};
export const useUpdateServiceCategory = (data) => {
  return useMutation(editServiceCategory)
};
