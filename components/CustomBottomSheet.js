import React, { useState, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../utils/Colors";

const CustomBottomSheet = ({
  bottomSheetOpen,
  setBottomSheetOpen,
  setFrequency,
  title,
  data,
  defaultValue,
}) => {
  const [itemSelected, setItemSelected] = useState(defaultValue);

  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["45%", "70%"], []);

  return (
    <>
      {bottomSheetOpen ? (
        <View
          style={{
            position: "absolute",
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
            backgroundColor: "rgba(9, 16, 29, 0.5)",
          }}
        >
          <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            onClose={() => setBottomSheetOpen(false)}
          >
            <View style={styles.bottomSheetContent}>
              <View style={{ width: "100%", paddingHorizontal: 20 }}>
                <Text style={styles.bottomSheetTitle}>{title}</Text>
              </View>
              {data.map((el, index) => (
                <Pressable
                  key={`bsi-${index}`}
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed ? "#f2f2f2" : "#fff",
                    },
                    styles.bottomSheetItem,
                  ]}
                  onPress={() => {
                    setItemSelected(el.value);
                    setFrequency(el.label);
                  }}
                >
                  <Text style={styles.bottomSheetItemText}>{el.label}</Text>
                  {itemSelected === el.value ? (
                    <Ionicons
                      name="checkmark-sharp"
                      size={24}
                      color={Colors.PRIMARY}
                    />
                  ) : null}
                </Pressable>
              ))}
            </View>
          </BottomSheet>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  bottomSheetContent: {
    flex: 1,
    alignItems: "center",
  },
  bottomSheetTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.PRIMARY,
    borderBottomColor: "#EEEEEE",
    borderBottomWidth: 1,
    width: "100%",
    textAlign: "center",
    paddingBottom: 20,
  },
  bottomSheetItem: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  bottomSheetItemText: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default CustomBottomSheet;
