import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const LocalNav = createNativeStackNavigator();

import Locals from "../../pages/explore/Locals";

export default function LocalsNavigator() {
  return (
    <LocalNav.Navigator>
      <LocalNav.Screen name="Locals" component={Locals}></LocalNav.Screen>
    </LocalNav.Navigator>
  );
}
