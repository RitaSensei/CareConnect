import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import VisitorHomeScreen from "../screens/home/visitor/VisitorHomeScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";
import { StyleSheet, Image } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";

const VisitorTab = createBottomTabNavigator();

const HeaderLogo = () => {
  return <Image style={styles.logo} source={require("../assets/icons/logo-version-rose.png")} />;
};

const VisitorStackNavigator = () => {
  return (
    <VisitorTab.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitle: HeaderLogo,
        headerTintColor: "#fff",
        headerStyle: styles.headerStyle,
      }}
      initialRouteName="Welcome Page"
    >
      <VisitorTab.Screen
        name="Visitor Home Page"
        component={VisitorHomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            fontFamily: "FiraSansRegular",
            fontSize: 12,
          },
          tabBarIcon: ({ color, focused }) => {
            return <Entypo name="home" size={24} color={color} />;
          },
          tabBarActiveTintColor: "#FA89B8",
        }}
      />
      <VisitorTab.Screen
        name="Settings Page"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarLabelStyle: {
            fontFamily: "FiraSansRegular",
            fontSize: 12,
          },
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="settings" size={24} color={color} />;
          },
          tabBarActiveTintColor: "#FA89B8",
        }}
      />
    </VisitorTab.Navigator>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#FA89B8",
    borderBottomWidth: 0,
    shadowColor: "transparent",
    shadowOpacity: 0,
    elevation: 0,
    height: 90,
  },
  logo: {
    resizeMode: "contain",
    aspectRatio: 1,
    right: 95,
    top: -5,
  },
});
// TODO : change styles (add tab bar navigation)
export default VisitorStackNavigator;
