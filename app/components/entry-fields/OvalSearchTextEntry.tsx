import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Image } from "react-native";

import colors from "../../styles/ColorStyles";

export default function OvalSearchTextEntry() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: "20%", resizeMode: "contain" }}
        source={require("../../assets/images/icons/search.png")}
      ></Image>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
  },
  container: [
    {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: 250,

      borderRadius: 20,
      padding: 20,
      border: 20,
    },
    colors.inputMediumGray,
  ],
});
