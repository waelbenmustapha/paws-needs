import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../../screens/Landing";
import Signin from "../../screens/auth/Signin";
import SigninWithEmail from "../../screens/auth/SigninWithEmail";
import SignupWithEmail from "../../screens/auth/SignupWithEmail";

const NotLoggedIn = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="landing" component={Landing} />
      <Stack.Screen name="signin" component={Signin} />
      <Stack.Screen name="signin-with-email" component={SigninWithEmail} />
      <Stack.Screen name="signup-with-email" component={SignupWithEmail} />
    </Stack.Navigator>
  );
};

export default NotLoggedIn;
