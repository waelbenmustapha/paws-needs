import React from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./tabsStacks/HomeStack";
import ServicesStack from "./tabsStacks/ServicesStack";
import Orders from "../../../../screens/orders/Orders";
import Profile from "../../../../screens/Profile";
import ShopStack from "./tabsStacks/ShopStack";
import Colors from "../../../../utils/Colors";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.PRIMARY,
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          height: 65,
          paddingBottom: 8,
        },
      }}
    >
      <Tab.Screen
        name="home-tab"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "500",
          },
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <View
                style={{
                  width: "100%",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Image
                  source={require("../../../../assets/home-fill.png")}
                  style={{ width: 24, height: 24 }}
                />
              </View>
            ) : (
              <View
                style={{
                  width: "100%",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Image
                  source={require("../../../../assets/home-outline.png")}
                  style={{ width: 24, height: 24 }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="orders-tab"
        component={Orders}
        options={{
          tabBarLabel: "Orders",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "500",
          },
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <View
                style={{
                  width: "100%",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Image
                  source={require("../../../../assets/cart-fill.png")}
                  style={{ width: 24, height: 24 }}
                />
              </View>
            ) : (
              <View
                style={{
                  width: "100%",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Image
                  source={require("../../../../assets/cart-outline.png")}
                  style={{ width: 24, height: 24 }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="services-tab"
        component={ServicesStack}
        options={{
          tabBarLabel: "Services",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "500",
          },
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <View
                style={{
                  width: "100%",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Image
                  source={require("../../../../assets/services-fill.png")}
                  style={{ width: 24, height: 24 }}
                />
              </View>
            ) : (
              <View
                style={{
                  width: "100%",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Image
                  source={require("../../../../assets/services-outline.png")}
                  style={{ width: 24, height: 24 }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="profile-tab"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "500",
          },
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <View
                style={{
                  width: "100%",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Image
                  source={require("../../../../assets/profile-fill.png")}
                  style={{ width: 24, height: 24 }}
                />
              </View>
            ) : (
              <View
                style={{
                  width: "100%",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Image
                  source={require("../../../../assets/profile-outline.png")}
                  style={{ width: 24, height: 24 }}
                />
              </View>
            );
          },
        }}
      />
      {/* ************* start of tabs will not be shown ************** */}
      <Tab.Screen
        name="shops-tab"
        component={ShopStack}
        options={{
          tabBarItemStyle: { display: "none" },
        }}
      />
      {/* ************* end of tabs will not be shown ************** */}
    </Tab.Navigator>
  );
};

export default BottomTabs;
