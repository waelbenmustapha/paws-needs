import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAuth } from "../context/AuthProvider";

const Landing = () => {
  const auth = useAuth();
  return (
    <View>
      <Text>Landing</Text>
      <TouchableOpacity onPress={()=>auth.login({"name":"wael"})}>
        <Text>Landing</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Landing;
