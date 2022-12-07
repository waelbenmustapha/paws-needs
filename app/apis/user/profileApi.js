import apiClient from "../../utils/http-common";

export async function editProfile(data) {
  try {
    const res = await apiClient.put(`/users/update-current-user`, data);
    // Work with the response...
    return res;
  } catch (err) {
    if (err.response) {
      // The client was given an error response (5xx, 4xx)
      console.log(err.response.status);
      console.log(err.response.data);
      return err.response;
    } else if (err.request) {
      // The client never received a response, and the request was never left
      console.log(err.request);
    } else {
      // Anything else
      console.log("Something went Wrong!");
    }
  }
}
