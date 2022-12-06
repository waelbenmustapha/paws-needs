import { useMutation } from "@tanstack/react-query";
import { login } from "./authApi";
import { useAuth } from "../../context/AuthProvider";

export const useSignin = ({ setApiError }) => {
  const auth = useAuth();
  return useMutation(login, {
    onSuccess: (result) => {
      if (result) {
        if (result.status == 200 && result.data.success == true) {
          auth.saveAsyncUser(result.data);
        } else {
          // console.log(result.status);
          // console.log(result.data);
          setApiError(result.data.msg);
        }
      }
    },
    onError: (error) => {
      // console.log("error happen while Sign In");
      // console.log(error);
      setApiError("Error happen while Sign In");
    },
  });
};
