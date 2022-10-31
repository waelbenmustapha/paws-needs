import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./context/AuthProvider";
import MainStack from "./navigators/MainStack";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <MainStack />
      </AuthProvider>
    </NavigationContainer>
  );
}
