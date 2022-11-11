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
import { AirbnbRating } from "react-native-ratings";

const ServiceCard = ({ service }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        imageStyle={{ opacity: 0.6 }}
        style={{
          height: 230,
        }}
        source={{ uri: service.image }}
      >
        <View style={styles.text}>
          <Text style={styles.servicename}>{service.name}</Text>
          <View style={{ display: "flex", flexDirection: "column" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AirbnbRating
                size={8}
                ratingContainerStyle={{ width: 68 }}
                count={5}
                defaultRating={service.rating}
                isDisabled
                showRating={false}
              />
              <Text
                style={{ fontSize: 11, fontWeight: "700", color: "#F3B004" }}
              >
                {"  "}
                {service.rating}
              </Text>
            </View>
            <Text style={styles.servicesavailable}>
              {"(" + service.reviews + " reviews)"}
            </Text>
          </View>
        </View>
        <View style={styles.location}>
          <Image
            source={require("../assets/location.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text style={styles.startstxt}>{service.location}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate("service-form", { service })}
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
    width: Dimensions.get("window").width / 2 - 28,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
  },
  servicename: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },

  text: { position: "absolute", bottom: 50, left: 10 },
  servicesavailable: { fontSize: 12, color: "white" },
  location: {
    position: "absolute",
    right: 20,
    top: 20,
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

export default ServiceCard;
