import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabs from "./tabsNav/BottomTabs";
import CustomDrawer from "./CustomDrawer";
import { AppProvider } from "../../../context/AppProvider";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  return (
    <AppProvider>
    <Drawer.Navigator useLegacyImplementation drawerContent={CustomDrawer}>
      <Drawer.Screen
        options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
        name="maintab"
        component={BottomTabs}
      />
    </Drawer.Navigator>
    </AppProvider>
  );
};

export default DrawerNavigator;
