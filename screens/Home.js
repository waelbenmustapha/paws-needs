import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate("smth")}>
        <Text>ggfgg</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
