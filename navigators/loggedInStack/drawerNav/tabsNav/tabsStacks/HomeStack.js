import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Checkout from "../../../../../screens/Checkout";
import Home from "../../../../../screens/Home";
import Service from "../../../../../screens/services/Service";
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="smth" component={Checkout} />
      <Stack.Screen name="service" component={Service} />

    </Stack.Navigator>
  );
};

export default HomeStack;
