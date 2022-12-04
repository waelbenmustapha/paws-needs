import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { signup } from "./authApi";

export const useSignup = () => {
  const navigation = useNavigation();
  return useMutation(signup, {
    onSuccess: (result) => {
      if (result.status == 200) {
        navigation.navigate("signin-with-email");
      } else {
        console.log(result.status);
        console.log(result.data);
      }
    },
    onError: (error) => {
      console.log("error happen while Sign Up");
      console.log(error);
    },
  });
};
