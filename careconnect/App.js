import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync(); // Keep splash screen visible until we are ready to hide it

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    FiraSansMedium: require("./assets/fonts/FiraSans-Medium.ttf"),
    FiraSansMediumItalic: require("./assets/fonts/FiraSans-MediumItalic.ttf"),
    FiraSansRegular: require("./assets/fonts/FiraSans-Regular.ttf"),
    FiraSansSemiBold: require("./assets/fonts/FiraSans-SemiBold.ttf"),
    FiraSansSemiBoldItalic: require("./assets/fonts/FiraSans-SemiBoldItalic.ttf"),
    FiraSansThin: require("./assets/fonts/FiraSans-Thin.ttf"),
    FiraSansThinItalic: require("./assets/fonts/FiraSans-ThinItalic.ttf"),
  });

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
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Text style={styles.FiraSansSemiBold}>We are readyyyyyyy</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B272A4",
    alignItems: "center",
    justifyContent: "center",
  },
  FiraSansMedium: {
    fontFamily: "FiraSansMedium",
    fontSize: 20,
  },
  FiraSansMediumItalic: {
    fontFamily: "FiraSansMediumItalic",
    fontSize: 20,
  },
  FiraSansRegular: {
    fontFamily: "FiraSansRegular",
    fontSize: 20,
  },
  FiraSansSemiBold: {
    fontFamily: "FiraSansSemiBold",
    fontSize: 20,
  },
  FiraSansSemiBoldItalic: {
    fontFamily: "FiraSansSemiBoldItalic",
    fontSize: 20,
  },
  FiraSansThin: {
    fontFamily: "FiraSansThin",
    fontSize: 20,
  },
  FiraSansThinItalic: {
    fontFamily: "FiraSansThinItalic",
    fontSize: 20,
  },
});
