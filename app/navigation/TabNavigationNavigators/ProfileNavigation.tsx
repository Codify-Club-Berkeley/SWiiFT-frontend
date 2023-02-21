import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ProfileNav = createNativeStackNavigator();

import Profile from "../../pages/profiles/Profile";

export default function ProfileNavigator() {
  return (
    <ProfileNav.Navigator>
      <ProfileNav.Screen
        name="Profiles"
        component={Profile}
      ></ProfileNav.Screen>
    </ProfileNav.Navigator>
  );
}
