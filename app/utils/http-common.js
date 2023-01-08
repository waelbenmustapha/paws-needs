import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import {
  getDataObj,
  getDataVal,
  storeDataObj,
  storeDataVal,
} from "../utils/AsyncStorageFunctions";

export default axios.create({
  baseURL: "http://192.168.1.45:3000",
  headers: {
    "Content-type": "application/json",
  },
});

// const instance = axios.create({
//   baseURL: "http://192.168.1.13:3000",
//   headers: {
//     "Content-type": "application/json",
//   },
// });

// async function getUser() {
//   return await getDataObj("user");
// }

// const user = getUser();

// instance.interceptors.request.use(
//   function (config) {
//     if (user && user.token) {
//       config.headers.Authorization = `Bearer ${user.token}`;
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// instance.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );

// export default instance;
