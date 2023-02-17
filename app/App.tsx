import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { registerRootComponent } from "expo";

import TabNavigation from "./navigation/TabNavigation";

export default function App() {
  return <TabNavigation></TabNavigation>;
}
registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
