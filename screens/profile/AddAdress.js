import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Pressable,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../utils/Colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import InputText from "../../components/InputText";
import Feather from "react-native-vector-icons/Feather";
import MapModal from "../../components/modals/MapModal";

const AddAdress = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
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
          <Text style={styles.navText}>Address</Text>
        </View>
      </View>

      <View style={{ flex: 1, position: "relative" }}>
        <View
          style={{ height: "30%", width: "100%", position: "absolute", top: 0 }}
        >
          {location ? (
            <MapView
              key={location.latitude}
              rotateEnabled={false}
              scrollEnabled={false}
              zoomEnabled={false}
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.016,
                longitudeDelta: 0.025,
              }}
              provider={PROVIDER_GOOGLE}
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Marker
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
              >
                <View
                  style={{
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    resizeMode="contain"
                    style={{ height: 60 }}
                    source={require("../../assets/mapholder.png")}
                  />
                  <View
                    style={{
                      position: "absolute",
                      top: 6,
                      borderColor: "white",
                      borderStyle: "solid",
                      borderWidth: 4,
                      borderRadius: 999,
                    }}
                  >
                    <Image
                      style={{
                        height: 30,
                        width: 30,

                        borderRadius: 30 / 2,
                      }}
                      source={require("../../assets/avatar.png")}
                    />
                  </View>
                </View>
              </Marker>
            </MapView>
          ) : (
            <ImageBackground
              resizeMode="cover"
              style={{
                width: "100%",
                justifyContent: "center",
                height: "100%",
              }}
              source={require("../../assets/defaultmap.png")}
            >
              <View
                style={{
                  position: "relative",
                  marginBottom: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ height: 60 }}
                  source={require("../../assets/mapholder.png")}
                />
                <View
                  style={{
                    position: "absolute",
                    top: 6,
                    borderColor: "white",
                    borderStyle: "solid",
                    borderWidth: 4,

                    borderRadius: 999,
                  }}
                >
                  <Image
                    style={{
                      height: 30,
                      width: 30,

                      borderRadius: 30 / 2,
                    }}
                    source={require("../../assets/avatar.png")}
                  />
                </View>
              </View>
            </ImageBackground>
          )}
        </View>
        <MapModal
          marker={location}
          setMarker={setLocation}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <View
          style={{
            height: "75%",
            width: "100%",
            backgroundColor: "white",
            borderTopEndRadius: 40,
            borderTopStartRadius: 40,
            paddingHorizontal: 20,
            position: "absolute",
            alignItems: "center",
            bottom: 0,
          }}
        >
          <View
            style={{
              height: 3,
              width: 40,
              backgroundColor: "#E0E0E0",
              borderRadius: 100,
              marginTop: 8,
              marginBottom: 24,
            }}
          />
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            Address Details
          </Text>
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#E0E0E0",
              borderRadius: 100,
              marginTop: 24,
              marginBottom: 24,
            }}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width: "100%", minHeight: 150 }}
          >
            <View style={{ marginBottom: 24 }}>
              <InputText placeholder={"Name"}></InputText>
            </View>
            <View style={{ marginBottom: 24 }}>
              <InputText placeholder={"Area"}></InputText>
            </View>
            <View style={{ marginBottom: 24 }}>
              <InputText placeholder={"Street Name"}></InputText>
            </View>
            <View style={{ marginBottom: 24 }}>
              <InputText
                placeholder={"Building /Villa Name/Floor/Appartment"}
              ></InputText>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}
                style={[
                  {
                    display: "flex",
                    backgroundColor: Colors.DARK_BG,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 20,
                    borderRadius: 12,
                    paddingHorizontal: 20,
                    height: 56,
                  },
                ]}
              >
                <TextInput
                  placeholder={"f"}
                  style={{ color: "#9E9E9E", fontSize: 14 }}
                  editable={false}
                  value={"Gps Location"}
                ></TextInput>
                {location ? (
                  <Feather
                    name="check-circle"
                    size={24}
                    color={Colors.PRIMARY}
                  />
                ) : (
                  <Feather name="map-pin" size={24} color={Colors.TEXT_GRAY} />
                )}
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View
            style={{
              backgroundColor: "#fff",
              paddingTop: 20,
              marginTop: 20,
              width: "100%",
              paddingBottom: 36,
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: 58,
                borderRadius: 100,
                backgroundColor: Colors.PRIMARY,

                shadowColor: "#F77E34",
                shadowOffset: {
                  width: 0,
                  height: 9,
                },
                shadowOpacity: 0.48,
                shadowRadius: 11.95,

                elevation: 18,
              }}
            >
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  color: "#fff",
                }}
              >
                Save
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 0,
    justifyContent: "space-between",
  },
  row: { flexDirection: "row", alignItems: "center" },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    alignItems: "center",
    paddingTop: StatusBar.currentHeight + 20,
    paddingBottom: 20,
  },
  navText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.TEXT,
  },
  icon: { paddingVertical: 5, paddingRight: 10 },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: Colors.DARK_BG,
  },
});
export default AddAdress;
