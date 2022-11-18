import React from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./tabsStacks/HomeStack";
import ServicesStack from "./tabsStacks/ServicesStack";
import Orders from "../../../../screens/orders/Orders";
import ShopStack from "./tabsStacks/ShopStack";
import Colors from "../../../../utils/Colors";
import Profile from "../../../../screens/profile/Profile";
import ProfileStack from "./tabsStacks/ProfileStack/ProfileStack";
import { AppProvider, useApp } from "../../../../context/AppProvider";
import HomeFillIcon from "../../../../assets/svg/home-fill.svg";
import HomeOutlineIcon from "../../../../assets/svg/home-outline.svg";
import CartFillIcon from "../../../../assets/svg/cart-fill.svg";
import CartOutlineIcon from "../../../../assets/svg/cart-outline.svg";
import ServicesFillIcon from "../../../../assets/svg/services-fill.svg";
import ServicesOutlineIcon from "../../../../assets/svg/services-outline.svg";
import PersonFillIcon from "../../../../assets/svg/person-fill.svg";
import PersonOutlineIcon from "../../../../assets/svg/person-outline.svg";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const app = useApp();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.PRIMARY,
        headerShown: false,
        tabBarStyle: {
          display: app.BottomBarShown ? "flex" : "none",
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
            return (
              <View
                style={{
                  width: "100%",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                {focused ? (
                  <HomeFillIcon width={20} height={20} color={Colors.PRIMARY} />
                ) : (
                  <HomeOutlineIcon
                    width={20}
                    height={20}
                    color={Colors.TEXT_GRAY}
                  />
                )}
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
            return (
              <View
                style={{
                  width: "100%",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                {focused ? (
                  <CartFillIcon width={20} height={20} color={Colors.PRIMARY} />
                ) : (
                  <CartOutlineIcon
                    width={20}
                    height={20}
                    color={Colors.TEXT_GRAY}
                  />
                )}
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
            return (
              <View
                style={{
                  width: "100%",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                {focused ? (
                  <ServicesFillIcon
                    width={20}
                    height={20}
                    color={Colors.PRIMARY}
                  />
                ) : (
                  <ServicesOutlineIcon
                    width={20}
                    height={20}
                    color={Colors.TEXT_GRAY}
                  />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="profile-tab"
        component={ProfileStack}
        options={{
          tabBarLabel: "Profile",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "500",
          },
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={{
                  width: "100%",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                {focused ? (
                  <PersonFillIcon
                    width={20}
                    height={20}
                    color={Colors.PRIMARY}
                  />
                ) : (
                  <PersonOutlineIcon
                    width={20}
                    height={20}
                    color={Colors.TEXT_GRAY}
                  />
                )}
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
