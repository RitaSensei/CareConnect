import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { CatalogComponent } from "../../components/CatalogComponent";
import { renderProfile } from "../../components/ProfilesList";
import botIcon from "../../assets/icons/bot.png";



const profileData = [
  {
    profilepic: require("../../assets/images/nanny_image.png"),
    name: ["Name", "Oumaima Nadir"],
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

const NanniesCatalogUserScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CatalogComponent data={profileData} renderItem={renderProfile} />
      
      <TouchableOpacity
        style={styles.chatButton}
        onPress={() => navigation.navigate("WatsonAssistantChat")}
      >
        <Image source={botIcon} style={styles.chatIcon} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatButton: {
    backgroundColor: '#FA89B8',
    padding: 10,
    borderRadius: 10,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  chatIcon: {
    width: 45,
    height: 45,
  },
});

export default NanniesCatalogUserScreen;
