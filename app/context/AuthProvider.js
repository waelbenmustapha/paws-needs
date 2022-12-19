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
import Loading from "../screens/Loading";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [timer, setTimer] = useState(true);
  const [user, setUser] = useState("loading");

  // save user in async storage
  const saveAsyncUser = (user) => {
    storeDataObj("user", user);
    setUser(user);
  };

  // remove user from async storage
  const getAsyncUser = async () => {
    const user = await getDataObj("user");
    return user;
  };

  const getAsyncUserId = () => {
    return user.user._id;
  };
  // remove user from async storage
  const removeAsyncUser = () => {
    setUser(null);
    AsyncStorage.removeItem("user");
  };

  useEffect(() => {
    getDataObj("user").then((res) => setUser(res));
    setTimeout(() => setTimer(false), 2000);
  }, []);

  if (user === "loading" || timer) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        saveAsyncUser,
        getAsyncUser,
        getAsyncUserId,
        removeAsyncUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
