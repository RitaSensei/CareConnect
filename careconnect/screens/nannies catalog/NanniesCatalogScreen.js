import React from "react";
import { View, FlatList, SafeAreaView } from "react-native";

import { MultipleFilters } from "../../components/ProfilesSearchBar";
import { renderProfile } from "../../components/ProfilesList";
import styles from "./styles";

const profileData = [
  {
    profilepic: require("../../assets/images/nanny_image.png"),
    name: ["Name", "Mary Gomez"],
    nationality: ["Nationality", "Filipino"],
    location: ["Location", "Tanger"],
    experience: ["Experience", "3 years experience"],
    "desired position": ["Desired position", "live-in, full-time position"],
    "desired salary": ["Desired salary", "2000 MAD/month"],
  },
  {
    profilepic: require("../../assets/images/nanny_image.png"),
    name: ["Name", "Clara Almario"],
    nationality: ["Nationality", "Chinese"],
    location: ["Location", "Rabat"],
    experience: ["Experience", "5 years experience"],
    "desired position": ["Desired position", "live-out, part-time position"],
    "desired salary": ["Desired salary", "3000 MAD/month"],
  },
  {
    profilepic: require("../../assets/images/nanny_image.png"),
    name: ["Name", "Mary Gomez"],
    nationality: ["Nationality", "Filipino"],
    location: ["Location", "Tanger"],
    experience: ["Experience", "3 years experience"],
    "desired position": ["Desired position", "live-in, full-time position"],
    "desired salary": ["Desired salary", "2000 MAD/month"],
  },
  {
    profilepic: require("../../assets/images/nanny_image.png"),
    name: ["Name", "Clara Almario"],
    nationality: ["Nationality", "Chinese"],
    location: ["Location", "Rabat"],
    experience: ["Experience", "5 years experience"],
    "desired position": ["Desired position", "live-out, part-time position"],
    "desired salary": ["Desired salary", "3000 MAD/month"],
  },
  {
    profilepic: require("../../assets/images/nanny_image.png"),
    name: ["Name", "Clara Almario"],
    nationality: ["Nationality", "Chinese"],
    location: ["Location", "Rabat"],
    experience: ["Experience", "5 years experience"],
    "desired position": ["Desired position", "live-out, part-time position"],
    "desired salary": ["Desired salary", "3000 MAD/month"],
  },
  {
    profilepic: require("../../assets/images/nanny_image.png"),
    name: ["Name", "Clara Almario"],
    nationality: ["Nationality", "Chinese"],
    location: ["Location", "Rabat"],
    experience: ["Experience", "5 years experience"],
    "desired position": ["Desired position", "live-out, part-time position"],
    "desired salary": ["Desired salary", "3000 MAD/month"],
  },
  {
    profilepic: require("../../assets/images/nanny_image.png"),
    name: ["Name", "Clara Almario"],
    nationality: ["Nationality", "Chinese"],
    location: ["Location", "Rabat"],
    experience: ["Experience", "5 years experience"],
    "desired position": ["Desired position", "live-out, part-time position"],
    "desired salary": ["Desired salary", "3000 MAD/month"],
  },
  {
    profilepic: require("../../assets/images/nanny_image.png"),
    name: ["Name", "Clara Almario"],
    nationality: ["Nationality", "Chinese"],
    location: ["Location", "Rabat"],
    experience: ["Experience", "5 years experience"],
    "desired position": ["Desired position", "live-out, part-time position"],
    "desired salary": ["Desired salary", "3000 MAD/month"],
  },
  {
    profilepic: require("../../assets/images/nanny_image.png"),
    name: ["Name", "Clara Almario"],
    nationality: ["Nationality", "Chinese"],
    location: ["Location", "Rabat"],
    experience: ["Experience", "5 years experience"],
    "desired position": ["Desired position", "live-out, part-time position"],
    "desired salary": ["Desired salary", "3000 MAD/month"],
  },
  {
    profilepic: require("../../assets/images/nanny_image.png"),
    name: ["Name", "Clara Almario"],
    nationality: ["Nationality", "Chinese"],
    location: ["Location", "Rabat"],
    experience: ["Experience", "5 years experience"],
    "desired position": ["Desired position", "live-out, part-time position"],
    "desired salary": ["Desired salary", "3000 MAD/month"],
  },
  {
    profilepic: require("../../assets/images/nanny_image.png"),
    name: ["Name", "Clara Almario"],
    nationality: ["Nationality", "Chinese"],
    location: ["Location", "Rabat"],
    experience: ["Experience", "5 years experience"],
    "desired position": ["Desired position", "live-out, part-time position"],
    "desired salary": ["Desired salary", "3000 MAD/month"],
  },
  {
    profilepic: require("../../assets/images/nanny_image.png"),
    name: ["Name", "Ghita Loukili"],
    nationality: ["Nationality", "Chinese"],
    location: ["Location", "Rabat"],
    experience: ["Experience", "5 years experience"],
    "desired position": ["Desired position", "live-out, part-time position"],
    "desired salary": ["Desired salary", "3000 MAD/month"],
  },
  // add more profile data here
];

const NanniesCatalogScreen = () => {
  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <MultipleFilters />
        <View style={{ width: "100%", height: "90%" }}>
          <FlatList
            data={profileData}
            renderItem={renderProfile}
            keyExtractor={(item, index) => index.toString()}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NanniesCatalogScreen;
