import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProfileNavigator from "./TabNavigationNavigators/ProfileNavigation";
import LocalsNavigator from "./TabNavigationNavigators/LocalsNavigation";
import MessagesNavigator from "./TabNavigationNavigators/MessagesNavigation";

import Test from "../pages/Test";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{ headerShown: false }}
      ></Tab.Screen>
      <Tab.Screen
        name="MessagesNavigator"
        component={MessagesNavigator}
      ></Tab.Screen>
      <Tab.Screen
        name="LocalsNavigator"
        component={LocalsNavigator}
      ></Tab.Screen>
      <Tab.Screen name="Test" component={Test}></Tab.Screen>
    </Tab.Navigator>
  );
}
