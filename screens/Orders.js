import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Orders = ({ navigation }) => {
  return (
    <View>
      <Text>Orders</Text>
      <TouchableOpacity onPress={() => navigation.navigate("checkout")}>
        <Text>but</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Orders;
