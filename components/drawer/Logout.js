import { View, Text } from "react-native";
import React from "react";
import { useAuth } from "../../context/AuthProvider";
import { TouchableOpacity } from "react-native-gesture-handler";

const Logout = () => {
  const auth = useAuth();
  return (
    <View>
      <TouchableOpacity onPress={() => auth.logout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;
