import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import PawAndText from "../../../components/PawAndText";
import ButtonPrimary from "../../../components/ButtonPrimary";
import CustomPicker from "../../../components/CustomPicker";

import OneTimeCalendar from "../../../components/calendars/OneTimeCalendar";
import DateTimePicker from "@react-native-community/datetimepicker";

const PetGroomingForm = ({ route }) => {
  const service = route.params.service;

  const [oneday, setOneDay] = useState({});
  const [time, setTime] = useState(new Date("2022-11-13T09:00:00.300Z"));
  const [show, setShow] = useState(false);

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

            {/*<SpecificDaysCalendar
                markeddate={markeddate}
                changedMarkedDates={changedMarkedDates}
            />*/}
            <OneTimeCalendar changeOneDay={changeOneDay} oneDay={oneday} />
            <TouchableOpacity onPress={()=>showTimepicker()} style={[styles.input,{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:20}]}>
              <TextInput
                placeholder={"f"}
                style={{color:"black",fontSize:18}}
                editable={false}
                value={time.toLocaleTimeString().substring(0,5)}
              ></TextInput>
             
                <Image
                  source={require("../../../assets/clock.png")}
                  style={{ height: 27, width: 27, opacity: 0.7 }}
                  />
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
    backgroundColor: "#F0F2F4",
  },
});

export default PetGroomingForm;

