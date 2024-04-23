import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { Button } from "react-native-paper";

import styles from "./styles";
import { NewAccountNanny } from "../creating account/nanny/NewAccountNanny";
import { NewAccountParent } from "../creating account/parent/NewAccountParent";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/register-screen-bg.png")} style={styles.bg} />
      <View style={styles.content}>
        <Image source={require("../../assets/icons/logo-mauve-no-bg.png")} style={styles.logo} />
        <Text style={styles.subtitle}>Find the perfect caregiver for your family</Text>
        <View style={styles.box}>
          <Button
            style={styles.button}
            buttonColor="#F1E7E8"
            textColor="#B272A4"
            onPress={() => navigation.navigate("NewAccount", { screen: "Nanny New Account Page" })}
          >
            <Text style={styles.buttonText}>Nanny - I am looking for a job</Text>
          </Button>
          <Image
            source={require("../../assets/images/nanny-registration.png")}
            style={styles.image}
          />
        </View>
        <View style={[styles.box, { marginBottom: -320 }]}>
          <Button
            style={[styles.button, { bottom: 160 }]}
            buttonColor="#F1E7E8"
            textColor="#B272A4"
            onPress={() => navigation.navigate("NewAccount", { screen: "Parent New Account Page" })}
          >
            <Text style={styles.buttonText}>Family - I am looking for a nanny</Text>
          </Button>
          <Image
            source={require("../../assets/images/parent-registration.png")}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
