import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Checkout from "../../screens/Checkout";
import DrawerNavigator from "./drawerNav/DrawerNavigator";
import ProductDetails from "../../screens/ProductDetails";
import EditProfile from "../../screens/profile/EditProfile";
import PetsStack from "./drawerNav/tabsNav/tabsStacks/ProfileStack/PetsStack";
import AddressStack from "./drawerNav/tabsNav/tabsStacks/ProfileStack/AddressesStack";
import { useAuth } from "../../context/AuthProvider";
import axiosTokenInstance from "../../utils/axiosTokenInstance";
const Stack = createNativeStackNavigator();

const LoggedIn = () => {
  const auth = useAuth();
 
  axiosTokenInstance.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${auth.user.token}`;


  axiosTokenInstance.interceptors.response.use(
    (response) => {
      console.log("hi")
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        auth.removeAsyncUser();
      }
      return Promise.reject(error);
    }
  );
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="drawer" component={DrawerNavigator} />
      <Stack.Screen name="checkout" component={Checkout} />
      <Stack.Screen name="mypets-stack" component={PetsStack} />
      <Stack.Screen name="edit-profile" component={EditProfile} />
      <Stack.Screen name="addresses-stack" component={AddressStack} />
      <Stack.Screen name="product-details" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default LoggedIn;
