import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Checkout from '../../../../../screens/Checkout';
import Home from '../../../../../screens/TabStacks/Home';
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