import React, { useState } from "react";
import { View, TextInput, StyleSheet, Pressable } from "react-native";
import Eye from "../assets/svg/eye.svg";
import EyeOff from "../assets/svg/eye-off.svg";

const InputText = ({ placeholder, isPassword, iconImage, icon }) => {
  const [hidePassword, setHidePassword] = useState(isPassword);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        secureTextEntry={hidePassword}
        placeholder={placeholder}
        style={styles.input}
      />
      {isPassword === true ? (
        hidePassword ? (
          <Pressable
            onPress={() => setHidePassword(!hidePassword)}
            style={styles.icon}
          >
            <EyeOff width={20} height={20} color={"#9E9E9E"} />
          </Pressable>
        ) : (
          <Pressable
            onPress={() => setHidePassword(!hidePassword)}
            style={styles.icon}
          >
            <Eye width={20} height={20} color={"#9E9E9E"} />
          </Pressable>
        )
      ) : icon ? (
        <View style={styles.icon}>{icon}</View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: "100%",
    borderRadius: 12,
    backgroundColor: "#F0F2F4",
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: "100%",
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    backgroundColor: "#F0F2F4",
  },
  icon: {
    height: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default InputText;
