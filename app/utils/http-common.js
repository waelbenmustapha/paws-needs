import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.1.13:3000",
  headers: {
    "Content-type": "application/json",
  },
});
