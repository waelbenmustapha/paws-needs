import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import Colors from "../../utils/Colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import UserImageEdit from "../../components/UserImageEdit";

import avatarimg from "../../assets/dogavatar.png";
import CustomPicker from "../../components/CustomPicker";
import InputText from "../../components/InputText";
import KgIcon from "../../assets/svg/kg.svg";
const EditPet = ({ navigation, route }) => {
  const pet = route.params.pet;
  const types = [
    { label: "Dog", value: "Dog" },
    { label: "Cat", value: "Cat" },
    { label: "Rabbit", value: "Rabbit" },
    { label: "Turtle", value: "Turtle" },
    { label: "Parrot", value: "Parrot" },
    { label: "Dog", value: "Dog" },
    { label: "Cat", value: "Cat" },
    { label: "Rabbit", value: "Rabbit" },
    { label: "Turtle", value: "Turtle" },
    { label: "Parrot", value: "Parrot" },
    { label: "Dog", value: "Dog" },
    { label: "Cat", value: "Cat" },
    { label: "Rabbit", value: "Rabbit" },
    { label: "Turtle", value: "Turtle" },
  ];

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
            <Text style={styles.navText}>Edit Pet</Text>
          </View>
        </View>
        <UserImageEdit image={avatarimg} />
        <View style={{ marginTop: 20 }}>
          <InputText value={pet.name} placeholder={"Name"} />
        </View>

        <View
          style={{
            marginTop: 20,
            height: 56,
          }}
        >
          <CustomPicker placeholder={pet.type} items={types} />
        </View>
        <View style={{ marginTop: 20 }}>
          <InputText value={pet.breed} placeholder={"Breed"} />
        </View>
        <View
          style={{
            marginTop: 20,
            height: 56,
          }}
        >
          <CustomPicker placeholder={pet.gender} items={types} />
        </View>
        <View style={{ marginTop: 20 }}>
          <InputText
          value={pet.weight.toString()}
            icon={<KgIcon color={Colors.PRIMARY} />}
            placeholder={"Weight"}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            height: 56,
          }}
        >
          <CustomPicker placeholder={"More Details"} items={types} />
        </View>
        <View style={{ marginTop: 20 }}>
          <TextInput
            multiline={true}
            numberOfLines={3}
            value={pet.description}
            style={[styles.input, { minHeight: 100, textAlignVertical: "top" }]}
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
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: Colors.DARK_BG,
  },
});

export default EditPet;
