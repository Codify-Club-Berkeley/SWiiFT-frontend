import React from "react";
import { Button, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import BulletLarge from "./TextComponents/BulletLarge";
import texts from "../../../styles/TextStyles";
import NumberLarge from "./TextComponents/NumberLarge";

export default function FAQ() {
  return (
    <View style={[styles.container,{flexDirection: 'column', flex:1},]}>
      <StatusBar/>
      <View style={[styles.headerContainer, {flexDirection: 'column'},]}>
        <Text style={styles.title}>FAQs</Text>
      </View>
      <View style={[styles.contentContainer, {flexDirection: 'column'},]}>
        <ScrollView>
          <Text style={styles.sectionTitle}>What does my level mean?</Text>
          <View style={[styles.subContentContainer, {flexDirection: 'column'},]}>
            <Text style={[styles.mainText, {paddingBottom: '2%'}]}>Level 1</Text>
            <BulletLarge text="Sign up and create an account with SWiiFT."></BulletLarge>
            <Text style={[styles.mainText, {paddingBottom: '10%'}]}></Text>
            <Text style={[styles.mainText, {paddingBottom: '2%'}]}>Level 2</Text>
            <BulletLarge text="Fill up all your profile information."></BulletLarge>
            <BulletLarge text="Let us know here when you're done!"></BulletLarge>
            <Text style={[styles.mainText, {paddingBottom: '10%'}]}></Text>
            <Text style={[styles.mainText, {paddingBottom: '2%'}]}>Level 3</Text>
            <BulletLarge text="Have your first meetup with a SWiiFT user."></BulletLarge>
            <Text style={[styles.mainText, {paddingBottom: '2%'}]}></Text>
            <Text style={[styles.mainText, {paddingBottom: '2%'}]}>Send us the following information on instagram @swiift.app</Text>
            <NumberLarge number="1." text="Your name (first, last) as it appears on the app."></NumberLarge>
            <NumberLarge number="2." text="Your new encounter's name (first, last) as it appears on the app."></NumberLarge>
            <NumberLarge number="3." text="A picture of both of you together."></NumberLarge>
            <Text style={[styles.mainText, {paddingBottom: '4%'}]}></Text>
            <Text style={[styles.mainText, {paddingBottom: '10%'}]}>We will level up the two of you!</Text>
            <Text style={[styles.mainText, {paddingBottom: '2%'}]}>Level 4</Text>
            <BulletLarge text="Have three SWiiFT meetups and follow the same 
                              procedure as indicated in level 3."></BulletLarge>
            <Text style={[styles.mainText, {paddingBottom: '4%'}]}>OR</Text>
            <BulletLarge text="Have two SWiiFT meetups and tag us in a social media post."></BulletLarge>
            <Text style={[styles.mainText, {paddingBottom: '10%'}]}></Text>
            <Text style={[styles.mainText, {paddingBottom: '2%'}]}>Level 5</Text>
            <BulletLarge text="Have five SWiiFT meetups (including one in a city that is not your home city)."></BulletLarge>
            <Text style={[styles.mainText, {paddingBottom: '20%'}]}></Text>
          </View>

          <Text style={[styles.sectionTitle, {paddingBottom: '8%'}]}>How can I get credit for my meet-ups?</Text>
          <Text style={[styles.mainText, {paddingBottom: '4%'}]}>Whenever you meet another user through SWiiFT, might it be as a local or a traveler, 
          send us the following information on instagram @swiift.app: </Text>
          <NumberLarge number="1." text="Your name (first, last) and email ID as it appears on the app."></NumberLarge>
          <NumberLarge number="2." text="Your new encounter's name (first, last) as it appears on the app."></NumberLarge>
          <NumberLarge number="3." text="A picture of both of you together."></NumberLarge>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}></Text>
          <Text style={[styles.mainText, {paddingBottom: '40%'}]}>We will increase your meetup score on your profile.</Text>

          <Text style={[styles.sectionTitle, {paddingBottom:'10%'}]}>Have another question?</Text>
          <Text style={[styles.mainText, {paddingBottom: '10%'}]}>Send inquiries here using our feedback form.</Text>
          <Pressable style={[styles.button]}>
            <Text style={[styles.buttonText, {paddingBottom: '20%'}]}>Submit form.</Text>
          </Pressable>
          <Text style={[styles.mainText, {paddingBottom: '10%'}]}>Someone from the SWiiFT team typically responds within 48 hours.</Text>
        </ScrollView>
      </View>
    </View>
)}

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
