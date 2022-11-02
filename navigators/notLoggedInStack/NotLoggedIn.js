import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../../screens/Landing";

const NotLoggedIn = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="landing" component={Landing} />
    </Stack.Navigator>
  );
};

export default NotLoggedIn;
