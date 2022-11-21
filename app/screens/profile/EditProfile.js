import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import Colors from "../../utils/Colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import UserImageEdit from "../../components/UserImageEdit";
import avatarimg from "../../assets/avatar.png";
const EditProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.nav}>
          <View style={styles.row}>
            <AntDesign
              onPress={() => navigation.goBack()}
              style={styles.icon}
              name="arrowleft"
              size={24}
              color={Colors.PRIMARY}
            />
            <Text style={styles.navText}>Edit Profile</Text>
          </View>
        </View>
        <UserImageEdit image={avatarimg} />
        <View style={styles.inputContainer}>
          <TextInput placeholder={"Email"} style={{ flex: 1 }} />
          <Image
            resizeMode="center"
            source={require("../../assets/mail.png")}
            style={{ width: 20 }}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder={"Name"} style={{ flex: 1 }} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput placeholder={"Address Linked"} style={{ flex: 1 }} />
          <Image
            resizeMode="center"
            source={require("../../assets/locationorange.png")}
            style={{ width: 20 }}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "grey", marginRight: 5 }}>+971</Text>
          <TextInput placeholder={"Phone Number"} style={{ flex: 1 }} />
          <Image
            resizeMode="center"
            source={require("../../assets/mail.png")}
            style={{ width: 20 }}
          />
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: "#fff",
          paddingTop: 20,
          marginTop: 20,
          paddingBottom: 36,
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: 58,
            borderRadius: 100,
            backgroundColor: Colors.PRIMARY,

            shadowColor: "#F77E34",
            shadowOffset: {
              width: 0,
              height: 9,
            },
            shadowOpacity: 0.48,
            shadowRadius: 11.95,

            elevation: 18,
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: "#fff",
            }}
          >
            Update
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 0,
    justifyContent: "space-between",
  },
  row: { flexDirection: "row", alignItems: "center" },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight + 20,
    paddingBottom: 20,
  },
  navText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.TEXT,
  },
  icon: { paddingVertical: 5, paddingRight: 10 },
  inputContainer: {
    width: "100%",
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: Colors.DARK_BG,
  },
});

export default EditProfile;
