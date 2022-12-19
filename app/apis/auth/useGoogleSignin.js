import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../context/AuthProvider";
import { execRequest } from "../../utils/execRequests";

export const signin = (data) => {
  return execRequest({
    url: "/auth/google-login",
    method: "POST",
    data,
  });
};

export const useGoogleSignin = ({ setApiError }) => {
  const auth = useAuth();
  return useMutation(signin, {
    onSuccess: (result) => {
      if (result.success == true) {
        auth.saveAsyncUser(result);
      }
    },
    onError: (error) => {
      if (error.statusCode == 400 || error.statusCode == 401) {
        // setApiError(error.msg);
        setApiError("Something went Wrong");
      } else if (error.statusCode == 401) {
        setApiError("Something went Wrong");
      } else {
        setApiError("Internal Server Error");
      }
    },
  });
};
