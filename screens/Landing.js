import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAuth } from "../context/AuthProvider";
import StatusBarPadding from "../utils/StatusBarPadding";

const Landing = () => {
  const auth = useAuth();
  return (
    <StatusBarPadding>
    <View>
      <Text>Landing</Text>
      <TouchableOpacity onPress={()=>auth.login({"name":"wael"})}>
        <Text>Landing</Text>
      </TouchableOpacity>
    </View>
    </StatusBarPadding>
  );
};

export default Landing;
