import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import Colors from "../utils/Colors";

const ButtonPrimary = ({ title, ...rest }) => {
  return (
    <Pressable
      {...rest}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? Colors.PRIMARY_DARK : Colors.PRIMARY,
        },
        styles.btn,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  btn: {
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    paddingHorizontal: 24,

    shadowColor: "#F77E34",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  text: { fontSize: 16, fontWeight: "700", color: "#fff" },
});

export default ButtonPrimary;
