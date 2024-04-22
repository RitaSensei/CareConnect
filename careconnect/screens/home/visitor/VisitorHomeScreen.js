import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { Picker } from "react-native-ui-lib";
import { ScrollView } from "react-native-gesture-handler";
import { Entypo, Ionicons, MaterialIcons, FontAwesome6 } from "@expo/vector-icons";

import styles from "./styles";
import { allLocations, allNationalities, allPositions } from "./allOptions";

const profileData = [
  {
    profilepic: require("../../../assets/images/nanny_image.png"),
    name: ["Name", "Mary Gomez"],
    nationality: ["Nationality", "Filibino"],
    location: ["Location", "Tanger"],
    experience: ["Experience", "3 yrs"],
    "desired position": ["Desired position", "live-in, full-time"],
    "desired salary": ["Desired salary", "2000 MAD/month"],
  },
  {
    profilepic: require("../../../assets/images/nanny_image.png"),
    name: ["Name", "Clara Almario"],
    nationality: ["Nationality", "Chinese"],
    location: ["Location", "Rabat"],
    experience: ["Experience", "5 yrs"],
    "desired position": ["Desired position", "live-out, part-time"],
    "desired salary": ["Desired salary", "3000 MAD/month"],
  },
  {
    profilepic: require("../../../assets/images/nanny_image.png"),
    name: ["Name", "Mary Gomez"],
    nationality: ["Nationality", "Filibino"],
    location: ["Location", "Tanger"],
    experience: ["Experience", "3 yrs"],
    "desired position": ["Desired position", "live-in, full-time"],
    "desired salary": ["Desired salary", "2000 MAD/month"],
  },
  {
    profilepic: require("../../../assets/images/nanny_image.png"),
    name: ["Name", "Clara Almario"],
    nationality: ["Nationality", "Chinese"],
    location: ["Location", "Rabat"],
    experience: ["Experience", "5 yrs"],
    "desired position": ["Desired position", "live-out, part-time"],
    "desired salary": ["Desired salary", "3000 MAD/month"],
  },
  // add more profile data here
];

const renderProfile = ({ item }) => (
  <Card style={styles.cardContainer}>
    <View
      style={{
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        flex: 1,
        width: 200,
      }}
    >
      <View style={styles.cardCover}>
        <Card.Cover
          source={item.profilepic}
          style={{
            // aspectRatio: 0.4,
            width: 80,
            height: 80,
            // resizeMode: "contain",
            // overflow: "hidden",
          }}
        />
        <View style={{ flexDirection: "row", alignItems: "center", left: 5, top: 8, width: 90 }}>
          <FontAwesome6 name="coins" size={16} color="#B272A4" />
          <Text
            style={{
              fontFamily: "FiraSansRegular",
              fontSize: 11,
              color: "#000",
              textAlign: "center",
              marginLeft: 5,
            }}
          >
            {item["desired salary"][1]}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", left: 5, top: 15, width: 90 }}>
          <MaterialIcons name="place" size={16} color="#B272A4" />
          <Text
            style={{
              fontFamily: "FiraSansRegular",
              fontSize: 11,
              color: "#000",
              textAlign: "center",
              marginLeft: 5,
            }}
          >
            {item["location"][1]}
          </Text>
        </View>
      </View>
      <View>
        <Card.Content style={styles.cardContent}>
          <Paragraph style={styles.nannyName}>
            <Text>{item.name[1]}</Text>
          </Paragraph>
          <Paragraph style={styles.nannyInformations}>
            {item.nationality[0]} : <Text style={{ color: "#000" }}>{item.nationality[1]}</Text>
          </Paragraph>
          <Paragraph style={styles.nannyInformations}>
            {item.experience[0]} : <Text style={{ color: "#000" }}>{item.experience[1]}</Text>
          </Paragraph>
          <Paragraph style={styles.nannyInformations}>
            {item["desired position"][0]} :{" "}
            <Text style={{ color: "#000" }}>{item["desired position"][1]}</Text>
          </Paragraph>
        </Card.Content>
      </View>
    </View>
    <Card.Actions>
      <View style={{ flex: 1 }}>
        <Button
          mode="contained"
          style={styles.viewProfileButton}
          textColor="#fff"
          buttonColor="#B272A4"
          rippleColor="#FCD9E0"
          onPress={() => {}}
        >
          <Text style={styles.viewProfileText}>View Profil</Text>
        </Button>
      </View>
    </Card.Actions>
  </Card>
);

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
      <ScrollView scrollEnabled={false}>
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
        <Text style={styles.descriptionTitle}>Suggested Nannies</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={{ flex: 1, position: "absolute", bottom: 160, height: 205 }}>
        <FlatList
          data={profileData.slice(0, 6)}
          renderItem={renderProfile}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
      </SafeAreaView>
    </View>
  );
};

export default VisitorHomeScreen;
