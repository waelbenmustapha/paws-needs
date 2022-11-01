import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../../../../screens/TabScreens/Home';
import Checkout from '../../../../../screens/Checkout';
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} /> 
      <Stack.Screen name="smth" component={Checkout} /> 
    </Stack.Navigator>
  )
}

export default HomeStack