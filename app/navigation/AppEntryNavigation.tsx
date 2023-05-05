import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Entry = createNativeStackNavigator();

import MainPage from "../pages/setup-and-login/MainPage";
import Login from "../pages/setup-and-login/Login";
import SignUp from "../pages/setup-and-login/SignUp";
import Splash2 from "../pages/setup-and-login/Splash2";
import Begin from "../pages/setup-and-login/Begin";
import Start from "../pages/setup-and-login/Start";

export default function AppEntryNavigator() {
  return (
    <Entry.Navigator screenOptions={{ headerShown: false }}>
      <Entry.Screen name="Splash2" component={Splash2}></Entry.Screen>
      <Entry.Screen name="MainPage" component={MainPage}></Entry.Screen>
      <Entry.Screen name="Login" component={Login}></Entry.Screen>
      <Entry.Screen name="SignUp" component={SignUp}></Entry.Screen>
      <Entry.Screen name="Begin" component={Begin}></Entry.Screen>
      <Entry.Screen name="Start" component={Start}></Entry.Screen>
    </Entry.Navigator>
  );
}
