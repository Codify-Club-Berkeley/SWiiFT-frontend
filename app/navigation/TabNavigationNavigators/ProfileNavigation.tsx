import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ProfileNav = createNativeStackNavigator();

import Profile from "../../pages/profiles/Profile";
import FAQ from "../../pages/profiles/bottom-pages/FAQ";

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
    </ProfileNav.Navigator>
  );
}
