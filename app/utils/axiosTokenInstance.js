import axios from "axios";
const axiosTokenInstance = axios.create({
  baseURL: "http://192.168.1.13:3000",
});

export default axiosTokenInstance;
