import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const addUser = (data) => {
  return axios.post(`http://localhost:3000/auth/signup`, data);
};
export const useCreateUser = (data) => {
  return useMutation(addUser)
};
