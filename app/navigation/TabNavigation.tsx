import React from "react";
import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from "../pages/profiles/Profile";
import Messages from "../pages/messages/Messages";
import Locals from "../pages/explore/Locals";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
        <Tab.Screen name="Messages" component={Messages}></Tab.Screen>
        <Tab.Screen name="Locals" component={Locals}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
