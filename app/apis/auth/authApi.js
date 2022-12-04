import apiClient from "../../utils/http-common";

export async function login(data) {
  try {
    const res = await apiClient.post(`/auth/login`, data);
    // Work with the response...
    return res;
  } catch (err) {
    if (err.response) {
      // The client was given an error response (5xx, 4xx)
      // console.log(err.response.status);
      // console.log(err.response.data);
      return err.response;
    } else if (err.request) {
      // The client never received a response, and the request was never left
      console.log(err.request);
    } else {
      // Anything else
      console.log("something wrong happen!!");
    }
  }
}

export async function signup(data) {
  try {
    const res = await apiClient.post(`/auth/signup`, data);
    // Work with the response...
    return res;
  } catch (err) {
    if (err.response) {
      // The client was given an error response (5xx, 4xx)
      // console.log(err.response.status);
      // console.log(err.response.data);
      return err.response;
    } else if (err.request) {
      // The client never received a response, and the request was never left
      console.log(err.request);
    } else {
      // Anything else
      console.log("something wrong happen!!");
    }
  }
}
