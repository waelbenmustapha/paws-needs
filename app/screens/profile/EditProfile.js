import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../../utils/Colors";
import UserImageEdit from "../../components/UserImageEdit";
import InputText from "../../components/InputText";
import avatarimg from "../../assets/avatar.png";
import Envelope from "../../assets/svg/envelope.svg";
import Phone from "../../assets/svg/phone.svg";
import Person from "../../assets/svg/person-outline.svg";
import { useAuth } from "../../context/AuthProvider";
import { Formik } from "formik";
import * as yup from "yup";
import ButtonPrimary from "../../components/ButtonPrimary";
import ReturnNavBar from "../../components/ReturnNavBar";
import { useEditProfile } from "../../apis/user/useEditProfile";
import ErrorView from "../../components/ErrorView";

const EditProfile = ({ navigation }) => {
  const auth = useAuth();
  const [userData, setUserData] = useState(null);
  const [apiError, setApiError] = useState("");

  async function getUser() {
    const data = await auth.getAsyncUser();
    setUserData(data.user);
  }

  useEffect(() => {
    getUser();
  }, []);

  const profileValidationSchema = yup.object().shape({
    fullname: yup.string().required("Full name is required"),
    phoneNumber: yup
      .string()
      .matches(/(\d){8}\b/, "Enter a valid phone number")
      .nullable(),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email is required"),
  });

  const { isLoading, mutateAsync: updateProfile } = useEditProfile({
    setApiError,
  });

  return (
    <View style={styles.container}>
      <ReturnNavBar
        title={"Edit Profile"}
        arrowColor={Colors.PRIMARY}
        navigation={navigation}
      />
      {!userData ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size={50} color={Colors.PRIMARY} />
        </View>
      ) : (
        <Formik
          initialValues={{
            fullname: userData.fullname,
            email: userData.email,
            phoneNumber: userData.phoneNumber,
          }}
          validationSchema={profileValidationSchema}
          onSubmit={(values) => updateProfile(values)}
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
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingVertical: 40 }}>
                  <View style={{ marginBottom: 32 }}>
                    <UserImageEdit image={avatarimg} />
                  </View>

                  {apiError ? (
                    <ErrorView message={apiError} setError={setApiError} />
                  ) : null}

                  <View style={{ marginBottom: 20 }}>
                    <InputText
                      name="fullname"
                      placeholder={"Full Name"}
                      label="Full Name:"
                      onChangeText={handleChange("fullname")}
                      onBlur={handleBlur("fullname")}
                      value={values.fullname}
                      // error={errors.fullname && touched.fullname}
                      icon={
                        <Person width={20} height={20} color={Colors.PRIMARY} />
                      }
                    />
                    {errors.fullname && touched.fullname && (
                      <Text
                        style={{ fontSize: 12, color: "red", marginTop: 7 }}
                      >
                        {errors.fullname}
                      </Text>
                    )}
                  </View>
                  <View style={{ marginBottom: 20 }}>
                    <InputText
                      name="email"
                      placeholder={"Email"}
                      label="Email:"
                      keyboardType="email-address"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      // error={errors.email && touched.email}
                      icon={
                        <Envelope
                          width={20}
                          height={20}
                          color={Colors.PRIMARY}
                        />
                      }
                    />
                    {errors.email && touched.email && (
                      <Text
                        style={{ fontSize: 12, color: "red", marginTop: 7 }}
                      >
                        {errors.email}
                      </Text>
                    )}
                  </View>
                  <View style={{ marginBottom: 20 }}>
                    <InputText
                      name="phoneNumber"
                      placeholder={"Phone Number"}
                      label="Phone Number:"
                      onChangeText={handleChange("phoneNumber")}
                      onBlur={handleBlur("phoneNumber")}
                      value={values.phoneNumber}
                      // error={errors.phoneNumber && touched.phoneNumber}
                      icon={
                        <Phone width={20} height={20} color={Colors.PRIMARY} />
                      }
                    />
                    {errors.phoneNumber && touched.phoneNumber && (
                      <Text
                        style={{ fontSize: 12, color: "red", marginTop: 7 }}
                      >
                        {errors.phoneNumber}
                      </Text>
                    )}
                  </View>
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
                    disabled={!isValid}
                  />
                </View>
              </View>
            </>
          )}
        </Formik>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  row: { flexDirection: "row", alignItems: "center" },
  inputContainer: {
    width: "100%",
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: Colors.DARK_BG,
  },
});

export default EditProfile;
