import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  StatusBar,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import SearchAndFilter from "../components/SearchAndFilter";
import PawAndText from "../components/PawAndText";
import HelloUserBar from "../components/HelloUserBar";
import SeeAll from "../components/SeeAll";
import ServiceCategoryCard from "../components/ServiceCategoryCard";
import ProductCard from "../components/ProductCard";
import Colors from "../utils/Colors";
import PromotionCard from "../components/PromotionCard";

const Home = () => {
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
  ]);
  const [categories, setCategories] = useState([
    "All",
    "Dog food and treats",
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
  const [selectedFilter, setSelectedFilter] = useState("All");

  const [services, setServices] = useState([
    {
      name: "Vet Appointment",
      available: 5,
      image:
        "https://i.postimg.cc/SN7MCvSR/Close-up-on-veterinarian-taking-care-of-dog.png",
      location: "Dubai",
    },
    {
      name: "Pet Transport",
      available: 6,
      image:
        "https://i.postimg.cc/KcrZcSc9/haircuting-process-small-dog-sits-table-dog-with-professional-2.png",
      location: "Dubai",
    },
    {
      name: "Pet Training",
      available: 10,
      image:
        "https://i.postimg.cc/vH0b9rVf/haircuting-process-small-dog-sits-table-dog-with-professional-1.png",
      location: "Dubai",
    },
    {
      name: "Dog Walking",
      available: 5,
      image:
        "https://i.postimg.cc/cL6ZcvRj/haircuting-process-small-dog-sits-table-dog-with-professional-1-1.png",
      location: "Dubai",
    },
    {
      name: "Pet Boarding",
      available: 8,
      image:
        "https://i.postimg.cc/VLfzdGdz/haircuting-process-small-dog-sits-table-dog-with-professional-1-2.png",
      location: "Dubai",
    },
    {
      name: "Pet Grooming",
      available: 17,
      image:
        "https://i.postimg.cc/D0gFxsYV/haircuting-process-small-dog-sits-table-dog-with-professional-1-3.png",
      location: "Dubai",
    },
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        resizeMode="contain"
        source={require("../assets/circles.png")}
        style={styles.circles}
      />

      <HelloUserBar />
      <View style={{ marginVertical: 20 }}>
        <SearchAndFilter placeholder={"Search for a shop"} />
      </View>
      <View style={{ marginBottom: 0 }}>
        <SeeAll text={"Promotions"} onpress={() => console.log("Sell all")} />
      </View>
        <ScrollView  showsHorizontalScrollIndicator={false} horizontal>
          {services.map((el, index) => (
            <PromotionCard key={index} />
          ))}
        </ScrollView>
      <View style={{ marginVertical:20 }}>
        <SeeAll text={"Services"} onpress={() => console.log("Sell all")} />
      </View>
      <View style={{ height: 160, marginBottom: 20 }}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {services.map((el, index) => (
            <ServiceCategoryCard
              mrb={0}
              mrr={22}
              locationright={10}
              locationtop={10}
              height={160}
              service={el}
              key={index}
            />
          ))}
        </ScrollView>
      </View>
      <View style={{ marginBottom: 20 }}>
        <SeeAll text={"Services"} onpress={() => console.log("Sell all")} />
      </View>
      <View style={styles.categoriesselect}>
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
              style={[
                styles.categoryitem,
                {
                  backgroundColor:
                    selectedFilter === el ? Colors.PRIMARY : Colors.SECONDARY,
                },
              ]}
            >
              <Text style={styles.categoryitemtxt}>{el}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.servicescontainer}
      >
        {products.map((el, index) => (
          <ProductCard key={index} product={el} />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 70,
    backgroundColor: "white",
    position: "relative",
  },
  categoriesselect: {
    height: 40,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  servicescontainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  circles: {
    height: 213,
    width: 163,
    position: "absolute",
    top: 0,
    left: 0,
  },
  categoryitem: {
    paddingHorizontal: 16,
    alignItems: "center",
    height: 38,
    marginRight: 16,
    borderRadius: 100,
    justifyContent: "center",
  },
  categoryitemtxt: { color: "white", fontSize: 16, fontWeight: "500" },
});

export default Home;
