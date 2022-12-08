import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyAddresses from "../../../../../../screens/profile/addresses/MyAddresses";
import AddAdress from "../../../../../../screens/profile/addresses/AddAdress";
import EditAddress from "../../../../../../screens/profile/addresses/EditAddress";


const Stack = createNativeStackNavigator();

const AddressStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="myaddresses" component={MyAddresses} />
      <Stack.Screen name="addaddress" component={AddAdress} />
      <Stack.Screen name="editaddress" component={EditAddress} />
    </Stack.Navigator>
  );
};

export default AddressStack

