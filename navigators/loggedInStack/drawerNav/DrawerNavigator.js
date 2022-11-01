import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../../CustomDrawer";
import BottomTabs from "./tabsNav/BottomTabs";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator useLegacyImplementation drawerContent={CustomDrawer}>
      <Drawer.Screen
        options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
        name="maintab"
        component={BottomTabs}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
