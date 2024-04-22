import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import VisitorHomeScreen from "../screens/home/visitor/VisitorHomeScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const Tab = AnimatedTabBarNavigator();
const Stack = createStackNavigator();

const VisitorTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        activeTintColor: "#FA89B8",
        tabStyle: { height: 75 },
      }}
      appearance={{
        topPadding: 10,
        bottomPadding: -8,
        activeTabBackgrounds: "#F1E7E8",
        whenInactiveShow: "icon-only",
        dotSize: "small",
        tabButtonLayout: "vertical",
      }}
    >
      <Tab.Screen
        name="Visitor Home Page"
        component={VisitorHomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            fontFamily: "FiraSansRegular",
            fontSize: 10,
          },
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={18} color={color} />
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
            fontSize: 10,
          },
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "settings" : "settings-outline"} size={18} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const VisitorStackNavigator = ({ navigation }) => {
  const HeaderLogo = () => {
    return <Image style={styles.logo} source={require("../assets/icons/logo-no-bg.png")} />;
  };

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitle: HeaderLogo,
        headerStyle: styles.headerStyle,
        headerTintColor: "#fff",
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate("WelcomeScreen", { screen: "Welcome Page" })}
          >
            <FontAwesome name="user-circle" size={38} color="black" style={{ right: 10 }} />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="VisitorTabNavigator" component={VisitorTabNavigator} />
    </Stack.Navigator>
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
    right: 85,
    top: -5,
  },
});

export default VisitorStackNavigator;
