import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Keyboard,
} from "react-native";
import Colors from "../../utils/Colors";
import ReturnNavBar from "../../components/ReturnNavBar";
import ButtonPrimary from "../../components/ButtonPrimary";
import InputText from "../../components/InputText";
import Envelope from "../../assets/svg/envelope.svg";
import Phone from "../../assets/svg/phone.svg";
import Person from "../../assets/svg/person-outline.svg";
// import { Envelope } from "./Icons";

const SignupWithEmail = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    email: "",
    fullname: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    // checking fullname validation
    if (!inputs.fullname) {
      handleError("Please input fullname", "fullname");
      isValid = false;
    }

    // checking email validation
    const emailRegexp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    } else if (!emailRegexp.test(inputs.email)) {
      handleError("Please input a valid email", "email");
      isValid = false;
    }

    // checking phone validation
    const phoneRegEx = /^[0-9]{8,}$/;
    if (!inputs.phone) {
      handleError("Please enter your phone number", "phone");
      isValid = false;
    } else if (!phoneRegEx.test(inputs.phone)) {
      handleError("Please enter a correct phone number", "phone");
      isValid = false;
    }

    // checking password validation
    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    } else if (inputs.password.length < 8) {
      handleError("Min password length of 8", "password");
      isValid = false;
    }

    // checking confirm password validation
    if (!inputs.confirmPassword) {
      handleError("Please confirm your password", "confirmPassword");
      isValid = false;
    } else if (inputs.confirmPassword != inputs.password) {
      handleError("Password does not match", "confirmPassword");
      isValid = false;
    }

    // submit the form if is valid
    if (isValid) {
      // register();
    }
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <ReturnNavBar navigation={navigation} />
          <Text style={styles.headerText}>Sign Up</Text>
          <View style={{ marginBottom: 20 }}>
            <InputText
              onChangeText={(text) => handleOnchange(text, "fullname")}
              onFocus={() => handleError(null, "fullname")}
              error={errors.fullname}
              placeholder={"Full Name"}
              icon={<Person width={20} height={20} color={Colors.PRIMARY} />}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <InputText
              onChangeText={(text) => handleOnchange(text, "email")}
              onFocus={() => handleError(null, "email")}
              error={errors.email}
              placeholder={"Email"}
              icon={<Envelope width={20} height={20} color={Colors.PRIMARY} />}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <InputText
              onChangeText={(text) => handleOnchange(text, "phone")}
              onFocus={() => handleError(null, "phone")}
              error={errors.phone}
              placeholder={"Phone Number"}
              icon={<Phone width={20} height={20} color={Colors.PRIMARY} />}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <InputText
              onChangeText={(text) => handleOnchange(text, "password")}
              onFocus={() => handleError(null, "password")}
              error={errors.password}
              isPassword={true}
              placeholder={"Password"}
            />
          </View>
          <View style={{ marginBottom: 32 }}>
            <InputText
              onChangeText={(text) => handleOnchange(text, "confirmPassword")}
              onFocus={() => handleError(null, "confirmPassword")}
              error={errors.confirmPassword}
              isPassword={true}
              placeholder={"Confirm Password"}
            />
          </View>
          <View style={{ width: "100%", marginBottom: 32 }}>
            <ButtonPrimary title="Sign Up" onPress={() => validate()} />
          </View>
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
