import React from "react";
import { View, Text, StyleSheet, StatusBar, Pressable } from "react-native";
import ArrowLeft from "../assets/svg/arrow-left.svg";

const ReturnNavBar = ({ navigation, title, arrowColor }) => {
  return (
    <View style={styles.nav}>
      <View style={styles.row}>
        <Pressable onPress={() => navigation.goBack()} style={styles.icon}>
          <ArrowLeft
            width={20}
            height={20}
            color={arrowColor ? arrowColor : "#000"}
          />
        </Pressable>
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
    marginTop: StatusBar.currentHeight,
    height: 56,
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
