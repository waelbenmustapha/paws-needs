import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";

const CartCard = ({ item, navigation }) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.graybox}>
        <Image
          source={{ uri: item.image }}
          resizeMode="contain"
          style={styles.img}
        />
      </View>
      <View style={styles.cartContent}>
        <Text numberOfLines={1} style={styles.itemName}>
          {item.name}
        </Text>
        <View style={[styles.row, { marginBottom: 14 }]}>
          <View style={styles.dot}></View>
          <Text numberOfLines={1} style={styles.itemCount}>
            {item.count}
          </Text>
          <View style={styles.delivery}>
            <Text numberOfLines={1} style={styles.deliveryText}>
              Delivery
            </Text>
          </View>
        </View>
        <View style={[styles.row, { justifyContent: "space-between" }]}>
          <Text style={styles.itemPrice}>{item.price}</Text>
          <Pressable
            onPress={() => navigation.navigate("checkout")}
            style={styles.btnComplete}
          >
            <Text numberOfLines={1} style={styles.btnCompleteText}>
              Complete Order
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center" },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 160,
    marginBottom: 24,
    padding: 20,
    borderRadius: 32,
    backgroundColor: "#fff",

    shadowColor: "#c7c7c7",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  graybox: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: "37%",
    height: "100%",
    backgroundColor: Colors.DARK_BG,
    borderRadius: 24,
  },
  img: { height: "100%", width: "100%" },
  cartContent: {
    flex: 1,
    height: "100%",
    marginLeft: 20,
    justifyContent: "space-between",
  },
  itemName: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.TEXT,
    marginBottom: 12,
  },
  dot: { backgroundColor: "#426AF9", width: 16, height: 16, borderRadius: 100 },
  itemCount: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.TEXT,
    marginHorizontal: 12,
  },
  delivery: {
    backgroundColor: Colors.SECONDARY2,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  deliveryText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.PRIMARY,
  },
  btnComplete: {
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 100,
  },
  btnCompleteText: { fontSize: 14, fontWeight: "600", color: "#fff" },
});

export default CartCard;
