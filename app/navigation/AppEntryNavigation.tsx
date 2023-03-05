import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Entry = createNativeStackNavigator();

import MainPage from "../pages/setup-and-login/MainPage";
import Login from "../pages/setup-and-login/Login";
import SignUp from "../pages/setup-and-login/SignUp";



export default function AppEntryNavigator() {
  return (
    <Entry.Navigator
      screenOptions={{headerShown: false}}
    >
      <Entry.Screen name="MainPage" component={MainPage}></Entry.Screen>
      <Entry.Screen name="Login" component={Login}></Entry.Screen>
      <Entry.Screen name="SignUp" component={SignUp}></Entry.Screen>

    </Entry.Navigator>
  );
}
