import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/welcome/WelcomeScreen";

const WelcomeStack = createStackNavigator();
const WelcomeStackNavigator = () => {
  return (
    <WelcomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Welcome"
    >
      <WelcomeStack.Screen name="Welcome Page" component={WelcomeScreen} />
    </WelcomeStack.Navigator>
  );
};

export default WelcomeStackNavigator;
