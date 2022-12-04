import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import Colors from "../../utils/Colors";
import ReturnNavBar from "../../components/ReturnNavBar";
import ButtonPrimary from "../../components/ButtonPrimary";
import InputText from "../../components/InputText";
import Envelope from "../../assets/svg/envelope.svg";
import Phone from "../../assets/svg/phone.svg";
import Person from "../../assets/svg/person-outline.svg";
import { Formik } from "formik";
import * as yup from "yup";
import { useSignup } from "../../apis/auth/useSignup";

const SignupWithEmail = ({ navigation }) => {
  const signUpValidationSchema = yup.object().shape({
    fullname: yup.string().required("Full name is required"),
    phoneNumber: yup
      .string()
      .matches(/(\d){8}\b/, "Enter a valid phone number")
      .required("Phone number is required"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email is required"),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        "Password must have a special character"
      )
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords do not match")
      .required("Confirm password is required"),
  });

  const { isLoading, mutateAsync: SignUpUser } = useSignup();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <ReturnNavBar navigation={navigation} />
          <Text style={styles.headerText}>Sign Up</Text>
          <Formik
            initialValues={{
              fullname: "",
              phoneNumber: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={signUpValidationSchema}
            onSubmit={(values) => SignUpUser(values)}
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
                    name="fullname"
                    placeholder={"Full Name"}
                    onChangeText={handleChange("fullname")}
                    onBlur={handleBlur("fullname")}
                    value={values.fullname}
                    icon={
                      <Person width={20} height={20} color={Colors.PRIMARY} />
                    }
                  />
                  {errors.fullname && touched.fullname && (
                    <Text style={{ fontSize: 12, color: "red", marginTop: 7 }}>
                      {errors.fullname}
                    </Text>
                  )}
                </View>
                <View style={{ marginBottom: 20 }}>
                  <InputText
                    name="email"
                    placeholder={"Email"}
                    keyboardType="email-address"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    icon={
                      <Envelope width={20} height={20} color={Colors.PRIMARY} />
                    }
                  />
                  {errors.email && touched.email && (
                    <Text style={{ fontSize: 12, color: "red", marginTop: 7 }}>
                      {errors.email}
                    </Text>
                  )}
                </View>
                <View style={{ marginBottom: 20 }}>
                  <InputText
                    name="phoneNumber"
                    placeholder={"Phone Number"}
                    onChangeText={handleChange("phoneNumber")}
                    onBlur={handleBlur("phoneNumber")}
                    value={values.phoneNumber}
                    icon={
                      <Phone width={20} height={20} color={Colors.PRIMARY} />
                    }
                  />
                  {errors.phoneNumber && touched.phoneNumber && (
                    <Text style={{ fontSize: 12, color: "red", marginTop: 7 }}>
                      {errors.phoneNumber}
                    </Text>
                  )}
                </View>
                <View style={{ marginBottom: 20 }}>
                  <InputText
                    name="password"
                    placeholder={"Password"}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    isPassword={true}
                  />
                  {errors.password && touched.password && (
                    <Text style={{ fontSize: 12, color: "red", marginTop: 7 }}>
                      {errors.password}
                    </Text>
                  )}
                </View>
                <View style={{ marginBottom: 32 }}>
                  <InputText
                    name="confirmPassword"
                    placeholder={"Confirm Password"}
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    value={values.confirmPassword}
                    isPassword={true}
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <Text style={{ fontSize: 12, color: "red", marginTop: 7 }}>
                      {errors.confirmPassword}
                    </Text>
                  )}
                </View>
                <View style={{ width: "100%", marginBottom: 32 }}>
                  <ButtonPrimary
                    title={isLoading ? "Loading..." : "Sign Up"}
                    onPress={handleSubmit}
                    disabled={!isValid}
                  />
                </View>
              </>
            )}
          </Formik>

          <View
            style={[styles.row, { marginBottom: 32, justifyContent: "center" }]}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                color: Colors.TEXT_GRAY,
              }}
            >
              Already have an account?{" "}
            </Text>
            <Pressable onPress={() => navigation.navigate("signin-with-email")}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: Colors.PRIMARY,
                }}
              >
                Sign In
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: { flex: 1, marginHorizontal: 20 },
  row: { flexDirection: "row" },
  center: { justifyContent: "center", alignItems: "center" },
  headerText: {
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 32,
  },
});

export default SignupWithEmail;
