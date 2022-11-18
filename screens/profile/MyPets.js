import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";
import AntDesign from "react-native-vector-icons/AntDesign";

const MyPets = ({navigation}) => {
  const pets = ["cat","dog","rabbit"]

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
      {pets.map((el)=><TouchableOpacity style={{backgroundColor:Colors.SECONDARY2,margin:10,padding:10,borderRadius:10}} key={el}><Text>{el}</Text></TouchableOpacity>)}
      <TouchableOpacity onPress={()=>navigation.navigate("addpet")} style={{backgroundColor:Colors.SECONDARY2,margin:10,marginTop:50,padding:10,borderRadius:10}} ><Text>ADD PET</Text></TouchableOpacity></View>
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

