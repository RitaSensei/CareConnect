import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import VisitorHomeScreen from "../screens/home/visitor/VisitorHomeScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet } from "react-native";

// const Tab = createBottomTabNavigator();
const Tab = AnimatedTabBarNavigator();
const Stack = createStackNavigator();

const HeaderLogo = () => {
  return <Image style={styles.logo} source={require("../assets/icons/logo-version-rose.png")} />;
};

const VisitorTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      // tabBarActiveTintColor: "#FA89B8",
    }}
    tabBarOptions={{
      activeTintColor: "#FA89B8",
      // inactiveTintColor: "#222222",
    }}
    appearance={{
      topPadding: 10,
      bottomPadding: -5,
      activeTabBackgrounds: "#F1E7E8",
      // floating: true,
      whenInactiveShow: "icon-only",
      dotSize: "small",
    }}
  >
    <Tab.Screen
      name="Visitor Home Page"
      component={VisitorHomeScreen}
      options={{
        tabBarLabel: "Home",
        tabBarLabelStyle: {
          fontFamily: "FiraSansRegular",
          fontSize: 12,
        },
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings Page"
      component={SettingsScreen}
      options={{
        tabBarLabel: "Settings",
        tabBarLabelStyle: {
          fontFamily: "FiraSansRegular",
          fontSize: 12,
        },
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? "settings" : "settings-outline"} size={24} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const VisitorStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerBackTitleVisible: true,
      headerTitle: HeaderLogo,
      headerStyle: styles.headerStyle,
      headerTintColor: "#fff",
    }}
  >
    <Stack.Screen name="VisitorTabNavigator" component={VisitorTabNavigator} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#FA89B8",
  },
  logo: {
    resizeMode: "contain",
    aspectRatio: 1,
    right: 95,
    top: -5,
  },
});

export default VisitorStackNavigator;
