import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NewAccountNanny1Screen from "../screens/creating account/nanny/NewAccountNanny1";
import NewAccountNanny2Screen from "../screens/creating account/nanny/NewAccountNanny2";
import NewAccountParentScreen from "../screens/creating account/parent/NewAccountParent";

import { Image, StyleSheet, TouchableOpacity } from "react-native";

const NewAccountStack = createStackNavigator();

const NewAccountStackNavigator = () => {
  const HeaderLogo = () => {
    return <Image style={styles.logo} source={require("../assets/icons/logo-no-bg.png")} />;
  };
  return (
    <NewAccountStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitle: HeaderLogo,
        headerStyle: styles.headerStyle,
        headerTintColor: "#fff",
        // headerRight: () => (
        //   <TouchableOpacity
        //     onPress={() => navigation.navigate("WelcomeScreen", { screen: "Welcome Page" })}
        //   >
        //     <FontAwesome name="user-circle" size={38} color="black" style={{ right: 10 }} />
        //   </TouchableOpacity>
        // ),
      }}
    >
      <NewAccountStack.Screen name="Nanny New Account Page 1" component={NewAccountNanny1Screen} />
      <NewAccountStack.Screen name="Nanny New Account Page 2" component={NewAccountNanny2Screen} />
      <NewAccountStack.Screen name="Parent New Account Page" component={NewAccountParentScreen} />
    </NewAccountStack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#FA89B8",
    height: 110,
  },
  logo: {
    resizeMode: "contain",
    aspectRatio: 0.9,
    top: -5,
  },
});

export default NewAccountStackNavigator;
