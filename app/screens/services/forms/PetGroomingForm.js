import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import PawAndText from "../../../components/PawAndText";
import ButtonPrimary from "../../../components/ButtonPrimary";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import OneTimeCalendar from "../../../components/calendars/OneTimeCalendar";
import DateTimePicker from "@react-native-community/datetimepicker";
import Colors from "../../../utils/Colors";
import SelectBottomSheet from "../../../components/bottomsheet/SelectBottomSheet";

const PetGroomingForm = ({ route }) => {
  const service = route.params.service;

  const [oneday, setOneDay] = useState({});
  const [time, setTime] = useState(new Date("2022-11-13T09:00:00.300Z"));
  const [show, setShow] = useState(false);


  const [type, setType] = useState("Pet");
  const [bottomSheetOpenTypes, setBottomSheetOpenTypes] = useState(false);
  const bottomSheetDataTypes = [
    { label: "Pet", value: "pet" },
    { label: "Dog", value: "dog" },
  ];
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
            <TouchableOpacity
              onPress={() => {
                setBottomSheetOpenTypes(true);
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
                {type}
              </Text>
              <Ionicons name="caret-down" size={14} color={Colors.PRIMARY} />
            </TouchableOpacity>

            <SelectBottomSheet
              bottomSheetOpen={bottomSheetOpenTypes}
              setBottomSheetOpen={setBottomSheetOpenTypes}
              setValue={setType}
              title={"Types"}
              data={bottomSheetDataTypes}
            />
            <OneTimeCalendar changeOneDay={changeOneDay} oneDay={oneday} />
            <TouchableOpacity
              onPress={() => showTimepicker()}
              style={[
                styles.input,
                {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: 56,
                  marginBottom: 20,
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
    backgroundColor: Colors.DARK_BG,
  },
});

export default PetGroomingForm;
