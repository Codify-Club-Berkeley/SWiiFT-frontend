import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import colors from "../../styles/ColorStyles";

import Suggested from "./SuggestedPersonCard";
import OvalSearchTextEntry from "../../components/entry-fields/OvalSearchTextEntry";

export default function Locals() {
  return (
    <View style={styles.container}>
      <View>
        <OvalSearchTextEntry></OvalSearchTextEntry>
      </View>

      <View style={{ flex: 1, flexDirection: "row" }}>
        <Suggested></Suggested>
        <Suggested></Suggested>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Suggested></Suggested>
        <Suggested></Suggested>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: [
    {
      flex: 1,
      alignItems: "center",
      justifyContent: "top",
    },
    colors.backgroundGray,
  ],
});
