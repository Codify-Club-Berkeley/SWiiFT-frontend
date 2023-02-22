import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Root = createNativeStackNavigator();

import TabNavigation from "./TabNavigation";
import AppEntryNavigator from "./AppEntryNavigation";

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="AppEntry" component={AppEntryNavigator}></Root.Screen>
        <Root.Screen name="Tab" component={TabNavigation}></Root.Screen>
      </Root.Navigator>
    </NavigationContainer>
  );
}
