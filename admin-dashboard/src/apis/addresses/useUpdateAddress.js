import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const editAddress = (data) => {
  return axios.put(`http://localhost:3000/address/update/${data._id}`, data);
};
export const useUpdateAddress = (data) => {
  return useMutation(editAddress)
};
