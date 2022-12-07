import { useMutation } from "@tanstack/react-query";
import { editProfile } from "./profileApi";

export const useEditProfile = ({ setApiError }) => {
  return useMutation(editProfile, {
    onSuccess: (result) => {
      console.log("useMutation onSuccess:");
      console.log(result);
      console.log("*************headers********************");
      console.log(result.headers);
      if (result) {
        if (result.status == 200 && result.data.success == true) {
          console.log(result);
        } else {
          console.log(result.status);
          console.log(result.data);
          if (result.data) {
            setApiError(result.data.msg);
          }
        }
      }
    },
    onError: (error) => {
      console.log("error happen while updating your profile");
      console.log(error);
      setApiError("Error happen while updating your profile");
    },
  });
};
