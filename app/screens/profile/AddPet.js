import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../utils/Colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import UserImageEdit from "../../components/UserImageEdit";
import Ionicons from "react-native-vector-icons/Ionicons";

import avatarimg from "../../assets/dogavatar.png";
import InputText from "../../components/InputText";
import KgIcon from "../../assets/svg/kg.svg";
import SelectBottomSheet from "../../components/bottomsheet/SelectBottomSheet";
const AddPet = ({ navigation }) => {
  const [type, setType] = useState("Type");
  const [bottomSheetOpenTypes, setBottomSheetOpenTypes] = useState(false);
  const bottomSheetValues = [
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
  const [gender, setGender] = useState("Gender");
  const [bottomSheetOpenGender, setBottomSheetOpenGender] = useState(false);
  const Gendersvalues = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    
  ];
 
  const [details, setDetails] = useState("More Details");
  const [bottomSheetOpenDetails, setBottomSheetOpenDetails] = useState(false);
  const detailsValues = [
    { label: "Calm", value: "Calm" },
    { label: "Agressive", value: "Agressive" },
    { label: "Exampledata", value: "Exampledata" },
    { label: "more data", value: "more data" },
    
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
            <Text style={styles.navText}>Add Pet</Text>
          </View>
        </View>
        <UserImageEdit image={avatarimg} />
        <View style={{ marginTop: 20 }}>
          <InputText placeholder={"Name"} />
        </View>

        <TouchableOpacity
              onPress={() => {
                setBottomSheetOpenTypes(true);
              }}
              style={{
                height: 56,
                paddingHorizontal: 20,
                marginVertical: 20,
                borderRadius: 12,
                backgroundColor: Colors.DARK_BG,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: Colors.TEXT_GRAY,
                }}
              >
                {type}
              </Text>
              <Ionicons name="caret-down" size={14} color={Colors.PRIMARY} />
            </TouchableOpacity>

            <SelectBottomSheet
              bottomSheetOpen={bottomSheetOpenTypes}
              setBottomSheetOpen={setBottomSheetOpenTypes}
              setValue={setType}
              title={"Type"}
              data={bottomSheetValues}
            />
          <InputText placeholder={"Breed"} />
        <TouchableOpacity
              onPress={() => {
                setBottomSheetOpenGender(true);
              }}
              style={{
                height: 56,
                paddingHorizontal: 20,
                marginVertical: 20,
                borderRadius: 12,
                backgroundColor: Colors.DARK_BG,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: Colors.TEXT_GRAY,
                }}
              >
                {gender}
              </Text>
              <Ionicons name="caret-down" size={14} color={Colors.PRIMARY} />
            </TouchableOpacity>

            <SelectBottomSheet
              bottomSheetOpen={bottomSheetOpenGender}
              setBottomSheetOpen={setBottomSheetOpenGender}
              setValue={setGender}
              title={"Genders"}
              data={Gendersvalues}
            />
          <InputText
            icon={<KgIcon color={Colors.PRIMARY} />}
            placeholder={"Weight"}
          />
        <TouchableOpacity
              onPress={() => {
                setBottomSheetOpenDetails(true);
              }}
              style={{
                height: 56,
                paddingHorizontal: 20,
                marginVertical: 20,
                borderRadius: 12,
                backgroundColor: Colors.DARK_BG,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: Colors.TEXT_GRAY,
                }}
              >
                {details}
              </Text>
              <Ionicons name="caret-down" size={14} color={Colors.PRIMARY} />
            </TouchableOpacity>

            <SelectBottomSheet
              bottomSheetOpen={bottomSheetOpenDetails}
              setBottomSheetOpen={setBottomSheetOpenDetails}
              setValue={setDetails}
              title={"More Details"}
              data={detailsValues}
            />
          <TextInput
            multiline={true}
            numberOfLines={3}
            placeholder={"Description"}
            style={[styles.input, { minHeight: 100, textAlignVertical: "top" }]}
          />
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
            Add
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

export default AddPet;
