import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const ReturnNavBar = ({ navigation, title }) => {
  return (
    <View style={styles.nav}>
      <View style={styles.row}>
        <AntDesign
          onPress={() => navigation.goBack()}
          style={styles.icon}
          name="arrowleft"
          size={28}
          color={"#000"}
        />
        <Text numberOfLines={1} style={styles.navText}>
          {title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight + 20,
    paddingBottom: 20,
  },
  row: { flexDirection: "row", alignItems: "center" },
  icon: { paddingVertical: 5, paddingRight: 10 },
  navText: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 8,
  },
});

export default ReturnNavBar;
