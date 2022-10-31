import { View, Text, StatusBar } from "react-native";
import React from "react";

const StatusBarPadding = ({ children }) => {
  return <View style={{ marginTop: StatusBar.currentHeight }}>
            {children}
        </View>;
};

export default StatusBarPadding;
