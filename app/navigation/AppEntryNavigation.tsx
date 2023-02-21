import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Entry = createNativeStackNavigator();

import Login from "../pages/setup-and-login/Login";

export default function AppEntryNavigator() {
  return (
    <Entry.Navigator>
      <Entry.Screen name="Login" component={Login}></Entry.Screen>
    </Entry.Navigator>
  );
}
