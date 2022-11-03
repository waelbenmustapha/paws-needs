import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../utils/Colors";

const SeeAll = ({ text, onpress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity onPress={() => onpress()}>
        <Text style={styles.seeall}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},
  text: {fontSize:18,fontWeight:"bold",color:Colors.TEXT},
  seeall: {fontSize:16,fontWeight:"bold",color:Colors.PRIMARY},
});
export default SeeAll;
