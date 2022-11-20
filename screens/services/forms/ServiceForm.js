import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import PawAndText from "../../../components/PawAndText";
import ButtonPrimary from "../../../components/ButtonPrimary";
import InputText from "../../../components/InputText";
import CustomPicker from "../../../components/CustomPicker";
import CustomBottomSheet from "../../../components/bottomsheet/CustomBottomSheet";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../../../utils/Colors";
import SpecificDaysCalendar from "../../../components/calendars/SpecificDaysCalendar";
import OneTimeCalendar from "../../../components/calendars/OneTimeCalendar";

const ServiceForm = ({ route, navigation }) => {
  const service = route.params.service;

  const [markeddate, setMarkedDates] = useState({});
  const [oneday, setOneDay] = useState({});

  const changeOneDay = (dt) => {
    setOneDay({ [dt]: { selected: true } });
  };
  const changedMarkedDates = (dt) => {
    const cpy = { ...markeddate };
    if (cpy.hasOwnProperty(dt)) {
      delete cpy[dt];
      setMarkedDates({ ...cpy });
    } else {
      setMarkedDates({ ...markeddate, [dt]: { selected: true } });
    }
  };
  const types = [
    { label: "Pet", value: "pet" },
    { label: "Dog", value: "dog" },
  ];

  const bottomSheetData = [
    { label: "Daily", value: "Daily" },
    { label: "Weekly", value: "Weekly" },
    { label: "One Time", value: "One Time" },
    { label: "Specific dates", value: "Specific dates" },
  ];
  const [frequency, setFrequency] = useState("Frequency");

  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  const hideBottomNavigation = () => {
    console.log("hide");
    // Function to change navigation options
    navigation.setOptions({
      tabBarVisible: true,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <PawAndText title={service.name} Component={() => <></>} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 20 }}>
              Fill Informations
            </Text>
            <CustomPicker items={types} />
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
                {frequency}
              </Text>
              <Ionicons name="caret-down" size={14} color={Colors.PRIMARY} />
            </Pressable>

            {/*<SpecificDaysCalendar
                markeddate={markeddate}
                changedMarkedDates={changedMarkedDates}
            />*/}
            <OneTimeCalendar changeOneDay={changeOneDay} oneDay={oneday} />

            <View style={{ marginBottom: 20 }}>
              <InputText placeholder={"Drop Off Time"} />
            </View>
          </View>

          <View style={{ marginHorizontal: 20, marginVertical: 28 }}>
            <ButtonPrimary title={"Send Request"} fnc={() => {}} />
          </View>
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
    paddingTop: StatusBar.currentHeight,
  },
  nav: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 40,
  },
});

export default ServiceForm;
