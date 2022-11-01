import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import Colors from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const ShopCard = ({ shop }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{ opacity: 0.6 }}
        style={{
          height: 150,
        }}
        source={{ uri: shop.image }}
      >
        <View style={styles.text}>
          <Text style={styles.shopname}>{shop.name}</Text>
          <Text style={styles.locations}>{shop.location} | 30min away</Text>
        </View>
        <View style={styles.stars}>
          <Image
            source={require("../assets/star.png")}
            style={{ width: 16.6, height: 15.8 }}
          />
          <Text style={styles.startstxt}> 4.2</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("shop", {
              shop,
            })
          }
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
    elevation: 2,
    marginTop: 25,
    width: "100%",
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#212121",
  },
  shopname: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  locations: {
    fontSize: 14,
    color: "white",
    opacity: 0.8,
  },
  text: { position: "absolute", bottom: 25, left: 17 },

  stars: {
    position: "absolute",
    right: 20,
    top: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  startstxt: { fontSize: 14, color: "white", fontWeight: "500" },
  knowmore: {
    position: "absolute",
    right: 0,
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 13,
    paddingHorizontal: 18,
    borderTopLeftRadius: 16,
    bottom: 0,
  },
  knowmoretxt: { color: "white", fontSize: 16, fontWeight: "500" },
});
export default ShopCard;
