import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";

import styles from "./styles";

const VisitorHomeScreen = () => {
  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button
          mode="contained-tonal"
          style={styles.signinButton}
          onPress={handleLogin}
          buttonColor="#FCD9E0"
          textColor="#FA89B8"
        >
          <Text style={styles.signinButtonText}>Login</Text>
        </Button>
      </View>
      {/* <View style={styles.content}>
        <Text style={styles.subtitle}>LOOKING FOR A NANNY OR A MAID?</Text>
        <Text style={styles.description}>Find Available Nannies And Explore Profiles</Text>
      </View> */}
      {/* <View style={styles.nannies}> */}
      {/* <View style={styles.nanny}> */}
      {/* <Image style={styles.image} source={require("./assets/mary-gomez.jpg")} /> */}
      {/* <Text style={styles.nannyName}>Mary Gomez</Text>
          <Text style={styles.nannyNationality}>Nationality: Filibino</Text>
          <Text style={styles.nannyLocation}>Location: Tanger, Morocco</Text>
          <Text style={styles.nannyExperience}>Experience: 3yrs</Text>
          <TouchableOpacity style={styles.viewProfileButton}>
            <Text style={styles.viewProfileText}>View profile</Text>
          </TouchableOpacity> */}
      {/* </View> */}
      {/* </View> */}
    </View>
  );
};

export default VisitorHomeScreen;
