import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Animated, Easing } from "react-native";

const startRotationAnimation = (durationMs, rotationDegree) => {
  Animated.loop(
    Animated.timing(rotationDegree, {
      toValue: 360,
      duration: durationMs,
      easing: Easing.linear,
      useNativeDriver: false,
    })
  ).start();
};

const Loader = ({ color = "#ff0000", durationMs = 1000 }) => {
  const rotationDegree = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startRotationAnimation(durationMs, rotationDegree);
  }, [durationMs, rotationDegree]);

  return (
    <View style={styles.container} accessibilityRole="progressbar">
      <View style={[styles.background, { borderColor: color }]} />

      <Animated.View
        style={[
          styles.progress,
          { borderTopColor: color },
          {
            transform: [
              {
                rotateZ: rotationDegree.interpolate({
                  inputRange: [0, 360],
                  outputRange: ["0deg", "360deg"],
                }),
              },
            ],
          },
        ]}
      ></Animated.View>
    </View>
  );
};

const height = 50;

const styles = StyleSheet.create({
  container: {
    width: height,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  progress: {
    width: "100%",
    height: "100%",
    borderRadius: height / 2,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderWidth: 4,
    position: "absolute",
  },
});

export default Loader;
