import React, { useState } from "react";
import { View } from "react-native";
import { Picker } from "react-native-ui-lib";
import { ScrollView } from "react-native-gesture-handler";
import { Entypo, Ionicons } from "@expo/vector-icons";

import styles from "../screens/home/visitor/styles";
import { allLocations, allNationalities, allPositions } from "../utils/allOptions";

export const MultipleFilters = () => {
  const [locationState, setLocationState] = useState({
    itemsCount: 1,
    location: undefined,
    option: undefined,
    nativePickerValue: "",
  });

  const [nationalityState, setNationalityState] = useState({
    itemsCount: 1,
    nationality: undefined,
    option: undefined,
    nativePickerValue: "",
  });

  const [positionState, setPositionState] = useState({
    itemsCount: 1,
    position: undefined,
    option: undefined,
    nativePickerValue: "",
  });
  return (
    <ScrollView scrollEnabled={false}>
      <View style={styles.searchBarContainer}>
        <Picker
          placeholder="Location"
          placeholderTextColor="#000"
          useWheelPicker
          enableModalBlur={false}
          value={locationState.nativePickerValue}
          onChange={nativePickerValue => setLocationState({ ...locationState, nativePickerValue })}
          trailingAccessory={
            <Entypo
              name={locationState.pickerOpen ? "chevron-up" : "chevron-down"}
              size={22}
              color="black"
            />
          }
          onPress={() => setLocationState({ pickerOpen: !locationState.pickerOpen })}
          topBarProps={{
            doneLabel: "Done",
            cancelLabel: "Cancel",
          }}
          fieldType="form"
        >
          {allLocations.map(option => (
            <Picker.Item
              key={option.value}
              value={option.value}
              label={option.label}
              disabled={option.disabled}
            />
          ))}
        </Picker>
        <Picker
          placeholder="Nationality"
          placeholderTextColor="#000"
          useWheelPicker
          enableModalBlur={false}
          value={nationalityState.nativePickerValue}
          onChange={nativePickerValue => setNationalityState({ nativePickerValue })}
          trailingAccessory={
            <Entypo
              name={nationalityState.pickerOpen ? "chevron-up" : "chevron-down"}
              size={22}
              color="black"
            />
          }
          onPress={() => setNationalityState({ pickerOpen: !nationalityState.pickerOpen })}
          topBarProps={{
            doneLabel: "Done",
            cancelLabel: "Cancel",
          }}
          fieldType="form"
        >
          {allNationalities.map(option => (
            <Picker.Item
              key={option.value}
              value={option.value}
              label={option.label}
              disabled={option.disabled}
              style={{
                color: option.value === nationalityState.nativePickerValue ? "#ff0000" : "#000000",
              }}
            />
          ))}
        </Picker>
        <Picker
          placeholder="Position"
          placeholderTextColor="#000"
          useWheelPicker
          enableModalBlur={false}
          value={positionState.nativePickerValue}
          onChange={nativePickerValue => setPositionState({ nativePickerValue })}
          trailingAccessory={
            <Entypo
              name={positionState.pickerOpen ? "chevron-up" : "chevron-down"}
              size={22}
              color="black"
            />
          }
          onPress={() => setPositionState({ pickerOpen: !positionState.pickerOpen })}
          topBarProps={{
            doneLabel: "Done",
            cancelLabel: "Cancel",
          }}
          fieldType="form"
        >
          {allPositions.map(option => (
            <Picker.Item
              key={option.value}
              value={option.value}
              label={option.label}
              disabled={option.disabled}
              style={{
                color: option.value === positionState.nativePickerValue ? "#ff0000" : "#000000",
              }}
            />
          ))}
        </Picker>
        <Ionicons
          name="search-circle"
          size={38}
          color="#FA89B8"
          style={{ marginHorizontal: -10 }}
        />
      </View>
    </ScrollView>
  );
};
