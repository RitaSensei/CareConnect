import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserHomeScreen from "../screens/home/user/UserHomeScreen";
// import SettingsScreen from "../screens/settings/SettingsScreen";
// import ProfileScreen from "../screens/profile/ProfileScreen";
// import NotificationsScreen from "../screens/notifications/NotificationsScreen";

import { StyleSheet, Image } from "react-native";

const UserTab = createBottomTabNavigator();

const HeaderLogo = () => {
  return <Image style={styles.logo} source={require("../assets/icons/logo-version-rose.png")} />;
};

const UserStackNavigator = () => {
  return (
    <UserTab.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitle: HeaderLogo,
        headerTintColor: "#fff",
      }}
      initialRouteName="Welcome Page"
    >
      <UserTab.Screen
        options={{ headerStyle: styles.headerStyle }}
        name="User Home Page"
        component={UserHomeScreen}
      />
      {/* <UserTab.Screen
        options={{ headerStyle: styles.headerStyle }}
        name="Settings Page"
        component={SettingsScreen}
      />
      <UserTab.Screen
        options={{ headerStyle: styles.headerStyle }}
        name="Profile Page"
        component={ProfileScreen}
      />
      <UserTab.Screen
        options={{ headerStyle: styles.headerStyle }}
        name="Notifications Page"
        component={NotificationsScreen}
      /> */}
    </UserTab.Navigator>
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
export default UserStackNavigator;
