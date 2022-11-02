import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../../utils/Colors";

const ShopPage = ({ navigation, route }) => {
  const shop = route.params.shop;
  const [isFavorite, setIsFavorite] = useState(false);
  const [navActive, setNavActive] = useState("categories");
  const [selectedCategorie, setSelectedCategorie] = useState("all");
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

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} />
      <ImageBackground
        source={{ uri: shop.image }}
        style={{ height: 250, width: "100%" }}
      >
        <View
          style={{
            backgroundColor: "rgba(33, 33, 33, 0.5)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <View style={styles.header}>
          <View style={styles.nav}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign
                onPress={() => navigation.goBack()}
                style={{ paddingVertical: 5, paddingRight: 10 }}
                name="arrowleft"
                size={24}
                color={Colors.PRIMARY}
              />
              <Text style={styles.navText}>Shops</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign
                // onPress={() => {}}
                style={{ padding: 5, marginLeft: 10 }}
                name="message1"
                size={24}
                color={"#fff"}
              />
              <Feather
                // onPress={() => {}}
                style={{ padding: 5, marginLeft: 10 }}
                name="phone"
                size={24}
                color={"#fff"}
              />
              {isFavorite ? (
                <Ionicons
                  onPress={() => {
                    setIsFavorite(!isFavorite);
                  }}
                  style={{ padding: 5, marginLeft: 10 }}
                  name="heart"
                  size={28}
                  color={"#D91B1B"}
                />
              ) : (
                <Ionicons
                  onPress={() => {
                    setIsFavorite(!isFavorite);
                  }}
                  style={{ padding: 5, marginLeft: 10 }}
                  name="heart-outline"
                  size={28}
                  color={"#ffffff"}
                />
              )}
            </View>
          </View>
          <View style={{ position: "absolute", bottom: 20, left: 20 }}>
            <Text style={styles.title}>{shop.name}</Text>
            <Text
              style={{
                marginTop: 6,
                color: "rgba(255,255,255,0.8)",
                fontSize: 16,
                fontWeight: "400",
              }}
            >
              Dubai | 30 min away
            </Text>
            <View style={{ marginTop: 6, flexDirection: "row" }}>
              <View style={{ marginRight: 8 }}>
                <Text
                  style={{ color: "#ffff00", fontSize: 14, fontWeight: "400" }}
                >
                  Stars
                </Text>
              </View>
              <Text
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: 14,
                  fontWeight: "400",
                }}
              >
                {"("}230 Reviews{")"}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pressable
            onPress={() => setNavActive("categories")}
            style={{
              width: "50%",
              height: 40,
              borderBottomWidth: navActive == "categories" ? 4 : 2,
              borderBottomColor:
                navActive == "categories" ? Colors.PRIMARY : "#EEEEEE",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: navActive == "categories" ? Colors.PRIMARY : "#9E9E9E",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Categories
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setNavActive("reviews")}
            style={{
              width: "50%",
              height: 40,
              borderBottomWidth: navActive == "reviews" ? 4 : 2,
              borderBottomColor:
                navActive == "reviews" ? Colors.PRIMARY : "#EEEEEE",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: navActive == "reviews" ? Colors.PRIMARY : "#9E9E9E",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Reviews
            </Text>
          </Pressable>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {navActive == "categories" ? (
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                paddingVertical: 20,
              }}
            >
              {categories.map((item, index) => (
                <Pressable
                  onPress={() => setSelectedCategorie(item)}
                  key={`categorie-${index}`}
                >
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      textTransform: "capitalize",
                      textAlign: "center",
                      textAlignVertical: "center",
                      backgroundColor:
                        selectedCategorie === item
                          ? Colors.PRIMARY
                          : "transparent",
                      borderWidth: 2,
                      borderColor: Colors.PRIMARY,
                      color: selectedCategorie === item ? "#fff" : Colors.TEXT,
                      height: 40,
                      paddingHorizontal: 16,
                      marginRight: 8,
                      marginBottom: 8,
                      borderRadius: 50,
                    }}
                  >
                    {item}
                  </Text>
                </Pressable>
              ))}
            </View>
          ) : null}
          {navActive == "reviews" ? (
            <Text style={{ fontSize: 16 }}>Reviews...</Text>
          ) : null}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    position: "relative",
    width: "100%",
    height: "100%",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
});
export default ShopPage;
