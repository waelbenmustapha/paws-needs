import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./tabsStacks/HomeStack";
import Orders from "../../../../screens/TabScreens/Orders";
import Services from "../../../../screens/TabScreens/Services";
import Checkout from "../../../../screens/Checkout";
import Profile from "../../../../screens/TabScreens/Profile";


const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home-tab" component={HomeStack} />
      <Tab.Screen name="orders-tab" component={Orders} />
      <Tab.Screen name="services-tab" component={Services} />
      <Tab.Screen
        options={{
          tabBarItemStyle: { display: "none" },
        }}
        name="shops-tab"
        component={Checkout}
      />

      <Tab.Screen name="profile-tab" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
