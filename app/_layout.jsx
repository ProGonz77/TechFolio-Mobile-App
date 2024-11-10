import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { useFonts} from 'expo-font'
import { useEffect } from 'react'
import { SplashScreen } from 'expo-router'


SplashScreen.preventAutoHideAsync();

const MainLayout = () => {

  const [fontsLoaded, error] = useFonts({
    "Ubuntu-Bold": require("../assets/fonts/Ubuntu-Bold.ttf"),
     "Ubuntu-Regular": require("../assets/fonts/Ubuntu-Regular.ttf"),
     "Ubuntu-Light": require("../assets/fonts/Ubuntu-Light.ttf"),
     "Jura-Bold": require("../assets/fonts/Jura-Bold.ttf"),
   
  });
  
  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }
  
  return (
    // <Slot></Slot>
    <Stack>

      <Stack.Screen name="index" options={{
        headerShown:false
      }}/>

      <Stack.Screen name="(auth)" options={{
        headerShown:true
      }}/>

    </Stack>
  )
}

export default MainLayout

