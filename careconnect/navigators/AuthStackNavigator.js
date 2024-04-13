import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SigninScreen from "../screens/signin/SigninScreen";
import SignupScreen from "../screens/signup/SignupScreen";
// import ResetPasswordScreen from "../screens/resetpassword/ResetPasswordScreen";
import { StyleSheet } from "react-native";

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        cardStyle: { backgroundColor: "#FFFFFF" },
        cardShadowEnabled: false,
        headerShown: false,
      }}
      initialRouteName="Welcome Page"
    >
      <AuthStack.Screen
        options={{ headerStyle: styles.headerStyle }}
        name="Signin"
        component={SigninScreen}
      />
      <AuthStack.Screen
        options={{ headerStyle: styles.headerStyle }}
        name="Signup"
        component={SignupScreen}
      />
      {/* <AuthStack.Screen
        options={{ headerStyle: styles.headerStyle }}
        name="Sms"
        component={VerifyEmailScreen}
      /> */}
      {/* <AuthStack.Screen
        options={{ headerStyle: styles.headerStyle }}
        name="ResetPassword"
        component={ResetPasswordScreen}
      /> */}
    </AuthStack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    borderBottomWidth: 0,
    shadowColor: "transparent",
    shadowOpacity: 0,
    elevation: 0, // remove shadow on Android
  },
});

export default AuthStackNavigator;
