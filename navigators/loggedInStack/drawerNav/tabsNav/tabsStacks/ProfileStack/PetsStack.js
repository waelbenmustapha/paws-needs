import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../../../../../screens/profile/Profile";
import MyPets from "../../../../../../screens/profile/MyPets";

const Stack = createNativeStackNavigator();

const PetsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="mypets" component={MyPets} />
    </Stack.Navigator>
  );
};

export default PetsStack

