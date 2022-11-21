import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Colors from "../utils/Colors";
import Favorite from "./Favorite";
import StarHalfIcon from "../assets/svg/star-half.svg";

const ProductCard = ({ product, navigation }) => {
  const [isFav, setIsFav] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("product-details", { product });
      }}
      style={styles.container}
    >
      <View style={styles.graybox}>
        <TouchableOpacity
          onPress={() => setIsFav(!isFav)}
          style={styles.favcontainer}
        >
          <Favorite
            width={20}
            height={20}
            color="#000"
            fillColor={Colors.PRIMARY}
          />
        </TouchableOpacity>

        <Image
          source={{ uri: product.image }}
          resizeMode="contain"
          style={styles.img}
        />
      </View>
      <Text numberOfLines={1} style={styles.prodname}>
        {product.name}
      </Text>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <StarHalfIcon height={16} width={16} style={{ marginRight: 8 }} />
        <Text style={{ color: "#616161", fontSize: 14, marginRight: 8 }}>
          {product.rating}
        </Text>
        <Text style={{ color: "#616161", fontSize: 14, marginRight: 8 }}>
          |
        </Text>
        <Text
          numberOfLines={1}
          style={{
            backgroundColor: "rgba(247, 126, 52, 0.6)",
            paddingVertical: 6,
            paddingHorizontal: 6,
            borderRadius: 10,
            color: "white",
            flex: 1,
            textAlign: "center",
          }}
        >
          {product.category}
        </Text>
      </View>
      <Text style={styles.price}>AED {product.price}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width / 2 - 28,
    overflow: "hidden",
    marginBottom: 16,
  },
  graybox: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    backgroundColor: Colors.DARK_BG,
    borderRadius: 24,
    marginBottom: 10,
  },
  img: { height: 130, width: Dimensions.get("window").width / 2 - 60 },
  favcontainer: {
    position: "absolute",
    right: 8,
    top: 8,
    zIndex: 10,
    padding: 5,
  },
  prodname: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.TEXT,
    marginBottom: 8,
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
    color: Colors.PRIMARY,
  },
});
export default ProductCard;
