import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    urbanist: require("../assets/fonts/Urbanist-Regular.ttf"),
    lobster: require("../assets/fonts/Lobster-Regular.ttf"),
  });
