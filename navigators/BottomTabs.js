import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/TabScreens/Home';
import Orders from '../screens/TabScreens/Orders';
import Services from '../screens/TabScreens/Services';
import Profile from '../screens/TabScreens/Profile';
import HomeStack from './tabStacks/HomeStack';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Services" component={Services} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default BottomTabs