import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Pressable,
} from "react-native";
import PawAndText from "../../components/PawAndText";
import ButtonPrimary from "../../components/ButtonPrimary";
import InputText from "../../components/InputText";
import CustomPicker from "../../components/CustomPicker";
import CustomBottomSheet from "../../components/CustomBottomSheet";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../../utils/Colors";
import { Calendar } from "react-native-calendars";

const ServiceForm = ({ route, navigation }) => {
  const service = route.params.service;
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
              onPress={() => setBottomSheetOpen(true)}
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

            <View
              style={{
                marginBottom: 20,
                borderRadius: 24,
                overflow: "hidden",
                padding: 20,
                backgroundColor: "#fff",

                shadowColor: "#c7c7c7",
                shadowOffset: {
                  width: 0,
                  height: 9,
                },
                shadowOpacity: 0.48,
                shadowRadius: 11.95,

                elevation: 18,
              }}
            >
              <Calendar />
            </View>

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
        setFrequency={setFrequency}
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
