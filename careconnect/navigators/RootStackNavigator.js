import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeStackNavigator from "./WelcomeStackNavigator";
import AuthStackNavigator from "./AuthStackNavigator";

const RootStack = createStackNavigator();
const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
      initialRouteName="Welcome"
    >
      <RootStack.Screen name="WelcomeScreen" component={WelcomeStackNavigator} />
      <RootStack.Screen name="AuthScreen" component={AuthStackNavigator} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
