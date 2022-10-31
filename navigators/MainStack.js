import { View, Text } from "react-native";
import React from "react";
import { useAuth } from "../context/AuthProvider";
import NotLoggedIn from "./NotLoggedIn";
import LoggedIn from "./LoggedIn";

const MainStack = () => {
  const auth = useAuth();
  return auth.user ? <LoggedIn /> : <NotLoggedIn />;
};

export default MainStack;
