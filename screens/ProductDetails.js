import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Colors from "../utils/Colors";
import Favorite from "../components/Favorite";

const ProductDetails = ({ navigation, route }) => {
  const product = route.params.product;
  const [itemCount, setItemCount] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.row}>
          <AntDesign
            onPress={() => navigation.goBack()}
            style={{ paddingVertical: 5, paddingRight: 10 }}
            name="arrowleft"
            size={24}
            color={"#000"}
          />
        </View>
        <Favorite />
      </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              resizeMode="contain"
              source={{ uri: product.image }}
              style={styles.img}
            ></Image>
          </View>

          {/* **************** product content ******************** */}

          <View style={{ paddingHorizontal: 20 }}>
            <View
              style={[styles.row, { marginVertical: 32, alignSelf: "center" }]}
            >
              <TouchableOpacity onPress={() => setItemCount(itemCount - 1)}>
                <Entypo
                  style={{
                    backgroundColor: "#F0F2F4",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5,
                    padding: 8,
                  }}
                  name="minus"
                  size={24}
                  color={Colors.PRIMARY}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  marginHorizontal: 14,
                }}
              >
                {itemCount}
              </Text>
              <TouchableOpacity onPress={() => setItemCount(itemCount + 1)}>
                <Entypo
                  style={{
                    backgroundColor: Colors.PRIMARY,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5,
                    padding: 8,
                  }}
                  name="plus"
                  size={24}
                  color={"#fff"}
                />
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 16 }}>
              {product.name}
            </Text>
            <View style={[styles.row, { marginBottom: 32 }]}>
              <Text
                style={{
                  backgroundColor: Colors.SECONDARY2,
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: "600",
                  paddingHorizontal: 10,
                  paddingVertical: 6,
                  borderRadius: 6,
                }}
              >
                Dog food
              </Text>
              <Image
                style={{ width: 20, height: 20, marginLeft: 16 }}
                source={require("../assets/star.png")}
              />
              <Text style={{ fontSize: 14, fontWeight: "500", marginLeft: 8 }}>
                4.8 {"("}86 reviews{")"}
              </Text>
            </View>
            <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 16 }}>
              Description
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "400", marginBottom: 32 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore view more...
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={[
          styles.row,
          {
            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 36,
          },
        ]}
      >
        <View style={{ marginRight: 20 }}>
          <Text style={{ color: "#757575", fontSize: 12, fontWeight: "500" }}>
            Price
          </Text>
          <Text
            style={{ color: Colors.PRIMARY, fontSize: 24, fontWeight: "700" }}
          >
            AED 40
          </Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate("orders-tab")}
          style={{
            flex: 1,
            backgroundColor: Colors.PRIMARY,
            height: 58,
            paddingHorizontal: 18,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: "#fff",
            }}
          >
            Add to cart
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight + 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  header: { height: 250, width: "100%" },
  img: { height: "100%", width: "100%" },
  row: { flexDirection: "row", alignItems: "center" },
  icon: { padding: 5, marginLeft: 10 },
});

export default ProductDetails;
