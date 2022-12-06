import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { signup } from "./authApi";

export const useSignup = ({ setApiError }) => {
  const navigation = useNavigation();
  return useMutation(signup, {
    onSuccess: (result) => {
      if (result.status == 201 && result.data.success == true) {
        navigation.navigate("signin-with-email");
      } else {
        // console.log(result.status);
        // console.log(result.data);
        setApiError(result.data.msg);
      }
    },
    onError: (error) => {
      // console.log("error happen while Sign Up");
      // console.log(error);
      setApiError("Error happen while Sign Up");
    },
  });
};
