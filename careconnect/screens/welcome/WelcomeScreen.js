import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../../assets/images/welcome-page-pic.png")} style={styles.image} />
      </View>
      <View style={styles.littleContainer}>
        <Text style={styles.title1}>Peace of Mind</Text>
        <Text style={styles.title2}>For Busy Parents</Text>
        <Text style={styles.description}>
          Ensuring a safe and happy experience for your children with making parenthood easier, one
          click at a time
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AuthScreen", { screen: "Signin Page" })}
        >
          <Text style={styles.buttonText}>
            Let's get started{"\t"}
            <AntDesign name="arrowright" size={18} color="#ffffff" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Visitor", { screen: "Visitor Home Page" })}
        >
          <Text style={styles.buttonText}>
            Go unregistered{"\t"}
            <AntDesign name="arrowright" size={18} color="#ffffff" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
