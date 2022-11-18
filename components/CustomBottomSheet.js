import React, { useState, useMemo, useRef, useCallback } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { useApp } from "../context/AppProvider";
import CustomBackdrop from "./bottomsheet/CustomBackdrop";

const CustomBottomSheet = ({
  bottomSheetOpen,
  setBottomSheetOpen,
  setValue,
  title,
  data,
  defaultValue,
}) => {
  const navigation = useNavigation();
  const app = useApp();

  const [itemSelected, setItemSelected] = useState(defaultValue);

  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["45%", "70%"], []);

  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  return bottomSheetOpen ? (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={CustomBackdrop}
      enablePanDownToClose={true}
      onClose={() => {
        handleClosePress();
        setBottomSheetOpen(false);
        app.showBottomBar();
      }}
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
              setValue(el.label);
              handleClosePress();
              setBottomSheetOpen(false);
              app.showBottomBar();
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
  ) : null;
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
