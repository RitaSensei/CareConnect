import React from "react";

import { renderProfile } from "../../components/ProfilesList";
import { CatalogComponent } from "../../components/CatalogComponent";

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

const NanniesCatalogVisitorScreen = () => {
  return <CatalogComponent data={profileData} renderItem={renderProfile} />;
};

export default NanniesCatalogVisitorScreen;
