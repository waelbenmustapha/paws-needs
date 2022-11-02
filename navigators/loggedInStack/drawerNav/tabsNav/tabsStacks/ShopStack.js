import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Shops from "../../../../../screens/shops/Shops";
import ShopPage from "../../../../../screens/shops/ShopPage";

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="shops" component={Shops} />
      <Stack.Screen name="shop" component={ShopPage} />
    </Stack.Navigator>
  );
};

export default ShopStack;
