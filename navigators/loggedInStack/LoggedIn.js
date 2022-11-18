import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Checkout from "../../screens/Checkout";
import DrawerNavigator from "./drawerNav/DrawerNavigator";
import ProductDetails from "../../screens/ProductDetails";
import MyPets from "../../screens/profile/MyPets";
import EditProfile from "../../screens/profile/EditProfile";
import PetsStack from "./drawerNav/tabsNav/tabsStacks/ProfileStack/PetsStack";
const Stack = createNativeStackNavigator();

const LoggedIn = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="drawer" component={DrawerNavigator} />
      <Stack.Screen name="checkout" component={Checkout} />
      <Stack.Screen name="mypets-stack" component={PetsStack} />
      <Stack.Screen name="edit-profile" component={EditProfile} />
      <Stack.Screen name="product-details" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default LoggedIn;
