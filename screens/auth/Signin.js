import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import ReturnNavBar from "../../components/ReturnNavBar";
import ButtonPrimary from "../../components/ButtonPrimary";
import Colors from "../../utils/Colors";

const Signin = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.center, styles.content]}>
          <ReturnNavBar navigation={navigation} />
          <Image
            style={styles.image}
            source={require("../../assets/social-signin.png")}
          />
          <Text style={styles.text}>Let’s get you in</Text>
          <Pressable style={[styles.social_button, styles.row]}>
            <Image
              style={styles.icon}
              source={require("../../assets/facebook.png")}
            />
            <Text style={styles.social_button_text}>
              Continue with Facebook
            </Text>
          </Pressable>
          <Pressable style={[styles.social_button, styles.row]}>
            <Image
              style={styles.icon}
              source={require("../../assets/google.png")}
            />
            <Text style={styles.social_button_text}>Continue with Google</Text>
          </Pressable>
          <Pressable style={[styles.social_button, styles.row]}>
            <Image
              style={styles.icon}
              source={require("../../assets/apple.png")}
            />
            <Text style={styles.social_button_text}>
              Continue with Apple ID
            </Text>
          </Pressable>
          <View
            style={[
              styles.row,
              styles.center,
              { marginTop: 20, marginBottom: 40, paddingHorizontal: 10 },
            ]}
          >
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "#EEEEEE",
              }}
            ></View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "#000",
                paddingHorizontal: 10,
              }}
            >
              OR
            </Text>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "#EEEEEE",
              }}
            ></View>
          </View>
          <View style={{ width: "100%", marginBottom: 40 }}>
            <ButtonPrimary
              title="Sign in with password"
              fnc={() => navigation.navigate("signin-with-email")}
            />
          </View>
          <View style={[styles.row, { marginBottom: 40 }]}>
            <Text style={{ fontSize: 16, fontWeight: "400", color: "#9E9E9E" }}>
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
  image: {
    width: Dimensions.get("window").width / 1.8,
    height: Dimensions.get("window").width / 2.1,
    resizeMode: "stretch",
    marginVertical: 20,
  },
  text: {
    fontSize: 42,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  social_button: {
    width: "100%",
    height: 56,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "stretch",
    marginRight: 16,
  },
  social_button_text: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Signin;
