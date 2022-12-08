import React from "react";
import { useAuth } from "../context/AuthProvider";
import LoggedIn from "./loggedInStack/LoggedIn";
import NotLoggedIn from "./notLoggedInStack/NotLoggedIn";


const MainStack = () => {
  const auth = useAuth();

  return auth.user ? <LoggedIn /> : <NotLoggedIn />;
};

export default MainStack;
