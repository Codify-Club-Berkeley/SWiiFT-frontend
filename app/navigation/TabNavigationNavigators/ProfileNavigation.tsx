import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ProfileNav = createNativeStackNavigator();

import Profile from "../../pages/profiles/Profile";
import FAQ from "../../pages/profiles/bottom-pages/FAQ";
import AccountSettings from "../../pages/profiles/bottom-pages/AccountSettings";
import Contact from "../../pages/profiles/bottom-pages/Contact";
import Privacy from "../../pages/profiles/bottom-pages/Privacy";
import TOS from "../../pages/profiles/bottom-pages/TOS";

export default function ProfileNavigator() {
  return (
    <ProfileNav.Navigator screenOptions={{ headerShown: false }}>
      <ProfileNav.Screen
        name="Profiles"
        component={Profile}
        options={{ headerShown: false }}
      ></ProfileNav.Screen>
      <ProfileNav.Screen
        name="FAQ"
        component={FAQ}
        options={{ headerShown: false }}
      ></ProfileNav.Screen>
      <ProfileNav.Screen
        name="AccountSettings"
        component={AccountSettings}
        options={{ headerShown: false }}
      ></ProfileNav.Screen>
      <ProfileNav.Screen
        name="Contact"
        component={Contact}
        options={{ headerShown: false }}
      ></ProfileNav.Screen>
      <ProfileNav.Screen
        name="Privacy"
        component={Privacy}
        options={{ headerShown: false }}
      ></ProfileNav.Screen>
      <ProfileNav.Screen
        name="TOS"
        component={TOS}
        options={{ headerShown: false }}
      ></ProfileNav.Screen>
    </ProfileNav.Navigator>
  );
}
