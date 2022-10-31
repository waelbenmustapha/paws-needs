import { View, Text } from 'react-native'
import React from 'react'
import BottomTabs from './BottomTabs'
import Checkout from '../screens/Checkout'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const LoggedIn = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="tabs" component={BottomTabs} /> 
    <Stack.Screen name="checkout" component={Checkout} /> 
  </Stack.Navigator>
  )
}

export default LoggedIn