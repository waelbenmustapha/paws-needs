import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import UserImageEdit from "../../components/UserImageEdit";
import AntDesign from "react-native-vector-icons/AntDesign";
import Colors from "../../utils/Colors";
import dogavatar from "../../assets/dogavatar.png";
import InputText from "../../components/InputText";
import Envelope from "../../assets/svg/envelope.svg";
import CustomPicker from "../../components/CustomPicker";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomBottomSheet from "../../components/CustomBottomSheet";

const AddPet = ({ navigation }) => {
  const [frequency, setFrequency] = useState("One Time");

  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  const bottomSheetData = [
    { label: "Daily", value: "Daily" },
    { label: "Weekly", value: "Weekly" },
    { label: "One Time", value: "One Time" },
    { label: "Specific dates", value: "Specific dates" },
  ];
  const hideBottomNavigation = () => {
    console.log("hide");
    // Function to change navigation options

    navigation.getParent().setOptions({ tabBarStyle: { display: "none" } });
  };
  const types = [
    { label: "Pet", value: "pet" },
    { label: "Dog", value: "dog" },
    { label: "Cat", value: "Cat" },
    { label: "Parrot", value: "Parrot" },
    { label: "Fish", value: "Fish" },
    { label: "Rabbit", value: "Rabbit" },
    { label: "Turtle", value: "Turtle" },
    { label: "Fox", value: "Fox" },
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
        <UserImageEdit image={dogavatar} />
        <View style={{ marginTop: 25 }}>
          <InputText
            placeholder={"Name"}
            icon={<Envelope width={20} height={20} color={Colors.PRIMARY} />}
          />
        </View>
        <Pressable
          onPress={() => {
            hideBottomNavigation();
            setBottomSheetOpen(true);
          }}
          style={{
            height: 56,
            paddingHorizontal: 20,
            marginBottom: 20,
            borderRadius: 12,
            backgroundColor: "#F0F2F4",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#9E9E9E" }}>
            {frequency}
          </Text>
          <Ionicons name="caret-down" size={14} color={Colors.PRIMARY} />
        </Pressable>
        <View style={{ marginTop: 25 }}>
          <InputText
            placeholder={"Name"}
            icon={<Envelope width={20} height={20} color={Colors.PRIMARY} />}
          />
        </View>
        <View style={{ marginTop: 25 }}>
          <InputText
            placeholder={"Name"}
            icon={<Envelope width={20} height={20} color={Colors.PRIMARY} />}
          />
        </View>
        <View style={{ marginTop: 25 }}>
          <InputText
            placeholder={"Name"}
            icon={<Envelope width={20} height={20} color={Colors.PRIMARY} />}
          />
        </View>
        <View style={{ marginTop: 25 }}>
          <InputText
            placeholder={"Email"}
            icon={<Envelope width={20} height={20} color={Colors.PRIMARY} />}
          />
        </View>
       
      </ScrollView>
      
      <CustomBottomSheet
        bottomSheetOpen={bottomSheetOpen}
        setBottomSheetOpen={setBottomSheetOpen}
        setValue={setFrequency}
        title={"Frequency"}
        data={bottomSheetData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  row: { flexDirection: "row", alignItems: "center" },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight + 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  navText: {
    fontSize: 24,
    includeFontPadding: false,

    fontWeight: "bold",
    color: Colors.TEXT,
  },
  icon: { paddingVertical: 5, paddingRight: 10 },
});

export default AddPet;
