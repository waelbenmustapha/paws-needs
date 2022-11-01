import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import PawAndText from "../../../components/PawAndText";
import SearchAndFilter from "../../../components/SearchAndFilter";
import { StatusBar } from "expo-status-bar";
import ShopCard from "../../../components/ShopCard";

const Shops = () => {
  const [shops, setShops] = useState([
    {
      name: "shop 1",
      location: "Dubai",
      coordinations: { latitude: 22.0, longitude: 22.0 },
      rating: 4.2,
      reviews: 230,
      image:
        "https://i.postimg.cc/x1rqPzTC/supermarket-aisle-blurred-background-with-empty-red-shopping-cart-1-2.png",
    },
    {
      name: "shop 2",
      location: "Abu Dhabi",
      coordinations: { latitude: 22.0, longitude: 22.0 },
      rating: 4.2,
      reviews: 230,
      image:
        "https://i.postimg.cc/x1rqPzTC/supermarket-aisle-blurred-background-with-empty-red-shopping-cart-1-2.png",
    },
    {
      name: "shop 1",
      location: "Dubai",
      coordinations: { latitude: 22.0, longitude: 22.0 },
      rating: 4.2,
      reviews: 230,
      image:
        "https://i.postimg.cc/x1rqPzTC/supermarket-aisle-blurred-background-with-empty-red-shopping-cart-1-2.png",
    },
    {
      name: "shop 2",
      location: "Abu Dhabi",
      coordinations: { latitude: 22.0, longitude: 22.0 },
      rating: 4.2,
      reviews: 230,
      image:
        "https://i.postimg.cc/x1rqPzTC/supermarket-aisle-blurred-background-with-empty-red-shopping-cart-1-2.png",
    },
    {
      name: "shop 1",
      location: "Dubai",
      coordinations: { latitude: 22.0, longitude: 22.0 },
      rating: 4.2,
      reviews: 230,
      image:
        "https://i.postimg.cc/x1rqPzTC/supermarket-aisle-blurred-background-with-empty-red-shopping-cart-1-2.png",
    },
    {
      name: "shop 2",
      location: "Abu Dhabi",
      coordinations: { latitude: 22.0, longitude: 22.0 },
      rating: 4.2,
      reviews: 230,
      image:
        "https://i.postimg.cc/x1rqPzTC/supermarket-aisle-blurred-background-with-empty-red-shopping-cart-1-2.png",
    },
  ]);

  const Favorite = () => {
    const [isFav, setIsFav] = useState(false);
    return (
      <TouchableOpacity onPress={() => setIsFav(!isFav)}>
        <Image
          style={{ width: 22, height: 21 }}
          source={
            isFav
              ? require("../../../assets/fav-on.png")
              : require("../../../assets/fav-off.png")
          }
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent={false} backgroundColor="white" />
      <PawAndText Component={Favorite} />
      <View style={{ marginBottom: 30 }}></View>
      <SearchAndFilter placeholder={"Search for a shop"} />
      <ScrollView>
        {shops.map((el, index) => (
          <ShopCard shop={el} key={index} />
        ))}
      </ScrollView>
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

export default Shops;
