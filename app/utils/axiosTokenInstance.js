import axios from "axios";
const axiosTokenInstance = axios.create({
  baseURL: "http://192.168.1.45:3000",
});

export default axiosTokenInstance;
