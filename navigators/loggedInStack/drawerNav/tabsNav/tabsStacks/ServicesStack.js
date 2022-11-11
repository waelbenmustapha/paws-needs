import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Services from "../../../../../screens/services/Services";
import Service from "../../../../../screens/services/Service";
import ServiceForm from "../../../../../screens/services/ServiceForm";

const Stack = createNativeStackNavigator();

const ServicesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="services" component={Services} />
      <Stack.Screen name="service" component={Service} />
      <Stack.Screen name="service-form" component={ServiceForm} />
    </Stack.Navigator>
  );
};

export default ServicesStack;
