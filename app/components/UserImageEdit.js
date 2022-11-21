import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const UserImageEdit = ({image}) => {
  return (
    <View style={styles.container}>
      <View style={{ position: "relative" }}>
        <Image source={image} style={styles.img} />
        <TouchableOpacity style={{ position: "absolute", right: 3, bottom: 3 }}>
          <Image
            source={require("../assets/editfilled.png")}
            style={styles.editicon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  img: { height: 120, width: 120, borderRadius: 9999 },
  editicon: { height: 25, width: 25 },
});
export default UserImageEdit;
