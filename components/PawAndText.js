import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Colors from "../utils/Colors";

const PawAndText = ({Component}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoAndTextContainer}>
        <Image
          style={styles.image}
          source={require("../assets/logo-paw.png")}
        />
        <Text style={styles.text}>Shops</Text>
      </View>
      <Component/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoAndTextContainer:{
    alignItems:"center",
    display:"flex",
    flexDirection:"row"
  },
  image: {
    height: 36,
    width: 36,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.TEXT,
    marginLeft: 20,
  },
});

export default PawAndText;
