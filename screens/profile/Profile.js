import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAuth } from "../../context/AuthProvider";

const Profile = ({ navigation }) => {
  const auth = useAuth();

  return (
    <View style={{ marginTop: 50 }}>
      <Text>Profile</Text>
      <TouchableOpacity
        style={{ borderWidth: 1, padding: 5, width: "80%" }}
        onPress={() => {
          navigation.navigate("edit-profile");
        }}
      >
        <Text>Edit profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ borderWidth: 1, padding: 5, width: "80%" }}
        onPress={() => {
          navigation.navigate("mypets-stack");
        }}
      >
        <Text>My pets</Text>
      </TouchableOpacity>
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
