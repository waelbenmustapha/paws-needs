import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";
import GridIcon from "../assets/svg/grid.svg";
import NotifIcon from "../assets/svg/bell.svg";

const HelloUserBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{ marginRight: 20 }}
      >
        <GridIcon width={28} height={28} color={"#000"} />
      </TouchableOpacity>
      <Image source={require("../assets/avatar.png")} style={styles.avatar} />
      <View>
        <Text style={styles.hellotxt}>Hello</Text>
        <Text style={styles.username}>User Name</Text>
      </View>
      <TouchableOpacity style={{ marginLeft: "auto" }}>
        <NotifIcon width={20} height={20} color={"#000"} />
        <View
          style={{
            backgroundColor: Colors.PRIMARY,
            height: 7,
            width: 7,
            position: "absolute",
            top: 0,
            right: 0,
            borderRadius: 100,
          }}
        ></View>
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
  avatar: { height: 48, width: 48, marginRight: 20 },
  hellotxt: { fontSize: 16, color: Colors.TEXT_GRAY },
  username: { fontSize: 18, fontWeight: "bold", color: Colors.PRIMARY },
});

export default HelloUserBar;
