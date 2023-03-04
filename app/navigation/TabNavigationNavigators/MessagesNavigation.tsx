import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MessagesNav = createNativeStackNavigator();

import Messages from "../../pages/messages/Messages";

export default function MessagesNavigator() {
  return (
    <MessagesNav.Navigator screenOptions={{ headerShown: false }}>
      <MessagesNav.Screen
        name="Messages"
        component={Messages}
        options={{ headerShown: false }}
      ></MessagesNav.Screen>
    </MessagesNav.Navigator>
  );
}
