import { View, Image, StyleSheet } from "react-native";
import React from "react";
import StatusBarPadding from "../utils/StatusBarPadding";
import image1 from "../assets/logo.png";
import Loader from "../components/Loader";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image source={image1} />
      <View style={styles.loading}>
        <Loader />
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
