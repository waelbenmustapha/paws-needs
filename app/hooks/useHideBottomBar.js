import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { useApp } from "../context/AppProvider";

const useHideBottomBar = () => {
  const app = useApp();
  useFocusEffect(
    useCallback(() => {
      app.hideBottomBar();

      return () => {
        console.log("returning")
        app.showBottomBar();
      };
    }, [])
  );
};

export default useHideBottomBar;

