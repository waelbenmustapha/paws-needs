import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Services from '../../../../../screens/TabStacks/services/Services';
import Service from '../../../../../screens/TabStacks/services/Service';


const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="services" component={Services} /> 
      <Stack.Screen name="service" component={Service} /> 
    </Stack.Navigator>
  )
}

export default ShopStack