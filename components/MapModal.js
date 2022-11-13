import { View, Text, StyleSheet, Modal, Dimensions, Alert } from "react-native";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";

const MapModal = ({modalVisible,setModalVisible,marker,setMarker}) => {

  
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text
            onPress={() => {
              setModalVisible(false);
              setMarker(null);
            }}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 1,
              padding: 5,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            X
          </Text>
          <Text
            onPress={() => {
              if (marker) {
                setModalVisible(false);

              } else {
                Alert.alert("Please select a location");
              }
            }}
            style={{
              position: "absolute",
              bottom: 10,
              zIndex: 1,
              color: "rgba(255,255,255,0.8)",
              paddingHorizontal: 8,
              paddingVertical: 3,
              borderRadius: 10,
              backgroundColor: "rgba(133,196,65,0.8)",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Save
          </Text>
          <MapView
            onLongPress={(e) => {
              setMarker(e.nativeEvent.coordinate);
            }}
            style={{
              width: Dimensions.get("window").width * 0.8,
              height: Dimensions.get("window").height * 0.8,
            }}
          >
            {marker && <Marker  coordinate={marker} />}
          </MapView>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      position: "relative",
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      overflow: "hidden",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
 
 
   
  
  
  });
export default MapModal;
