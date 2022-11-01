import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Checkout from '../../screens/Checkout';
import DrawerNavigator from './drawerNav/DrawerNavigator';
const Stack = createNativeStackNavigator();

const LoggedIn = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="drawer" component={DrawerNavigator} /> 
    <Stack.Screen name="checkout" component={Checkout} /> 
  </Stack.Navigator>
  )
}

export default LoggedIn