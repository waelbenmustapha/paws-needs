import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { useAuth } from "../context/AuthProvider";
import bg from "../assets/get-started.png";
import Colors from "../utils/Colors";
import { LinearGradient } from "expo-linear-gradient";

const Landing = ({ navigation }) => {
  const auth = useAuth();
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <LinearGradient
          // Background Linear Gradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={styles.overlay}
        />
        <View style={{ paddingHorizontal: 20, paddingVertical: 40 }}>
          <Text style={{ color: "white", fontSize: 40, fontWeight: "bold" }}>
            Welcome to
          </Text>
          <Text
            style={{
              color: Colors.PRIMARY,
              fontSize: 92,
              fontFamily: "lobster",
            }}
          >
            Paws Needs
          </Text>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
            All of your Fluffy Family needs and more ..
          </Text>
        </View>
        <Pressable
          style={{
            alignSelf: "flex-end",
            borderTopLeftRadius: 50,
            backgroundColor: Colors.PRIMARY,
            width: 200,
            height: 77,
            justifyContent: "center",
            alignItems: "center",
          }}
          // onPress={() => auth.login({ name: "wael" })}
          onPress={() => navigation.navigate("signin")}
        >
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            Get Started
          </Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
});

export default Landing;
