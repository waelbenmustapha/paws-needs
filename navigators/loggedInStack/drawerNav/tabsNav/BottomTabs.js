import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./tabsStacks/HomeStack";
import ServicesStack from "./tabsStacks/ServicesStack";
import Orders from "../../../../screens/Orders";
import Profile from "../../../../screens/Profile";
import ShopStack from "./tabsStacks/ShopStack";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="home-tab" component={HomeStack} />
      <Tab.Screen name="orders-tab" component={Orders} />
      <Tab.Screen name="services-tab" component={ServicesStack} />
      <Tab.Screen
        options={{
          tabBarItemStyle: { display: "none" },
        }}
        name="shops-tab"
        component={ShopStack}
      />

      <Tab.Screen name="profile-tab" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
