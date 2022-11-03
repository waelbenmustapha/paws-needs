import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import PawAndText from "../../components/PawAndText";
import SearchAndFilter from "../../components/SearchAndFilter";
import Colors from "../../utils/Colors";
import ServiceCard from "../../components/ServiceCard";
import ProductCard from "../../components/ProductCard";

const ShopProducts = ({ route, navigation }) => {
  const shop = route.params.shop;
  const [products, setProducts] = useState([
    {
        name: "Inukshuk",
        image: "https://i.postimg.cc/cCJg28Kn/Inukshuk-2616-1024x-1-2.png",
        rating: 4.3,
        price: 40,
        category: "Aquarium and equipment",
      },
      {
        name: "Pet Backpack",
        image: "https://i.postimg.cc/Y0yGHqgy/45645-1-1.png",
        rating: 4.7,
        price: 15,
        category: "Cat health",
      },
      {
        name: "Cosy Pet Bed",
        image: "https://i.postimg.cc/FFPJcGqg/1-4-1-1.png",
        rating: 4.5,
        price: 5,
        category: "dog food and treats",
      },
      {
        name: "Cat Litter",
        image: "https://i.postimg.cc/qMz6GyHf/001742787-1.png",
        rating: 3.8,
        price: 32,
        category: "Dog health",
      },
      {
        name: "Inukshuk",
        image: "https://i.postimg.cc/cCJg28Kn/Inukshuk-2616-1024x-1-2.png",
        rating: 4.3,
        price: 40,
        category: "Aquarium and equipment",
      },
      {
        name: "Pet Backpack",
        image: "https://i.postimg.cc/Y0yGHqgy/45645-1-1.png",
        rating: 4.7,
        price: 15,
        category: "Cat health",
      },
      {
        name: "Cosy Pet Bed",
        image: "https://i.postimg.cc/FFPJcGqg/1-4-1-1.png",
        rating: 4.5,
        price: 5,
        category: "dog food and treats",
      },
      {
        name: "Cat Litter",
        image: "https://i.postimg.cc/qMz6GyHf/001742787-1.png",
        rating: 3.8,
        price: 32,
        category: "Dog health",
      },
      {
        name: "Inukshuk",
        image: "https://i.postimg.cc/cCJg28Kn/Inukshuk-2616-1024x-1-2.png",
        rating: 4.3,
        price: 40,
        category: "Aquarium and equipment",
      },
      {
        name: "Pet Backpack",
        image: "https://i.postimg.cc/Y0yGHqgy/45645-1-1.png",
        rating: 4.7,
        price: 15,
        category: "Cat health",
      },
      {
        name: "Cosy Pet Bed",
        image: "https://i.postimg.cc/FFPJcGqg/1-4-1-1.png",
        rating: 4.5,
        price: 5,
        category: "dog food and treats",
      },
      {
        name: "Cat Litter",
        image: "https://i.postimg.cc/qMz6GyHf/001742787-1.png",
        rating: 3.8,
        price: 32,
        category: "Dog health",
      },
      {
        name: "Inukshuk",
        image: "https://i.postimg.cc/cCJg28Kn/Inukshuk-2616-1024x-1-2.png",
        rating: 4.3,
        price: 40,
        category: "Aquarium and equipment",
      },
      {
        name: "Pet Backpack",
        image: "https://i.postimg.cc/Y0yGHqgy/45645-1-1.png",
        rating: 4.7,
        price: 15,
        category: "Cat health",
      },
      {
        name: "Cosy Pet Bed",
        image: "https://i.postimg.cc/FFPJcGqg/1-4-1-1.png",
        rating: 4.5,
        price: 5,
        category: "dog food and treats",
      },
      {
        name: "Cat Litter",
        image: "https://i.postimg.cc/qMz6GyHf/001742787-1.png",
        rating: 3.8,
        price: 32,
        category: "Dog health",
      },
  ]);
  const [categories, setCategories] = useState([
    "all",
    "dog food and treats",
    "Dog toys and accessories",
    "Dog health",
    "Cat food and treats",
    "Cat litter",
    "Cat health",
    "Fish food, additives",
    "Aquarium and equipment",
    "Aqua scaping",
    "Bird food and treats",
    "Household care",
    "Bird toys and accessories",
    "Accessories",
    "Pet apparel",
    "Others",
  ]);
  const [selectedFilter, setSelectedFilter] = useState(route.params.category);
  return (
    <View style={styles.container}>
      <PawAndText title={shop.name} Component={() => <></>} />
      <View style={{ marginVertical: 20 }}>
        <SearchAndFilter placeholder={"Search for a product"} />
      </View>
      <View
        style={{
          height: 40,
          marginBottom: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {categories.map((el) => (
            <TouchableOpacity
              key={el}
              onPress={() => setSelectedFilter(el)}
              style={{
                paddingHorizontal: 16,
                alignItems: "center",
                height: 38,
                marginRight: 16,
                borderRadius: 100,
                justifyContent: "center",
                backgroundColor:
                  selectedFilter === el ? Colors.PRIMARY : Colors.SECONDARY,
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
                {el}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.servicescontainer}
      >
        {products.map((el,index) => (
          <ProductCard key={index} product={el} />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    paddingTop: StatusBar.currentHeight + 20,

    backgroundColor: "white",
  },
  servicescontainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
export default ShopProducts;
