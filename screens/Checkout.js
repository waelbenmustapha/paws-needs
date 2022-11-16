import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Colors from "../utils/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import CartCard from "./orders/CartCard";

const Checkout = ({ navigation }) => {
  const [orders, setOrders] = useState([
    {
      id: "1",
      name: "Inukshuk",
      image: "https://i.postimg.cc/cCJg28Kn/Inukshuk-2616-1024x-1-2.png",
      count: 1,
      price: 40,
      isCompleted: false,
      isDelivered: false,
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.row}>
          <AntDesign
            onPress={() => navigation.goBack()}
            style={styles.icon}
            name="arrowleft"
            size={24}
            color={Colors.PRIMARY}
          />
          <Text style={styles.navText}>Checkout</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, paddingVertical: 20 }}>
          <Text style={styles.title}>Shipping Address</Text>
          <View style={styles.addressCard}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "#F0F2F4",
                  padding: 8,
                  borderRadius: 100,
                  marginRight: 16,
                }}
              >
                <View
                  style={{
                    backgroundColor: Colors.PRIMARY,
                    padding: 8,
                    borderRadius: 100,
                  }}
                >
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/location-fill.png")}
                  />
                </View>
              </View>
              <View
                style={{ flexDirection: "column", justifyContent: "center" }}
              >
                <Text
                  numberOfLines={1}
                  style={{ fontSize: 18, fontWeight: "700" }}
                >
                  Home
                </Text>
                <Text
                  numberOfLines={1}
                  style={{ fontSize: 14, fontWeight: "500" }}
                >
                  Idk Where 51547841
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Image
                style={{ width: 24, height: 24 }}
                source={require("../assets/edit.png")}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Orders</Text>
          <View style={{ flex: 1, paddingHorizontal: 20 }}>
            {orders.map((item, index) => (
              <CartCard
                key={`cart-${index}`}
                item={item}
                navigation={navigation}
              />
            ))}
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
              marginHorizontal: 20,
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
            }}
          >
            <View style={[styles.row, styles.shippingLine]}>
              <Text style={styles.lineTitle}>Amount</Text>
              <Text style={styles.linePrice}>AED 40</Text>
            </View>
            <View style={[styles.row, styles.shippingLine]}>
              <Text style={styles.lineTitle}>Shipping</Text>
              <Text style={styles.linePrice}>AED 20</Text>
            </View>
            <View style={[styles.row, styles.shippingLine]}>
              <Text style={styles.lineTitle}>Service Fees</Text>
              <Text style={styles.linePrice}>AED 2.5</Text>
            </View>
            <View style={[styles.row, styles.shippingLine]}>
              <Text style={styles.lineTitle}>Total</Text>
              <Text style={styles.linePrice}>AED 62.5</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderColor: "#F5F5F5",
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 36,
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: 58,
            borderRadius: 100,
            backgroundColor: Colors.PRIMARY,

            shadowColor: "#F77E34",
            shadowOffset: {
              width: 0,
              height: 9,
            },
            shadowOpacity: 0.48,
            shadowRadius: 11.95,

            elevation: 18,
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: "#fff",
            }}
          >
            Continue to Payment
          </Text>
          <Image
            style={{ width: 24, height: 24, marginLeft: 8 }}
            source={require("../assets/pay-arrow.png")}
          />
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
  row: { flexDirection: "row", alignItems: "center" },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight + 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  navText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.TEXT,
  },
  icon: { paddingVertical: 5, paddingRight: 10 },
  title: {
    fontSize: 20,
    fontWeight: "700",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  addressCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    height: 100,
    marginBottom: 20,
    marginHorizontal: 20,
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
  shippingLine: {
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  lineTitle: { fontSize: 14, fontWeight: "500", color: "#616161" },
  linePrice: { fontSize: 16, fontWeight: "600" },
});

export default Checkout;
