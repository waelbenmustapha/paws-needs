import { TextInput, StyleSheet } from "react-native";
import React from "react";

const InputText = ({ placeholder }) => {
  return <TextInput placeholder={placeholder} style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 56,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: "#F0F2F4",
  },
});

export default InputText;
