import { useMutation } from "@tanstack/react-query";
import { login } from "./authApi";
import { useAuth } from "../../context/AuthProvider";
// import { useNavigation } from "@react-navigation/native";

export const useSignin = () => {
  const auth = useAuth();
  return useMutation(login, {
    onSuccess: (result) => {
      if (result.status == 200) {
        auth.saveAsyncUser(result.data);
      } else {
        console.log(result.status);
        console.log(result.data);
      }
    },
    onError: (error) => {
      console.log("error happen while Sign In");
      console.log(error);
    },
  });
};
