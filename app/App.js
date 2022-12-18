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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import "expo-dev-client";

// GoogleSignIn initial configuration
// iosClientId is required for iOS platform development and
// webCLientId for Android. Use only what is suitable to you
GoogleSignin.configure({
  scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
  webClientId:
    "827758753919-2mlcjfukg9tc6rlbhc3npi5jh0v472b8.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
  iosClientId:
    "827758753919-eceonlornfbqcl422giqcg6a9tirskn4.apps.googleusercontent.com", // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  googleServicePlistPath: "", // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  openIdRealm: "", // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
});

SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
