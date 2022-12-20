import { useMutation } from "@tanstack/react-query";
import { execRequestToken } from "../../utils/execRequestsToken";
// import apiClient from "../../utils/http-common";

export async function editProfile(data) {
  return execRequestToken({
    url: "/users/update-current-user",
    method: "PUT",
    data,
  });
}

export const useEditProfile = ({ setApiError }) => {
  return useMutation(editProfile, {
    onSuccess: (result) => {
      console.log("result: ", result);
    },
    onError: (error) => {
      console.log("error: ", error);
      setApiError("Error happen while updating your profile");
    },
  });
};
