import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const HelloUserBar = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{ marginRight: 20 }}
      >
        <Image source={require("../assets/draw.png")} style={styles.draw} />
      </TouchableOpacity>
      <Image source={require("../assets/avatar.png")} style={styles.avatar} />
      <View>
        <Text style={styles.hellotxt}>Hello</Text>
        <Text style={styles.username}>User Name</Text>
      </View>
      <TouchableOpacity style={{ marginLeft: "auto" }}>
        <Image
          resizeMode="contain"
          source={require("../assets/notif-on.png")}
          style={styles.notif}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  draw: { height: 28, width: 28 },
  avatar: { height: 48, width: 48, marginRight: 20 },
  hellotxt: { fontSize: 16, color: "#757575" },
  username: { fontSize: 18, fontWeight: "bold", color: Colors.PRIMARY },
  notif: { height: 23.2, width: 18.6 },
});

export default HelloUserBar;
