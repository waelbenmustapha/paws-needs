import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PawAndText from "../../../components/PawAndText";

const Service = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent={false} backgroundColor="white" />
      <PawAndText  />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 23,
      paddingVertical: 20,
      backgroundColor: "white",
    },
  });
export default Service;
