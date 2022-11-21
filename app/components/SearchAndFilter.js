import { View, StyleSheet, TextInput } from "react-native";
import React from "react";
import Colors from "../utils/Colors";
import SearchIcon from "../assets/svg/search.svg";
import FilterIcon from "../assets/svg/filter.svg";

const SearchAndFilter = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <SearchIcon width={18} height={18} color={Colors.LIGHT_GRAY} />
      <TextInput placeholder={placeholder} style={styles.input} />
      <FilterIcon width={18} height={18} color={Colors.PRIMARY} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    marginHorizontal: 13,
  },
});
export default SearchAndFilter;
