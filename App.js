import { useCallback, useEffect } from "react";
import { StatusBar, View } from "react-native";
import { StatusBar as Expostatus } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./context/AuthProvider";
import MainStack from "./navigators/MainStack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    urbanist: require("./assets/fonts/Urbanist-Regular.ttf"),
    lobster: require("./assets/fonts/Lobster-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
          }}
          onLayout={onLayoutRootView}
        >
          <Expostatus style="dark" translucent={true} />

          <NavigationContainer>
            <AuthProvider>
              <MainStack />
            </AuthProvider>
          </NavigationContainer>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
