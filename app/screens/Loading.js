import React from "react";
import { View, Image, StyleSheet, ActivityIndicator } from "react-native";
import image1 from "../assets/logo.png";
import Colors from "../utils/Colors";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image source={image1} />
      <View style={styles.loading}>
        <ActivityIndicator size={50} color={Colors.PRIMARY} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  loading: {
    marginTop: 100,
  },
});

export default Loading;
