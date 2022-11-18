import React, { useState } from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Colors from "../utils/Colors";

const CustomPicker = ({ items,placeholder }) => {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <View
      style={{
        marginBottom: 20,
        borderRadius: 10,
        overflow: "hidden",

        paddingLeft: 10,
        backgroundColor: Colors.DARK_BG,
        borderRadius: 10,
      }}
    >
      <Picker
        dropdownIconColor={Colors.PRIMARY}
        style={{
          height: 56,
          backgroundColor: Colors.DARK_BG,
          color: Colors.TEXT_GRAY,
          fontSize: 14,
        }}
        selectedValue={selectedItem}
        onValueChange={(itemValue, itemIndex) => setSelectedItem(itemValue)}
      >
         <Picker.Item
            key={`pickType-default`}
            enabled={false}
            label={placeholder}
            value={placeholder}
          />
        {items.map((el, index) => (
          <Picker.Item
            key={`pickType-${index}`}
            label={el.label}
            value={el.value}
          />
        ))}
      </Picker>
    </View>
  );
};

export default CustomPicker;
