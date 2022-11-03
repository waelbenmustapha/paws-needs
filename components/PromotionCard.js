import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const PromotionCard = () => {
  return (
    <LinearGradient
      style={{
        marginHorizontal: 10,
        padding: 15,
        height: 157,
        position: "relative",
        width: Dimensions.get("window").width / 1.35,
        borderRadius: 16,
      }}
      // Button Linear Gradient
      colors={["#F06109", "#F99E67"]}
      locations={[0.1, 0.9]}
    >
      <View style={{ position: "absolute", bottom: 0, right: -20 }}>
        <Image
          resizeMode="cover"
          style={{
            height: 185,
            width: 160,
          }}
          source={require("../assets/dogcat.png")}
        />
      </View>

      <View
        style={{
          position: "absolute",
          top: 10,
          left: 0,
          right: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          resizeMode="contain"
          style={{ height: 80, width: 80 }}
          source={require("../assets/cube.png")}
        />
      </View>
      <Text
        numberOfLines={1}
        style={{
          fontSize: 26,
          fontWeight: "bold",
          color: "white",
          marginBottom: 10,
          maxWidth: "65%",
        }}
      >
        20% Off
      </Text>
      <Text
        numberOfLines={1}
        style={{
          fontSize: 16,
          fontWeight: "700",
          color: "white",
          marginBottom: 10,
          maxWidth: "65%",
        }}
      >
        At Shop Name !
      </Text>
      <Text
        numberOfLines={2}
        style={{
          fontSize: 12,
          fontWeight: "500",
          color: "white",
          marginBottom: 10,
          maxWidth: "65%",
        }}
      >
        Get a new supplement discount,only valid this week
      </Text>
    </LinearGradient>
  );
};

export default PromotionCard;
