import React, { useRef, useCallback } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { useAuth } from "../../context/AuthProvider";

const Profile = ({ navigation }) => {
  const auth = useAuth();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          flex: 1,
          paddingVertical: 40,
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 20 }}>
          Profile
        </Text>
        <TouchableOpacity
          style={{ borderWidth: 1, padding: 5, marginBottom: 20 }}
          onPress={() => {
            navigation.navigate("edit-profile");
          }}
        >
          <Text>Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ borderWidth: 1, padding: 5, marginBottom: 20 }}
          onPress={() => {
            navigation.navigate("addresses-stack");
          }}
        >
          <Text>Address</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ borderWidth: 1, padding: 5, marginBottom: 20 }}
          onPress={() => {
            navigation.navigate("mypets-stack");
          }}
        >
          <Text>My pets</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ borderWidth: 1, padding: 5, marginBottom: 20 }}
          onPress={() => {
            auth.removeAsyncUser();
          }}
        >
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
