import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const ShopPage = ({navigation,route}) => {
    const shop = route.params.shop;
  return (
    <View>
        <StatusBar translucent={true}/>
      <ImageBackground  source={{ uri: shop.image }} style={{height:250,width:"100%"}}>
        <Text style={styles.header}>{"<-"} {shop.name}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {},
    header:{
        color:"white",fontSize:20,
        marginTop:80,
        paddingHorizontal:30
    }
  
  
  });
export default ShopPage;
