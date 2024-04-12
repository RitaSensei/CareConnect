import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
// import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
// import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeStackNavigator from "./navigators/WelcomeStackNavigator";

import { fonts } from "./assets/index";
// import styles from "./styles";

SplashScreen.preventAutoHideAsync(); // Keep splash screen visible until we are ready to hide it

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts(fonts);

  useEffect(() => {
    async function prepare() {
      try {
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  // Function that hides our splash screen. We will call it when we are sure our application is loading on the root view
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  // Show a white screen if the app is not ready or the splash screen is not showing.
  if (!appIsReady || !fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer
        onReady={() => {
          onLayoutRootView();
        }}
      >
        <WelcomeStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
