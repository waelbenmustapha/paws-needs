import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Pressable,
  Platform,
} from "react-native";
import React, { useState } from "react";
import ReturnNavBar from "../../components/ReturnNavBar";
import ButtonPrimary from "../../components/ButtonPrimary";
import Colors from "../../utils/Colors";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import ErrorView from "../../components/ErrorView";
import LoadingScreen from "../../components/LoadingScreen";
import { useFacebookSignin } from "../../apis/auth/useFacebookSignin";
import { useGoogleSignin } from "../../apis/auth/useGoogleSignin";

const Signin = ({ navigation }) => {
  const [apiError, setApiError] = useState("");
  // facebook mutation
  const mutateFacebook = useFacebookSignin({
    setApiError,
  });
  // google mutation
  const mutateGoogle = useGoogleSignin({
    setApiError,
  });

  // login with facebook
  function handleFacebookLogin() {
    LoginManager.logOut();
    LoginManager.logInWithPermissions(["public_profile", "email"]).then(
      function (result) {
        if (result.isCancelled) {
          alert("Login Cancelled");
        } else {
          if (Platform.OS === "ios") {
            // IOS Platform
            AuthenticationToken.getAuthenticationTokenIOS().then((data) => {
              if (data?.authenticationToken) {
                mutateFacebook.mutateAsync({
                  token: data?.authenticationToken,
                });
              }
            });
          } else {
            // Android Platform or other
            AccessToken.getCurrentAccessToken().then((data) => {
              if (data?.accessToken) {
                mutateFacebook.mutateAsync({
                  token: data?.accessToken.toString(),
                });
              }
            });
          }
        }
      },
      function (error) {
        alert("Login failed with error: " + error);
      }
    );
  }

  //logout google
  async function signOut() {
    try {
      await GoogleSignin.signOut();
      // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  }

  // login with google
  async function handleGoogleLogin() {
    try {
      await signOut();
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      mutateGoogle.mutateAsync({ token: userInfo.idToken });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log("Login Cancelled");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log("In Progress");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        alert("Google Play Services not Available or Outdated");
      } else {
        // some other error happened
        alert("Something went Wrong");
      }
    }
  }

  return (
    <View style={styles.container}>
      {mutateFacebook.isLoading || mutateGoogle.isLoading ? (
        <LoadingScreen />
      ) : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.center, styles.content]}>
          <ReturnNavBar navigation={navigation} />
          <Image
            style={styles.image}
            source={require("../../assets/social-signin.png")}
          />
          <Text style={styles.text}>Let’s get you in</Text>
          {apiError ? (
            <ErrorView message={apiError} setError={setApiError} />
          ) : null}
          <Pressable
            onPress={() => {
              console.log("facebook");
              handleFacebookLogin();
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#fafafa" : "#fff",
              },
              styles.social_button,
              styles.row,
            ]}
          >
            <Image
              style={styles.icon}
              source={require("../../assets/facebook.png")}
            />
            <Text style={styles.social_button_text}>
              Continue with Facebook
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              console.log("google");
              handleGoogleLogin();
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#fafafa" : "#fff",
              },
              styles.social_button,
              styles.row,
            ]}
          >
            <Image
              style={styles.icon}
              source={require("../../assets/google.png")}
            />
            <Text style={styles.social_button_text}>Continue with Google</Text>
          </Pressable>
          {/* <Pressable
            onPress={() => {
              console.log("apple");
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#fafafa" : "#fff",
              },
              styles.social_button,
              styles.row,
            ]}
          >
            <Image
              style={styles.icon}
              source={require("../../assets/apple.png")}
            />
            <Text style={styles.social_button_text}>
              Continue with Apple ID
            </Text>
          </Pressable> */}
          <View
            style={[
              styles.row,
              styles.center,
              { marginTop: 12, marginBottom: 32, paddingHorizontal: 10 },
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
                fontSize: 14,
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
          <View style={{ width: "100%", marginBottom: 32 }}>
            <ButtonPrimary
              title="Sign in with password"
              onPress={() => navigation.navigate("signin-with-email")}
            />
          </View>
          <View style={[styles.row, { marginBottom: 32 }]}>
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
    position: "relative",
  },
  content: { flex: 1, marginHorizontal: 20 },
  row: { flexDirection: "row" },
  center: { justifyContent: "center", alignItems: "center" },
  image: {
    width: Dimensions.get("window").width / 1.9,
    height: Dimensions.get("window").width / 2.3,
    resizeMode: "stretch",
    marginTop: 20,
    marginBottom: 16,
  },
  text: {
    fontSize: 38,
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
