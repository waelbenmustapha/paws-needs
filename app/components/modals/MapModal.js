import { View, Text, StyleSheet, Modal, Dimensions, Alert } from "react-native";
import React, { useState } from "react";
import MapView, { Marker,PROVIDER_GOOGLE } from "react-native-maps";
import Colors from "../../utils/Colors";

const MapModal = ({ modalVisible, setModalVisible, marker, setMarker }) => {
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
              bottom: 20,
              zIndex: 1,
              color: "#fff",
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 5,
              backgroundColor: Colors.PRIMARY,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Save location
          </Text>
          <MapView
          provider={PROVIDER_GOOGLE}
            onLongPress={(e) => {
              setMarker(e.nativeEvent.coordinate);
            }}
            style={{
              width: Dimensions.get("window").width * 1,
              height: Dimensions.get("window").height * 1,
            }}
          >
            {marker && <Marker coordinate={marker} />}
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
  },
  modalView: {
    position: "relative",
    backgroundColor: "white",
    overflow: "hidden",
    alignItems: "center",
  },
});
export default MapModal;
