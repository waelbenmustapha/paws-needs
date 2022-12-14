import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPets from "../../../../../../screens/profile/pets/MyPets";
import EditPet from "../../../../../../screens/profile/pets/EditPet";
import AddPet from "../../../../../../screens/profile/pets/AddPet";


const Stack = createNativeStackNavigator();

const PetsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="mypets" component={MyPets} />
      <Stack.Screen name="addpet" component={AddPet} />
      <Stack.Screen name="editpet" component={EditPet} />
    </Stack.Navigator>
  );
};

export default PetsStack

