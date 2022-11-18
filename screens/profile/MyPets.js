import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import useHideBottomBar from "../../hooks/useHideBottomBar";

const MyPets = ({navigation}) => {


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
          <Text style={styles.navText}>My Pets</Text>
        </View>
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
});

export default MyPets;

