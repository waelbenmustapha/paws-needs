import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPets from "../../../../../../screens/profile/MyPets";
import AddPet from "../../../../../../screens/profile/AddPet";

const Stack = createNativeStackNavigator();

const PetsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="mypets" component={MyPets} />
      <Stack.Screen name="addpet" component={AddPet} />
    </Stack.Navigator>
  );
};

export default PetsStack

