import React from "react";
import { Button, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import texts from "../../../../styles/TextStyles";

export default function BulletLarge(props: {text: string;}) {
  return (
    <View style={[styles.bulletPointContainer, {paddingBottom: '2%'}]}>
      <Text style={[styles.mainTextLarge, {fontSize: 30, paddingTop: "1%"}]}>{'\u2022'}</Text>
      <Text style={[styles.mainTextLarge, {flex: 1, paddingLeft: "4%"}]}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bulletPointContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: 'row'
  },

  mainText: {
    fontFamily: "Inter_400Regular",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 21,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "white",
  },

  mainTextLarge: {
    fontFamily: "Inter_400Regular",
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 29,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "white",
  },
});
