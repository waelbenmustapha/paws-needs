import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";
import ReturnNavBar from "../../components/ReturnNavBar";
import ButtonPrimary from "../../components/ButtonPrimary";
import InputText from "../../components/InputText";
import Envelope from "../../assets/svg/envelope.svg";
import { Formik } from "formik";
import * as yup from "yup";
import { useSignin } from "../../apis/auth/useSignin";

const SigninWithEmail = ({ navigation }) => {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });

  const { isLoading, mutateAsync: SigninUser } = useSignin();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <ReturnNavBar navigation={navigation} />
          <Text style={styles.headerText}>Sign In</Text>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginValidationSchema}
            onSubmit={(values) => SigninUser(values)}
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

                <View style={{ marginBottom: 12 }}>
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
                <Pressable style={{ marginBottom: 32 }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "400",
                      color: Colors.TEXT_GRAY,
                      textAlign: "right",
                      textDecorationLine: "underline",
                    }}
                  >
                    Forgot Password?
                  </Text>
                </Pressable>
                <View style={{ width: "100%", marginBottom: 32 }}>
                  <ButtonPrimary
                    title={isLoading ? "Loading..." : "Sign In"}
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
              Don’t have an account?{" "}
            </Text>
            <Pressable onPress={() => navigation.navigate("signup-with-email")}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: Colors.PRIMARY,
                }}
              >
                Sign Up
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

export default SigninWithEmail;
