import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import Colors from "../../utils/Colors";
import CartCard from "./CartCard";

const Cart = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Inukshuk",
      image: "https://i.postimg.cc/cCJg28Kn/Inukshuk-2616-1024x-1-2.png",
      count: 1,
      price: 40,
      isCompleted: false,
      isDelivered: false,
    },
    // {
    //   id: "2",
    //   name: "Inukshuk",
    //   image: "https://i.postimg.cc/cCJg28Kn/Inukshuk-2616-1024x-1-2.png",
    //   count: 3,
    //   price: 80,
    //   isCompleted: false,
    //   isDelivered: false,
    // },
    // {
    //   id: "2",
    //   name: "Inukshuk",
    //   image: "https://i.postimg.cc/cCJg28Kn/Inukshuk-2616-1024x-1-2.png",
    //   count: 3,
    //   price: 80,
    //   isCompleted: false,
    //   isDelivered: false,
    // },
    // {
    //   id: "2",
    //   name: "Inukshuk",
    //   image: "https://i.postimg.cc/cCJg28Kn/Inukshuk-2616-1024x-1-2.png",
    //   count: 3,
    //   price: 80,
    //   isCompleted: false,
    //   isDelivered: false,
    // },
    // {
    //   id: "2",
    //   name: "Inukshuk",
    //   image: "https://i.postimg.cc/cCJg28Kn/Inukshuk-2616-1024x-1-2.png",
    //   count: 3,
    //   price: 80,
    //   isCompleted: false,
    //   isDelivered: false,
    // },
    // {
    //   id: "2",
    //   name: "Inukshuk",
    //   image: "https://i.postimg.cc/cCJg28Kn/Inukshuk-2616-1024x-1-2.png",
    //   count: 3,
    //   price: 80,
    //   isCompleted: false,
    //   isDelivered: false,
    // },
  ]);
  return (
    <View style={styles.container}>
      {cartItems.map((item, index) => (
        <CartCard key={`cart-${index}`} item={item} navigation={navigation} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 20,
  },
});

export default Cart;
