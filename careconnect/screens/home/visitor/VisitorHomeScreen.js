import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { Picker, Colors } from "react-native-ui-lib";
import { ScrollView } from "react-native-gesture-handler";
import { Entypo, Ionicons } from "@expo/vector-icons";

import styles from "./styles";
import { allLocations, allNationalities, allPositions } from "./allOptions";

const profileData = {
  name: "Mary Gomez",
  nationality: "Filibino",
  location: "Tanger, Morocco",
  experience: "3 yrs",
  "desired position": "live-in, full-time",
};

const VisitorHomeScreen = () => {
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
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Looking for a nanny ?</Text>
        <Text style={styles.subtitle}>Find available nannies and Explore profiles</Text>
      </View>
      <ScrollView>
        <View style={styles.searchBarContainer}>
          <Picker
            placeholder="Location"
            placeholderTextColor="#000"
            useWheelPicker
            enableModalBlur={false}
            value={locationState.nativePickerValue}
            onChange={nativePickerValue =>
              setLocationState({ ...locationState, nativePickerValue })
            }
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
                  color:
                    option.value === nationalityState.nativePickerValue ? "#ff0000" : "#000000",
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
      <View style={styles.content}>
        <Text style={styles.descriptionTitle}>Our services</Text>
        <Text style={styles.description}>
          Experience the ease of connecting with educators through our inviting AI-powered
          application, designed with intuitive features and personalized matching algorithms.
          Explore trusted recommendations from previous employers and enjoy privacy-conscious video
          exchanges for a seamless experience.
        </Text>
      </View>
      <View style={styles.catalogHeader}>
        <Text style={styles.descriptionTitle}>Suggesed Nannies</Text>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: "FiraSansMedium",
              fontSize: 18,
              color: "#FA89B8",
              marginLeft: 140,
            }}
          >
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <Card
        style={{
          bottom: 80,
          position: "absolute",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#F1E7E8",
          width: "50%",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Card.Cover source="D:/Ghita/2A/S4/PFA/nanny_image.png" style={{ aspectRatio: 0.5 }} />
          <Card.Content style={{ paddingBottom: 10 }}>
            <Title style={styles.nannyName}>{profileData.name}</Title>
            <Paragraph style={styles.nannyInformations}>
              Nationality: <Text style={{ color: "#000" }}>{profileData.nationality}</Text>
            </Paragraph>
            <Paragraph style={styles.nannyInformations}>
              Location: <Text style={{ color: "#000" }}>{profileData.location}</Text>
            </Paragraph>
            <Paragraph style={styles.nannyInformations}>
              Experience: <Text style={{ color: "#000" }}>{profileData.experience}</Text>
            </Paragraph>
            <Paragraph style={styles.nannyInformations}>
              Desired position:{" "}
              <Text style={{ color: "#000" }}>{profileData["desired position"]}</Text>
            </Paragraph>
          </Card.Content>
        </View>
        <Card.Actions>
          <View style={{ alignContent: "center", flex: 1, bottom: 10 }}>
            <Button
              mode="contained-tonal"
              style={styles.viewProfileButton}
              textColor="#fff"
              buttonColor="#B272A4"
            >
              <Text style={styles.viewProfileText}>View Profil</Text>
            </Button>
          </View>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default VisitorHomeScreen;
