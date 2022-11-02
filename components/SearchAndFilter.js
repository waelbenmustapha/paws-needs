import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";

const SearchAndFilter = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/search.png")}
        style={styles.searchimg}
      />
      <TextInput placeholder={placeholder} style={styles.input} />
      <Image
        source={require("../assets/filter.png")}
        style={styles.searchimg}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 56,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: "#F5F5F5",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchimg: {
    height: 16,
    width: 16,
  },
  input: {
    flex: 1,
    marginHorizontal: 13,
  },
});
export default SearchAndFilter;
