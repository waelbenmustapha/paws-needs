import { View, Text } from "react-native";
import React from "react";
import CloseFillIcon from "../assets/svg/close-fill.svg";

const ErrorView = ({ message, setError }) => {
  return (
    <View
      style={{
        width: "100%",
        marginBottom: 32,
        backgroundColor: "rgba(234, 0, 0, 0.1)",
        padding: 12,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <CloseFillIcon
        onPress={() => setError("")}
        width={20}
        height={20}
        color={"red"}
      />
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "400",
            color: "red",
            marginLeft: 12,
          }}
        >
          {message}
        </Text>
      </View>
    </View>
  );
};

export default ErrorView;
