import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import VisitorHomeScreen from "../screens/home/visitor/VisitorHomeScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { Text, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";

// const Tab = createBottomTabNavigator();
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
};

const VisitorStackNavigator = ({ navigation }) => {
  const HeaderLogo = () => {
    return <Image style={styles.logo} source={require("../assets/icons/logo-version-rose.png")} />;
  };

  // const handleOptions = () => {
  //   alert("more options");
  // };

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: true,
        headerTitle: HeaderLogo,
        headerStyle: styles.headerStyle,
        headerTintColor: "#fff",
        headerRight: () => (
          // <TouchableOpacity
          //   activeOpacity={1}
          //   onPress={handleOptions}
          //   style={{ right: 10, backgroundColor: "#FA89B8" }}
          // >
          //   <SimpleLineIcons name="options-vertical" size={20} color="#fff" />
          // </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.headerSignupButton}
              onPress={() => navigation.navigate("AuthScreen", { screen: "Signup Page" })}
            >
              <Text style={styles.headerButtonText}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerSigninButton}
              onPress={() => navigation.navigate("AuthScreen", { screen: "Signin Page" })}
            >
              <Text style={styles.headerButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
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
  },
  logo: {
    resizeMode: "contain",
    aspectRatio: 1,
    right: 95,
    top: -5,
  },
  headerSigninButton: {
    alignItems: "center",
    marginRight: 5,
    borderRadius: 10,
    width: 75,
    height: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    flexDirection: "row",
  },
  headerSignupButton: {
    alignItems: "center",
    marginRight: 5,
    borderRadius: 10,
    width: 75,
    height: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    flexDirection: "row",
  },
  headerButtonText: {
    fontFamily: "FiraSansSemiBold",
    fontSize: 15,
    textAlignVertical: "center",
    color: "#FA89B8",
  },
});

export default VisitorStackNavigator;
