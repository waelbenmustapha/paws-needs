import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";
import { useAuth } from "../../context/AuthProvider";

const SigninWithEmail = () => {
  const auth = useAuth();
  return (
    <View style={styles.container}>
      <Text>SigninWithEmail</Text>
      <Pressable
        onPress={() => auth.login({ name: "wael" })}
        style={{ marginTop: 20, padding: 20, backgroundColor: Colors.PRIMARY }}
      >
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default SigninWithEmail;
