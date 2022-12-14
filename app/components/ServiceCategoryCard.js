import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Colors from "../utils/Colors";

const ServiceCategoryCard = ({
  service,
  width,
  height,
  locationright,
  locationtop,
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.container,
        { width: width, marginBottom: 20, marginHorizontal: 10 },
      ]}
    >
      <ImageBackground
        resizeMode="stretch"
        imageStyle={{ opacity: 0.6 }}
        style={{
          height: height,
        }}
        source={{ uri: service.image }}
      >
        <View style={styles.text}>
          <Text numberOfLines={1} style={styles.servicename}>
            {service.name}
          </Text>
          <Text numberOfLines={1} style={styles.servicesavailable}>
            {service.available} Services available
          </Text>
        </View>
        <View
          style={[styles.location, { right: locationright, top: locationtop }]}
        >
          <Image
            source={require("../assets/location.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text style={styles.startstxt}>{service.location}</Text>
        </View>
        <TouchableOpacity
        activeOpacity={0.6}
          onPress={() => navigation.navigate("service", { service })}
          style={styles.knowmore}
        >
          <Text style={styles.knowmoretxt}>Know more</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    borderRadius: 16,
    overflow: "hidden",

  },
  servicename: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },

  text: { position: "absolute", bottom: 50, left: 17 },
  servicesavailable: { fontSize: 12, color: "white" },
  location: {
    position: "absolute",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  startstxt: { fontSize: 12, color: "white", opacity: 0.8 },
  knowmore: {
    position: "absolute",
    right: 0,
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 10,
    paddingHorizontal: 7,
    borderTopLeftRadius: 18,
    bottom: 0,
  },
  knowmoretxt: { color: "white", fontSize: 13, fontWeight: "500" },
});

export default ServiceCategoryCard;
