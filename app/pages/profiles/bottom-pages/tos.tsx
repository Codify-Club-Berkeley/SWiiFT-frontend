import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import texts from "../../../styles/TextStyles";

export default function tos() {
  return (
    <View style={[styles.container,{flexDirection: 'column', flex:1},]}>
      <View style={[styles.headerContainer, {flexDirection: 'column', flex:1},]}>
        < Text style={texts.header}>Terms of Service</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D2C2E",
    alignItems: "center",
    justifyContent: "center",
  },

  headerContainer: {
    flex: 208
  },

  contentContainer: {
    flex: 756
  },
});
