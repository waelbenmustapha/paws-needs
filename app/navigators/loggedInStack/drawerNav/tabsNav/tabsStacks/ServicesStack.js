import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Service from "../../../../../screens/services/Service";
import DogWalkingForm from "../../../../../screens/services/forms/DogWalkingForm";
import PetBoardingForm from "../../../../../screens/services/forms/PetBoardingForm";
import PetGroomingForm from "../../../../../screens/services/forms/PetGroomingForm";
import PetTrainingForm from "../../../../../screens/services/forms/PetTrainingForm";
import PetTransportForm from "../../../../../screens/services/forms/PetTransportForm";
import VetAppointmentForm from "../../../../../screens/services/forms/VetAppointmentForm";
import ServicesCategories from "../../../../../screens/services/ServicesCategories";

const Stack = createNativeStackNavigator();

const ServicesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="services" component={ServicesCategories} />
      <Stack.Screen name="service" component={Service} />
      <Stack.Screen name="dog-walking-form" component={DogWalkingForm} />
      <Stack.Screen name="pet-boarding-form" component={PetBoardingForm} />
      <Stack.Screen
        name="vet-appointment-form"
        component={VetAppointmentForm}
      />
      <Stack.Screen name="pet-grooming-form" component={PetGroomingForm} />
      <Stack.Screen name="pet-training-form" component={PetTrainingForm} />
      <Stack.Screen name="pet-transport-form" component={PetTransportForm} />
    </Stack.Navigator>
  );
};

export default ServicesStack;
