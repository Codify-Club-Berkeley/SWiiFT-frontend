import React from "react";
import { Button, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import texts from "../../../styles/TextStyles";

export default function AccountSettings() {
  return (
    <View style={[styles.container,{flexDirection: 'column', flex:1},]}>
      <View style={[styles.headerContainer, {flexDirection: 'column'},]}>
        <Text style={styles.title}>Account Settings</Text>
      </View>

      <View style={[styles.contentContainer, {flexDirection: 'column'},]}>
        <ScrollView style={[styles.svContainer]}>
          <View style={[{alignItems: "flex-start"}]}>
            <Text style={[styles.infoTitle, {paddingBottom: '5%'}, {marginLeft:"1%"}]}>First Name</Text>
            <Text style={[styles.mainText, {paddingBottom: '5%'}, {marginLeft:"1%"}]}>First Name</Text>
            <View style={styles.greyhorizontalBarrier}></View>

            <Text style={[styles.infoTitle, {paddingBottom: '5%'}, {marginLeft:"1%"}]}>Last Name</Text>
            <Text style={[styles.mainText, {paddingBottom: '5%'}, {marginLeft:"1%"}]}>Last Name</Text>
            <View style={styles.greyhorizontalBarrier}></View>

            <Text style={[styles.infoTitle, {paddingBottom: '5%'}, {marginLeft:"1%"}]}>Email Address</Text>
            <Text style={[styles.mainText, {paddingBottom: '5%'}, {marginLeft:"1%"}]}>Email Address</Text>
            <View style={styles.greyhorizontalBarrier}></View>

            <Text style={[styles.infoTitle, {paddingBottom: '5%'}, {marginLeft:"1%"}]}>Age</Text>
            <Text style={[styles.mainText, {paddingBottom: '5%'}, {marginLeft:"1%"}]}>YY</Text>
            <View style={styles.greyhorizontalBarrier}></View>

            <Text style={[styles.infoTitle, {paddingBottom: '5%'}, {marginLeft:"1%"}]}>Gender</Text>
            <Text style={[styles.mainText, {paddingBottom: '5%'}, {marginLeft:"1%"}]}>Gender</Text>
            <View style={styles.greyhorizontalBarrier}></View>

            <Text style={[styles.infoTitle, {paddingBottom: '5%'}, {marginLeft:"1%"}]}>Country of Origin</Text>
            <Text style={[styles.mainText, {paddingBottom: '5%'}, {marginLeft:"1%"}]}>Country of Origin</Text>
            <View style={styles.greyhorizontalBarrier}></View>

            <Text style={[styles.infoTitle, {paddingBottom: '5%'}, {marginLeft:"1%"}]}>Current Location Address</Text>
            <Text style={[styles.mainText, {paddingBottom: '5%'}, {marginLeft:"1%"}]}>Street Address</Text>
            <Text style={[styles.mainText, {paddingBottom: '5%'}, {marginLeft:"1%"}]}>City</Text>
            <Text style={[styles.mainText, {paddingBottom: '5%'}, {marginLeft:"1%"}]}>State</Text>
            <View style={styles.greyhorizontalBarrier}></View>

            <Text style={[styles.infoTitle, {paddingBottom: '5%'}, {marginLeft:"1%"}]}>Status</Text>
            <Text style={[styles.mainText, {paddingBottom: '5%'}, {marginLeft:"1%"}]}>Local/Traveler</Text>
            <View style={styles.greyhorizontalBarrier}></View>
          </View>

          <View style={[{alignItems: "center"}]}>
            <Pressable style={[styles.button]}>
              <Text style={[styles.buttonTextPurple, {marginBottom: "15%"}]}>Edit Account Settings</Text>
            </Pressable>
          </View>

          <View style={[{alignItems: "flex-start"}]}>
            <Pressable 
              style={[styles.button, {marginBottom: "5%"}]}>
                
              <View style={[{flexDirection: 'row'}, {width: "100%"}]}>
                <Text style={[styles.mainText, {flex: 35}, {marginLeft:"1%"}]}>Notifications</Text>
                <Text style={[styles.arrowText, {flex: 1}, {marginRight:"1%"}]}>❯</Text>
              </View>
            </Pressable>

            <View style={styles.greyhorizontalBarrier}></View>

            <Pressable 
              style={[styles.button, {marginBottom: "5%"}]}>
                
              <View style={[{flexDirection: 'row'}, {width: "100%"}]}>
                <Text style={[styles.mainText, {flex: 35}, {marginLeft:"1%"}]}>Delete Account</Text>
                <Text style={[styles.arrowText, {flex: 1}, {marginRight:"1%"}]}>❯</Text>
              </View>
            </Pressable>

            <View style={styles.greyhorizontalBarrier}></View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2D2C2E",
  },

  svContainer: {
    width: "100%",
    height: "100%"
  },

  title: {
    fontFamily: "Inter_700Bold",
    fontWeight: "700",
    color: "white",
    fontSize: 28,
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

  greyhorizontalBarrier: {
    height: 5,
    width: "100%",
    marginTop: "2%",
    marginBottom: "10%",
    backgroundColor: "#575658",
    borderRadius: 20,
  },

  infoTitle: {
    fontWeight: "700",
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
    letterSpacing: 0.055,
    color: "white",
  },

  mainText: {
    fontFamily: "Inter_400Regular",
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 29,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "white",
  },

  buttonTextPurple: {
    fontFamily: "Inter_400Regular",
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 29,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "#BC7BBC",
  },

  button: {

  },

  arrowText: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Inter_500Medium",
    color: "grey",
    textAlign: "right",
    letterSpacing: .055,
  },
});
