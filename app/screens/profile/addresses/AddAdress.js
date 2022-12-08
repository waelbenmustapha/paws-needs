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
import Colors from "../../../utils/Colors";
import CloseFillIcon from "../../../assets/svg/close-fill.svg";

import AntDesign from "react-native-vector-icons/AntDesign";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import InputText from "../../../components/InputText";
import Feather from "react-native-vector-icons/Feather";
import MapModal from "../../../components/modals/MapModal";
import { Formik } from "formik";
import * as yup from "yup";
import ButtonPrimary from "../../../components/ButtonPrimary";
import { useCreateAddress } from "../../../apis/addresses/useCreateAddress";
import { useAuth } from "../../../context/AuthProvider";

const AddAdress = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const auth = useAuth();
  const id = auth.getAsyncUserId();
  const [apiError, setApiError] = useState("");
  const [mapTouched, setMaPTouched] = useState(false);
  const { isLoading, mutateAsync: fnAddAddress } = useCreateAddress();
  const addressValidationSchema = yup.object().shape({
    name: yup.string().required("name is required"),
    street: yup.string().required("street is required"),
    area: yup.string().required("area is required"),
    building: yup.string().required("building location is required"),
  });

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
                    source={require("../../../assets/mapholder.png")}
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
                      source={require("../../../assets/avatar.png")}
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
              source={require("../../../assets/defaultmap.png")}
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
                  source={require("../../../assets/mapholder.png")}
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
                    source={require("../../../assets/avatar.png")}
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
          {apiError ? (
            <View
              style={{
                width: "100%",
                marginBottom: 32,
                backgroundColor: "rgba(234, 0, 0, 0.1)",
                padding: 12,
                borderRadius: 5,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CloseFillIcon
                onPress={() => setApiError("")}
                width={20}
                height={20}
                color={"red"}
              />
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "400",
                    color: "red",
                    marginLeft: 12,
                  }}
                >
                  {apiError}
                </Text>
              </View>
            </View>
          ) : null}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width: "100%", minHeight: 150 }}
          >
            <Formik
              initialValues={{
                name: "",
                area: "",
                street: "",
                building: "",
                longitude: "",
                latitude: "",
                userId: id,
              }}
              validationSchema={addressValidationSchema}
              onSubmit={(values) => {
                if (location) {
                  fnAddAddress({
                    ...values,
                    latitude: location.latitude,
                    longitude: location.longitude,
                  })
                    .then((result) => {
                      if (result.success == true) {
                        navigation.navigate("myaddresses");
                      } else {
                        // console.log(result.status);
                        // console.log(result.dat/a);
                        setApiError("Something Went Wrong");
                      }
                    })
                    .catch((error) => {
                      // console.log("error happen while Sign In");
                       console.log(error);
                      setApiError("Something Went Wrong");
                    });
                } else {
                  setMaPTouched(true);
                }
              }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isValid,
              }) => (
                <>
                  <View style={{ marginBottom: 20 }}>
                    <InputText
                      name="name"
                      placeholder={"name"}
                      onChangeText={handleChange("name")}
                      onBlur={handleBlur("name")}
                      value={values.name}
                      // error={errors.fullname && touched.fullname}
                    />
                    {errors.name && touched.name && (
                      <Text
                        style={{ fontSize: 12, color: "red", marginTop: 7 }}
                      >
                        {errors.name}
                      </Text>
                    )}
                  </View>
                  <View style={{ marginBottom: 20 }}>
                    <InputText
                      name="area"
                      placeholder={"area"}
                      onChangeText={handleChange("area")}
                      onBlur={handleBlur("area")}
                      value={values.area}
                      // error={errors.fullname && touched.fullname}
                    />
                    {errors.area && touched.area && (
                      <Text
                        style={{ fontSize: 12, color: "red", marginTop: 7 }}
                      >
                        {errors.area}
                      </Text>
                    )}
                  </View>
                  <View style={{ marginBottom: 20 }}>
                    <InputText
                      name="street"
                      placeholder={"street"}
                      onChangeText={handleChange("street")}
                      onBlur={handleBlur("street")}
                      value={values.street}
                      // error={errors.fullname && touched.fullname}
                    />
                    {errors.street && touched.street && (
                      <Text
                        style={{ fontSize: 12, color: "red", marginTop: 7 }}
                      >
                        {errors.street}
                      </Text>
                    )}
                  </View>
                  <View style={{ marginBottom: 20 }}>
                    <InputText
                      name="building"
                      placeholder={"Building /Villa Name/Floor/Appartment"}
                      onChangeText={handleChange("building")}
                      onBlur={handleBlur("building")}
                      value={values.building}
                      // error={errors.fullname && touched.fullname}
                    />
                    {errors.building && touched.building && (
                      <Text
                        style={{ fontSize: 12, color: "red", marginTop: 7 }}
                      >
                        {errors.building}
                      </Text>
                    )}
                  </View>

                  <View style={{ marginBottom: 20 }}>
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
                        <Feather
                          name="map-pin"
                          size={24}
                          color={Colors.TEXT_GRAY}
                        />
                      )}
                    </TouchableOpacity>
                    {!location && mapTouched && (
                      <Text
                        style={{ fontSize: 12, color: "red", marginTop: 7 }}
                      >
                        Gps Location Is Required
                      </Text>
                    )}
                  </View>
                  <View
                    style={{
                      backgroundColor: "#fff",
                      paddingTop: 20,
                      paddingBottom: 32,
                    }}
                  >
                    <View style={{ width: "100%" }}>
                      <ButtonPrimary
                        title={isLoading ? "Loading..." : "Create"}
                        onPress={() => {
                          handleSubmit();
                          setMaPTouched(true);
                        }}
                        disabled={!isValid || isLoading}
                      />
                    </View>
                  </View>
                </>
              )}
            </Formik>
          </ScrollView>
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
