  import React, {
    useState,
    useMemo,
    useRef,
    useEffect,
    useCallback,
  } from "react";
  import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
  import Ionicons from "react-native-vector-icons/Ionicons";
  import Colors from "../../utils/Colors";
  import {
    BottomSheetModal,
    BottomSheetScrollView,
    BottomSheetBackdrop,
  } from "@gorhom/bottom-sheet";

  const SelectMultipleBottomSheet = ({
    bottomSheetOpen,
    setBottomSheetOpen,
    title,
    data,
    itemSelected,
    setItemSelected
  }) => {

    // ref
    const bottomSheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ["45%", "70%"], []);

    const openBottomSheet = () => {
      bottomSheetRef.current?.present();
      setBottomSheetOpen(true);
    };

    const closeBottomSheet = () => {
      bottomSheetRef.current?.dismiss();
      setBottomSheetOpen(false);
    };

    // callbacks
    const handleSheetChanges = useCallback((index) => {
      if (index === -1) {
        closeBottomSheet();
      }
    }, []);

    function addordelete(el) {
      const found = itemSelected.findIndex((x) => x === el);
      if (found == -1) {
        setItemSelected([...itemSelected, el]);
      } else {
        const cpy = [...itemSelected];
        cpy.splice(found, 1);

        setItemSelected([...cpy]);
      }
    }
    useEffect(() => {
      if (bottomSheetOpen === true) {
        openBottomSheet();
      } else {
        closeBottomSheet();
      }
    }, [bottomSheetOpen]);

    const renderBackdrop = useCallback((props) => {
      return (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        />
      );
    }, []);

    return (
      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enablePanDownToClose={true}
        onChange={handleSheetChanges}
        onClose={() => {
          closeBottomSheet();
        }}
      >
        <View style={{ width: "100%", paddingHorizontal: 20 }}>
          <Text style={styles.bottomSheetTitle}>{title}</Text>
        </View>
        <BottomSheetScrollView>
          <View style={styles.bottomSheetContent}>
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
                  addordelete(el.value);
                }}
              >
                <Text style={styles.bottomSheetItemText}>{el.label}</Text>
                {itemSelected.findIndex((x) => x === el.value) != -1 ? (
                  <Ionicons
                    name="checkmark-sharp"
                    size={24}
                    color={Colors.PRIMARY}
                  />
                ) : null}
              </Pressable>
            ))}
          </View>
        </BottomSheetScrollView>
      </BottomSheetModal>
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

  export default SelectMultipleBottomSheet;
