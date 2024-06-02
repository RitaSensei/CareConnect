import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import UserHomeScreen from "../screens/home/user/UserHomeScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import NotificationsScreen from "../screens/notifications/NotificationsScreen";
import ChatBotScreen from "../screens/chatbot/ChatBotScreen";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Image, StyleSheet } from "react-native";

const Tab = AnimatedTabBarNavigator();
const Stack = createStackNavigator();

const UserTabNavigator = ({
  initialRouteName = 'User Home Page',
  activeTintColor = '#FA89B8',
  tabBarLabelStyle = { fontFamily: 'FiraSansRegular', fontSize: 10 },
  iconSize = 18,
  topPadding = 10,
  bottomPadding = -8,
  activeTabBackgrounds = '#F1E7E8',
  dotSize = 'small',
  tabButtonLayout = 'vertical',
}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        activeTintColor: activeTintColor,
        tabStyle: { height: 75 },
      }}
      appearance={{
        topPadding: topPadding,
        bottomPadding: bottomPadding,
        activeTabBackgrounds: activeTabBackgrounds,
        whenInactiveShow: "icon-only",
        dotSize: dotSize,
        tabButtonLayout: tabButtonLayout,
      }}
      initialRouteName={initialRouteName}
    >
      <Tab.Screen
        name="User Home Page"
        component={UserHomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: tabBarLabelStyle,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={iconSize} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings Page"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarLabelStyle: tabBarLabelStyle,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "settings" : "settings-outline"} size={iconSize} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile Page"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarLabelStyle: tabBarLabelStyle,
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "account" : "account-outline"}
              size={iconSize}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications Page"
        component={NotificationsScreen}
        options={{
          tabBarLabel: "Notifications",
          tabBarLabelStyle: tabBarLabelStyle,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name={focused ? "notifications" : "notifications-none"}
              size={iconSize}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const UserStackNavigator = ({ navigation }) => {
  const HeaderLogo = () => {
    return <Image style={styles.logo} source={require("../assets/icons/logo-no-bg.png")} />;
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitle: HeaderLogo,
        headerStyle: styles.headerStyle,
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="UserTabNavigator" component={UserTabNavigator} />
      <Stack.Screen name="ChatBot Screen" component={ChatBotScreen} />
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

export default UserStackNavigator;