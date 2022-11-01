import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React from "react";
import { useAuth } from "../context/AuthProvider";
import bg from "../assets/get-started.png";
import Colors from "../utils/Colors";

const Landing = () => {
  const auth = useAuth();
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay} />
        <View style={{ padding: 20 }}>
          <Text style={{ color: "white", fontSize: 48, fontWeight: "bold" }}>
            Welcome to
          </Text>
          <Text
            style={{ color: Colors.PRIMARY, fontSize: 96, fontWeight: "bold" }}
          >
            Paws Needs
          </Text>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
            All of your Fluffy Family needs and more ..
          </Text>
        </View>
        <TouchableOpacity
          style={{
            alignSelf: "flex-end",
            borderTopLeftRadius: 50,
            backgroundColor: Colors.PRIMARY,
            width: 200,
            height: 77,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => auth.login({ name: "wael" })}
        >
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            Get Started
          </Text>
        </TouchableOpacity>
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
    // backgroundColor: "rgba(0,0,0,0.5)",
    backgroundGradient: "vertical",
    backgroundGradientTop: "red",
    backgroundGradientBottom: "white",
  },
});

export default Landing;
