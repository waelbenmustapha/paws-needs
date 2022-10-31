import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getDataObj,
  getDataVal,
  storeDataObj,
  storeDataVal,
} from "../utils/AsyncStorageFunctions";
import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [timer, setTimer] = useState(true);
  const [user, setUser] = useState("loading");
  useEffect(() => {
    getDataObj("user").then((res) => setUser(res));
    setTimeout(() => setTimer(false), 2000);
  }, []);

  const login = (user) => {
    storeDataObj("user", user);
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    AsyncStorage.removeItem("user");
  };
  if (user === "loading" || timer) {
    return (
      <View
        style={{
          backgroundColor: "white",
          display: "flex",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}>
          Welcome to Paws ...
        </Text>
      </View>
    );
  }
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
