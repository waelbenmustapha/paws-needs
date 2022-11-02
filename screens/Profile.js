import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAuth } from "../context/AuthProvider";

const Profile = () => {
  const auth = useAuth();

  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity
        style={{ borderWidth: 1, padding: 5, width: "80%" }}
        onPress={() => {
          auth.logout();
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
