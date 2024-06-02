import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { IconButton } from "react-native-paper";
import { Picker } from "react-native-ui-lib";
import { Entypo } from "@expo/vector-icons";

import styles from "../screens/creating account/styles";

export const PickerComponent = ({
  data,
  emptyField,
  onSelect,
  onAdd,
  onRemove,
  disabled,
  placeholder,
  errorText,
}) => {
  return (
    <View style={{ flexDirection: "column" }}>
      {data.map((item, index) => (
        <View key={index} style={{ flexDirection: "column", justifyContent: "center" }}>
          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <Picker
              placeholder={placeholder}
              style={[styles.picker, emptyField && !item.nativePickerValue && styles.errorPicker]}
              //   useDialog
              useSafeArea
              // useWheelPicker
              enableModalBlur={false}
              value={item.nativePickerValue}
              onChange={nativePickerValue => {
                const updatedData = [...data];
                updatedData[index].pickerOpen = false;
                onSelect(index, nativePickerValue);
              }}
              trailingAccessory={
                <Entypo
                  name={item.pickerOpen ? "chevron-up" : "chevron-down"}
                  size={30}
                  color="black"
                  style={{ position: "absolute", marginStart: 290, top: 10 }}
                />
              }
              onPress={() => {
                const updatedData = [...data];
                updatedData[index].pickerOpen = true;
                onSelect(index, item.nativePickerValue);
              }}
              topBarProps={{
                doneLabel: "Done",
                cancelLabel: "Cancel",
              }}
              fieldType="filter"
              items={item.options.map(option => ({
                value:option.value,
                label:option.label,
                disabled:option.disabled,
                style:{
                    color: option.value === item.nativePickerValue ? "#ff0000" : "#000000",
                },
                multiline
              }))}
            />
            {index === 0 && (
              <IconButton
                icon="plus-circle"
                iconColor="#FA89B8"
                size={36}
                style={{ position: "absolute", marginStart: 317, bottom: 18 }}
                disabled={disabled}
                onPress={onAdd}
              />
            )}
            {index !== 0 && (
              <IconButton
                icon="minus-circle"
                iconColor="#B22D1D"
                size={36}
                style={{ position: "absolute", marginStart: 317, bottom: 18 }}
                onPress={onRemove}
              />
            )}
          </View>
          {emptyField && !item.nativePickerValue && (
            <Text style={styles.errorText}>{errorText}</Text>
          )}
        </View>
      ))}
    </View>
  );
};
