import React from "react";
import { Button, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import texts from "../../../styles/TextStyles";

export default function Contact() {
  return (
    <View style={[styles.container,{flexDirection: 'column', flex:1},]}>
      <View style={[styles.headerContainer, {flexDirection: 'column'},]}>
        <Text style={texts.boldTitle}>Contact Us</Text>
      </View>
      <View style={[styles.contentContainer, {flexDirection: 'column'},]}>
        <Text>Hello</Text>
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
    flex: 208,
    alignItems: "center",
    justifyContent: "center"
  },

  contentContainer: {
    flex: 756,
    alignItems: "center",
    justifyContent: "center"
  },
});
