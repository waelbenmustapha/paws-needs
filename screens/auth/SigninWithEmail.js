import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";
import { useAuth } from "../../context/AuthProvider";
import ReturnNavBar from "../../components/ReturnNavBar";
import ButtonPrimary from "../../components/ButtonPrimary";
import InputText from "../../components/InputText";
import Envelope from "../../assets/svg/envelope.svg";

const SigninWithEmail = ({ navigation }) => {
  const auth = useAuth();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <ReturnNavBar navigation={navigation} />
          <Text style={styles.headerText}>Sign In</Text>
          <View style={{ marginBottom: 20 }}>
            <InputText
              placeholder={"Email"}
              icon={<Envelope width={20} height={20} color={Colors.PRIMARY} />}
            />
          </View>
          <View style={{ marginBottom: 12 }}>
            <InputText isPassword={true} placeholder={"Password"} />
          </View>
          <Pressable style={{ marginBottom: 32 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: "#9E9E9E",
                textAlign: "right",
                textDecorationLine: "underline",
              }}
            >
              Forgot Password?
            </Text>
          </Pressable>
          <View style={{ width: "100%", marginBottom: 32 }}>
            <ButtonPrimary
              title="Sign In"
              fnc={() => auth.login({ name: "wael" })}
            />
          </View>
          <View
            style={[styles.row, { marginBottom: 32, justifyContent: "center" }]}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                color: "#9E9E9E",
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
