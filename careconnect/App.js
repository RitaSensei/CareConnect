import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync(); // Keep splash screen visible until we are ready to hide it

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    'Sabon': require('./assets/fonts/Sabon.ttf'),
    'SabonBold': require('./assets/fonts/SabonBold.ttf'),
    'SabonItalic': require('./assets/fonts/SabonItalic.ttf'),
    'SabonBoldItalic': require('./assets/fonts/SabonBoldItalic.ttf'),
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
        <Text style={styles.SabonBold} >We are readyyyyyyy</Text>
        <StatusBar style= "auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B272A4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Sabon: {
    fontFamily: 'Sabon',
    fontSize: 20,
  },
  SabonBold: {
    fontFamily: 'SabonBold',
    fontSize: 20,
  },
  SabonItalic: {
    fontFamily: 'SabonItalic',
    fontSize: 20,
  },
  SabonBoldItalic: {
    fontFamily: 'SabonBoldItalic',
    fontSize: 20,
  },
});
