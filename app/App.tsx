import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { registerRootComponent } from "expo";

import RootNavigation from "./navigation/RootNavigation";

export default function App() {
  return <RootNavigation></RootNavigation>;
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
