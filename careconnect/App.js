import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./navigators/RootStackNavigator";
import { fonts } from "./assets/index";

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
        <RootStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
