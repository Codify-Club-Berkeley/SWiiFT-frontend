import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Root = createNativeStackNavigator();

import TabNavigation from "./TabNavigation";
import AppEntryNavigator from "./AppEntryNavigation";

export default function RootNavigation() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Root.Navigator screenOptions={{ headerShown: false }}>
        <Root.Screen
          name="AppEntry"
          component={AppEntryNavigator}
        ></Root.Screen>
=======
      <Root.Navigator
        screenOptions={{headerShown: false}}
      >
        <Root.Screen name="AppEntry" component={AppEntryNavigator}></Root.Screen>
>>>>>>> 39e2f47843cdfb5b53b037a632dc2cb2ff279bd4
        <Root.Screen name="Tab" component={TabNavigation}></Root.Screen>
      </Root.Navigator>
    </NavigationContainer>
  );
}
