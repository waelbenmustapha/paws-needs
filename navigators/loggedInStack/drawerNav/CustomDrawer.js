import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Image, Text, View } from "react-native";
import Logout from "../../../components/drawer/Logout";

const CustomDrawer = (props) => {
  const { navigation } = props;

  return (
    <DrawerContentScrollView
      contentContainerStyle={{ display: "flex", flex: 1 }}
      {...props}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "center",
          padding: 15,
        }}
      >
        im user name
      </Text>

      <Image
        style={{ width: 50, height: 50, alignSelf: "center", padding: 5 }}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/147/147133.png",
        }}
      />
      <DrawerItemList {...props} />
      <DrawerItem
        label="Orders"
        onPress={() => {
          navigation.navigate("orders-tab");
        }}
      />
      <DrawerItem
        label="Profile"
        onPress={() => {
          navigation.navigate("profile-tab");
        }}
      />
      <DrawerItem
        label="Shops"
        onPress={() => {
          navigation.navigate("shops-tab");
        }}
      />
      <DrawerItem
        label="Services"
        onPress={() => {
          navigation.navigate("services-tab");
        }}
      />
      <DrawerItem
        label="Promotions"
        onPress={() => {
          navigation.navigate("checkout");
        }}
      />
      <View style={{ marginTop: "auto", marginBottom: 40 }}>
        <Logout />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
