import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Pressable } from "react-native";
import Eye from "../assets/svg/eye.svg";
import EyeOff from "../assets/svg/eye-off.svg";
import Colors from "../utils/Colors";

const InputText = ({
  placeholder,
  isPassword,
  icon,
  value,
  error,
  onFocus = () => {},
  ...rest
}) => {
  const [hidePassword, setHidePassword] = useState(isPassword);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View>
      <View
        style={[
          styles.inputContainer,
          {
            borderWidth: 1,
            borderColor: error
              ? "#ff0000"
              : isFocused
              ? Colors.DARK_BG
              : "transparent",
            backgroundColor: error || isFocused ? "#fafafa" : Colors.DARK_BG,
          },
        ]}
      >
        <TextInput
          secureTextEntry={hidePassword}
          placeholder={placeholder}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          value={value}
          style={styles.input}
          {...rest}
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
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: "100%",
    borderRadius: 12,
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: "100%",
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
  },
  icon: {
    height: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default InputText;
