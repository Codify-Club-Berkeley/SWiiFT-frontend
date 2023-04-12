import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Image } from "react-native";

import colors from "../../styles/ColorStyles";

export default function RectangleTextEntry() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");

  return (
    <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        multiline
        value={number}
        placeholder="e.g. grab drinks / share a meal / go out tonight / play sports / explore the city / visit a museum..."
        placeholderTextColor="#FFF"
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    flexWrap: "wrap",
    height: 180,
    fontFamily: "Inter_200ExtraLight",
    fontSize: 24,
    margin: "7%",
    marginBottom: "-1%",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#575658",
    color: "#FFF",
    //opacity: .55,
    borderRadius: 10,
    borderColor: "#575658",
  },
});
