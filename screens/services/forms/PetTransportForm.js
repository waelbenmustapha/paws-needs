import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import PawAndText from "../../../components/PawAndText";
import ButtonPrimary from "../../../components/ButtonPrimary";
import CustomPicker from "../../../components/CustomPicker";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

import OneTimeCalendar from "../../../components/calendars/OneTimeCalendar";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomBottomSheet from "../../../components/CustomBottomSheet";
import Colors from "../../../utils/Colors";
import SpecificDaysCalendar from "../../../components/calendars/SpecificDaysCalendar";
import MapModal from "../../../components/MapModal";

const PetTransportForm = ({ route, navigation }) => {
  const service = route.params.service;

  const [oneday, setOneDay] = useState({});
  const [time, setTime] = useState(new Date("2022-11-13T09:00:00.300Z"));
  const [show, setShow] = useState(false);
  const [markeddate, setMarkedDates] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [marker, setMarker] = useState(null);
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
    navigation.setOptions({
      tabBarVisible: true,
    });
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
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setTime(currentDate);
  };

  const showTimepicker = () => {
    setShow(true);
  };

  const changeOneDay = (dt) => {
    setOneDay({ [dt]: { selected: true } });
  };

  const types = [
    { label: "Pet", value: "pet" },
    { label: "Dog", value: "dog" },
  ];

  return (
    <View style={styles.container}>
      <MapModal
        marker={marker}
        setMarker={setMarker}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
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
                backgroundColor: "#F0F2F4",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ fontSize: 14, fontWeight: "400", color: "#9E9E9E" }}
              >
                {frequency}
              </Text>
              <Ionicons name="caret-down" size={14} color={Colors.PRIMARY} />
            </Pressable>

            {frequency === "One Time" || frequency === "Weekly" ? (
              <OneTimeCalendar changeOneDay={changeOneDay} oneDay={oneday} />
            ) : frequency === "Specific dates" ? (
              <SpecificDaysCalendar
                markeddate={markeddate}
                changedMarkedDates={changedMarkedDates}
              />
            ) : null}
            <TouchableOpacity
              onPress={() => showTimepicker()}
              style={[
                styles.input,
                {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 20,
                  height: 56,
                },
              ]}
            >
              <TextInput
                placeholder={"f"}
                style={{ color: "#000", fontSize: 14 }}
                editable={false}
                value={time.toLocaleTimeString().substring(0, 5)}
              ></TextInput>
              <Feather name="clock" size={24} color={Colors.PRIMARY} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={[
                styles.input,
                {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 20,
                  height: 56,
                },
              ]}
            >
              <Text style={{ color: "#9E9E9E", fontSize: 14 }}>
                Destination
              </Text>
              {marker ? (
                <Feather name="check-circle" size={24} color={Colors.PRIMARY} />
              ) : (
                <Feather name="map-pin" size={24} color={"#9E9E9E"} />
              )}
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                value={new Date()}
                onChange={onChange}
                minuteInterval={30}
                textColor="red"
                mode="time"
              />
            )}

            <View style={{ marginBottom: 20 }}>
              <TextInput
                multiline={true}
                numberOfLines={3}
                placeholder={"More Details"}
                style={[
                  styles.input,
                  { minHeight: 100, textAlignVertical: "top" },
                ]}
              />
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
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: "#F0F2F4",
  },
});

export default PetTransportForm;
