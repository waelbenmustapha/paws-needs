import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import Colors from "../../utils/Colors";
import ReturnNavBar from "../../components/ReturnNavBar";
import ButtonPrimary from "../../components/ButtonPrimary";
import InputText from "../../components/InputText";
import Envelope from "../../assets/svg/envelope.svg";
import Phone from "../../assets/svg/phone.svg";
import Person from "../../assets/svg/person-outline.svg";
// import { Envelope } from "./Icons";

const SignupWithEmail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <ReturnNavBar navigation={navigation} />
          <Text style={styles.headerText}>Sign Up</Text>
          <View style={{ marginBottom: 20 }}>
            <InputText
              placeholder={"Full Name"}
              icon={<Person width={20} height={20} color={Colors.PRIMARY} />}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <InputText
              placeholder={"Email"}
              icon={<Envelope width={20} height={20} color={Colors.PRIMARY} />}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <InputText
              placeholder={"Phone Number"}
              icon={<Phone width={20} height={20} color={Colors.PRIMARY} />}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <InputText isPassword={true} placeholder={"Password"} />
          </View>
          <View style={{ marginBottom: 32 }}>
            <InputText isPassword={true} placeholder={"Confirm Password"} />
          </View>
          <View style={{ width: "100%", marginBottom: 32 }}>
            <ButtonPrimary title="Sign Up" />
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
