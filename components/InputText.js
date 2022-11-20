import React, { useState } from "react";
import { View, TextInput, StyleSheet, Pressable } from "react-native";
import Eye from "../assets/svg/eye.svg";
import EyeOff from "../assets/svg/eye-off.svg";
import Colors from "../utils/Colors";

const InputText = ({ placeholder, isPassword, iconImage, icon,value }) => {
  const [hidePassword, setHidePassword] = useState(isPassword);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        secureTextEntry={hidePassword}
        placeholder={placeholder}
        value={value}
        style={styles.input}
      />
      {isPassword === true ? (
        hidePassword ? (
          <Pressable
            onPress={() => setHidePassword(!hidePassword)}
            style={styles.icon}
          >
            <EyeOff width={20} height={20} color={Colors.TEXT_GRAY} />
          </Pressable>
        ) : (
          <Pressable
            onPress={() => setHidePassword(!hidePassword)}
            style={styles.icon}
          >
            <Eye width={20} height={20} color={Colors.TEXT_GRAY} />
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
    backgroundColor: Colors.DARK_BG,
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: "100%",
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    backgroundColor: Colors.DARK_BG,
  },
  icon: {
    height: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default InputText;
