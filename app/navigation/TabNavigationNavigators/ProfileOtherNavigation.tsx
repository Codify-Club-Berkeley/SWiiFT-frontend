import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ProfileNav = createNativeStackNavigator();

import Profile from "../../pages/profiles/ProfileOther";

export default function ProfileOtherNavigator() {
  return (
    <ProfileNav.Navigator screenOptions={{ headerShown: false }}>
      <ProfileNav.Screen
        name="Profiles"
        component={Profile}
        options={{ headerShown: false }}
      ></ProfileNav.Screen>
    </ProfileNav.Navigator>
    )
}