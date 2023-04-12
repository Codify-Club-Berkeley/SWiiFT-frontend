import React from "react";
import { Button, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import texts from "../../../styles/TextStyles";

export default function Contact() {
  return (
    <View style={[styles.container,{flexDirection: 'column', flex:1},]}>
      <StatusBar/>
      <View style={[styles.headerContainer, {flexDirection: 'column'},]}>
        <Text style={[styles.title]}>Contact Us</Text>
      </View>
      <View style={[styles.contentContainer, {flexDirection: 'column'},]}>
        <Text style={[styles.mainText, {paddingBottom: '10%'}]}>Please submit any questions, comments, or concerns by filling out our contact form.</Text>
        <Text style={[styles.mainText, {paddingBottom: '20%'}]}>Someone on our team will reply within 48 hours.</Text>
        <Pressable style={[styles.button]}>
            <Text style={[styles.buttonText, {paddingBottom: '20%'}]}>Submit form.</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#2D2C2E",
  },

  headerContainer: {
    flex: 208,
    alignItems: "center",
    justifyContent: "center"
  },

  contentContainer: {
    flex: 756,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: '8%',
    marginLeft: '8%',
  },

  subContentContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: '8%',
    marginRight: '3%',  
    marginLeft: '3%',
  },

  mainText: {
    fontFamily: "Inter_400Regular",
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 29,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "white",
  },

  sectionTitle: {
    fontFamily: "Inter_700Bold",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24.2,
    color: "white",
  },

  title: {
    fontFamily: "Inter_700Bold",
    fontWeight: "700",
    color: "white",
    fontSize: 28,
  },

  buttonText: {
    fontFamily: "Inter_400Regular",
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 29,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "#BC7BBC",
  },

  button: {

  }
});
