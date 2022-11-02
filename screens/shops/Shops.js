import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import PawAndText from "../../components/PawAndText";
import SearchAndFilter from "../../components/SearchAndFilter";
import ShopCard from "../../components/ShopCard";
import Favorite from "../../components/Favorite";

const Shops = () => {
  const [shops, setShops] = useState([
    {
      name: "Shop Name",
      location: "Dubai",
      coordinations: { latitude: 22.0, longitude: 22.0 },
      rating: 4.2,
      reviews: 230,
      image:
        "https://i.postimg.cc/3w9zmd2b/supermarket-aisle-blurred-background-with-empty-red-shopping-cart-1-1.png",
    },
    {
      name: "Shop Name",
      location: "Abu Dhabi",
      coordinations: { latitude: 22.0, longitude: 22.0 },
      rating: 4.2,
      reviews: 230,
      image:
        "https://i.postimg.cc/3w9zmd2b/supermarket-aisle-blurred-background-with-empty-red-shopping-cart-1-1.png",
    },
    {
      name: "Shop Name",
      location: "Dubai",
      coordinations: { latitude: 22.0, longitude: 22.0 },
      rating: 4.2,
      reviews: 230,
      image:
        "https://i.postimg.cc/3w9zmd2b/supermarket-aisle-blurred-background-with-empty-red-shopping-cart-1-1.png",
    },
    {
      name: "Shop Name",
      location: "Abu Dhabi",
      coordinations: { latitude: 22.0, longitude: 22.0 },
      rating: 4.2,
      reviews: 230,
      image:
        "https://i.postimg.cc/3w9zmd2b/supermarket-aisle-blurred-background-with-empty-red-shopping-cart-1-1.png",
    },
    {
      name: "Shop Name",
      location: "Dubai",
      coordinations: { latitude: 22.0, longitude: 22.0 },
      rating: 4.2,
      reviews: 230,
      image:
        "https://i.postimg.cc/3w9zmd2b/supermarket-aisle-blurred-background-with-empty-red-shopping-cart-1-1.png",
    },
    {
      name: "Shop Name",
      location: "Abu Dhabi",
      coordinations: { latitude: 22.0, longitude: 22.0 },
      rating: 4.2,
      reviews: 230,
      image:
        "https://i.postimg.cc/3w9zmd2b/supermarket-aisle-blurred-background-with-empty-red-shopping-cart-1-1.png",
    },
  ]);

 

  return (
    <View style={styles.container}>
      <PawAndText title={"Shops"} Component={Favorite} />
      <View style={{ marginVertical: 20 }}>
        <SearchAndFilter placeholder={"Search for a shop"} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
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
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight + 20,
  },
});

export default Shops;
