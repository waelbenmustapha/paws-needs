import { View, ActivityIndicator, Dimensions } from "react-native";
import React from "react";
import Constants from "expo-constants";
import Colors from "../utils/Colors";

export default function LoadingScreen({ bgColor, loaderColor }) {
  return (
    <View
      style={{
        position: "absolute",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height + Constants.statusBarHeight,
        backgroundColor: bgColor ? bgColor : "rgba(0,0,0,0.5)",
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator
        size={50}
        color={loaderColor ? loaderColor : Colors.PRIMARY}
      />
    </View>
  );
}
