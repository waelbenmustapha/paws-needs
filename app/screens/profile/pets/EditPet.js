import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../../utils/Colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import UserImageEdit from "../../../components/UserImageEdit";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as yup from "yup";
import CloseFillIcon from "../../../assets/svg/close-fill.svg";
import avatarimg from "../../../assets/dogavatar.png";
import InputText from "../../../components/InputText";
import KgIcon from "../../../assets/svg/kg.svg";
import SelectBottomSheet from "../../../components/bottomsheet/SelectBottomSheet";
import { Formik } from "formik";
import ButtonPrimary from "../../../components/ButtonPrimary";
import { useCreatePet } from "../../../apis/pets/useCreatePet";
import { useAuth } from "../../../context/AuthProvider";
import { useEditPet } from "../../../apis/pets/useEditPet";
const EditPet = ({ navigation, route }) => {
  const [apiError, setApiError] = useState("");
  const auth = useAuth();
  const { isLoading, isError, mutateAsync: fnEdit } = useEditPet();
  const profileValidationSchema = yup.object().shape({
    name: yup.string().required("name is required"),
    type: yup.string().not(["Type"], "type is required"),
    breed: yup.string().required("breed is required"),
    gender: yup.string().equals(["Male", "Female"], "gender is required"),
    weight: yup
      .number()
      .typeError("you must specify a number")
      .required("Weight is required"),
  });
  const id = auth.getAsyncUserId();
  const petToEdit = route.params.pet;
  const [bottomSheetOpenTypes, setBottomSheetOpenTypes] = useState(false);
  const bottomSheetValues = [
    { label: "Dog", value: "Dog" },
    { label: "Cat", value: "Cat" },
    { label: "Rabbit", value: "Rabbit" },
    { label: "Turtle", value: "Turtle" },
    { label: "Parrot", value: "Parrot" },
    { label: "Dog", value: "Dog" },
    { label: "Cat", value: "Cat" },
    { label: "Rabbit", value: "Rabbit" },
    { label: "Turtle", value: "Turtle" },
    { label: "Parrot", value: "Parrot" },
    { label: "Dog", value: "Dog" },
    { label: "Cat", value: "Cat" },
    { label: "Rabbit", value: "Rabbit" },
    { label: "Turtle", value: "Turtle" },
  ];
  const [bottomSheetOpenGender, setBottomSheetOpenGender] = useState(false);
  const Gendersvalues = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  const [bottomSheetOpenDetails, setBottomSheetOpenDetails] = useState(false);
  const detailsValues = [
    { label: "Calm", value: "Calm" },
    { label: "Agressive", value: "Agressive" },
    { label: "Exampledata", value: "Exampledata" },
    { label: "more data", value: "more data" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.nav}>
          <View style={styles.row}>
            <AntDesign
              onPress={() => navigation.goBack()}
              style={styles.icon}
              name="arrowleft"
              size={24}
              color={Colors.PRIMARY}
            />
            <Text style={styles.navText}>Edit Pet</Text>
          </View>
        </View>
        <Formik
          initialValues={{
            name: petToEdit.name,
            type: petToEdit.type,
            breed: petToEdit.breed,
            userId: id,
            image: petToEdit.empty,
            gender: petToEdit.gender,
            weight: petToEdit.weight.toString(),
            moredetails: petToEdit.moredetails,
            description: petToEdit.description,
          }}
          validationSchema={profileValidationSchema}
          onSubmit={(values) => {
            console.log(values);
            fnEdit({ ...values, _id: petToEdit._id })
              .then((result) => {
                if (result.success == true) {
                  navigation.navigate("mypets");
                } else {
                  // console.log(result.status);
                  // console.log(result.data);
                  console.log("error");
                  setApiError("Something Went Wrong");
                }
              })
              .catch((error) => {
                // console.log("error happen while Sign In");
                // console.log(error);
                console.log("error");

                setApiError("Something Went Wrong");
              });
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldTouched,
            isValid,
          }) => (
            <>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingVertical: 40 }}>
                  <View style={{ marginBottom: 32 }}>
                    <UserImageEdit image={avatarimg} />
                  </View>
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
                  <View style={{ marginBottom: 20 }}>
                    <InputText
                      name="name"
                      placeholder={"Name"}
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
                    <TouchableOpacity
                      onPress={() => {
                        setFieldTouched("type", true);

                        setBottomSheetOpenTypes(true);
                      }}
                      style={{
                        height: 56,
                        paddingHorizontal: 20,
                        borderRadius: 12,
                        backgroundColor: Colors.DARK_BG,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "400",
                          color: Colors.TEXT_GRAY,
                        }}
                      >
                        {values.type}
                      </Text>
                      <Ionicons
                        name="caret-down"
                        size={14}
                        color={Colors.PRIMARY}
                      />
                    </TouchableOpacity>
                    {errors.type && touched.type && (
                      <Text
                        style={{ fontSize: 12, color: "red", marginTop: 7 }}
                      >
                        {errors.type}
                      </Text>
                    )}
                  </View>
                  <View style={{ marginBottom: 20 }}>
                    <InputText
                      name="breed"
                      placeholder={"Breed"}
                      onChangeText={handleChange("breed")}
                      onBlur={handleBlur("breed")}
                      value={values.breed}
                      // error={errors.fullname && touched.fullname}
                    />
                    {errors.breed && touched.breed && (
                      <Text
                        style={{ fontSize: 12, color: "red", marginTop: 7 }}
                      >
                        {errors.breed}
                      </Text>
                    )}
                  </View>
                  <View style={{ marginBottom: 20 }}>
                    <TouchableOpacity
                      onPress={() => {
                        setFieldTouched("gender", true);
                        setBottomSheetOpenGender(true);
                      }}
                      style={{
                        height: 56,
                        paddingHorizontal: 20,
                        borderRadius: 12,
                        backgroundColor: Colors.DARK_BG,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "400",
                          color: Colors.TEXT_GRAY,
                        }}
                      >
                        {values.gender}
                      </Text>
                      <Ionicons
                        name="caret-down"
                        size={14}
                        color={Colors.PRIMARY}
                      />
                    </TouchableOpacity>
                    {errors.gender && touched.gender && (
                      <Text
                        style={{ fontSize: 12, color: "red", marginTop: 7 }}
                      >
                        {errors.gender}
                      </Text>
                    )}
                  </View>
                  <View style={{ marginBottom: 20 }}>
                    <InputText
                      name="weight"
                      placeholder={"Weight"}
                      value={values.weight}
                      onChangeText={handleChange("weight")}
                      onBlur={handleBlur("weight")}
                      // error={errors.fullname && touched.fullname}
                      icon={<KgIcon color={Colors.PRIMARY} />}
                    />
                    {errors.weight && touched.weight && (
                      <Text
                        style={{ fontSize: 12, color: "red", marginTop: 7 }}
                      >
                        {errors.weight}
                      </Text>
                    )}
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      setBottomSheetOpenDetails(true);
                    }}
                    style={{
                      height: 56,
                      paddingHorizontal: 20,
                      marginBottom: 20,
                      borderRadius: 12,
                      backgroundColor: Colors.DARK_BG,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "400",
                        color: Colors.TEXT_GRAY,
                      }}
                    >
                      {values.moredetails}
                    </Text>
                    <Ionicons
                      name="caret-down"
                      size={14}
                      color={Colors.PRIMARY}
                    />
                  </TouchableOpacity>
                  <TextInput
                    multiline={true}
                    name="description"
                    onChangeText={handleChange("description")}
                    onBlur={handleBlur("description")}
                    value={values.description}
                    numberOfLines={3}
                    placeholder={"Description"}
                    style={[
                      styles.input,
                      { minHeight: 100, textAlignVertical: "top" },
                    ]}
                  />
                  {errors.description && touched.description && (
                    <Text style={{ fontSize: 12, color: "red", marginTop: 7 }}>
                      {errors.description}
                    </Text>
                  )}
                </View>
              </ScrollView>
              <View
                style={{
                  backgroundColor: "#fff",
                  paddingTop: 20,
                  paddingBottom: 32,
                }}
              >
                <View style={{ width: "100%" }}>
                  <ButtonPrimary
                    title={isLoading ? "Loading..." : "Update"}
                    onPress={handleSubmit}
                    disabled={!isValid || isLoading}
                  />
                </View>
              </View>

              <SelectBottomSheet
                bottomSheetOpen={bottomSheetOpenTypes}
                setBottomSheetOpen={setBottomSheetOpenTypes}
                setValue={handleChange("type")}
                title={"Type"}
                data={bottomSheetValues}
              />
              <SelectBottomSheet
                bottomSheetOpen={bottomSheetOpenGender}
                setBottomSheetOpen={setBottomSheetOpenGender}
                setValue={handleChange("gender")}
                title={"Genders"}
                data={Gendersvalues}
              />
              <SelectBottomSheet
                bottomSheetOpen={bottomSheetOpenDetails}
                setBottomSheetOpen={setBottomSheetOpenDetails}
                setValue={handleChange("moredetails")}
                title={"More Details"}
                data={detailsValues}
              />
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,

    justifyContent: "space-between",
  },
  row: { flexDirection: "row", alignItems: "center" },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
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

export default EditPet;
