import React from "react";
import { Button, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Bullet from "./TextComponents/Bullet";
import texts from "../../../styles/TextStyles";

export default function TOS() {
  return (
    <View style={[styles.container,{flexDirection: 'column', flex:1},]}>
      <StatusBar/>
      <View style={[styles.headerContainer, {flexDirection: 'column'},]}>
        <Text style={styles.title}>Terms of Service</Text>
      </View>
      <View style={[styles.contentContainer, {flexDirection: 'column'},]}>
        <ScrollView style = {{width: "100%"}}>
          <Text style={[styles.sectionTitle, {paddingBottom: '4%'}]}>Our Terms of Use</Text>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}>Welcome to SWiiFT referred hereto as “us,” “we,” the “Company” or “SWiiFT”. 
          SWiiFT and you being each individually referred to as a “Party” or collectively as “the Parties”.</Text>
          <Text style={[styles.sectionTitle, {paddingBottom: '2%'}]}>1. Agreement on our Terms of Use</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>By creating a SWiiFT account or using any SWiiFT service via the SWiiFT app (the “Service”), you agree to be bound by our Terms of Use and any terms disclosed to you (this “Agreement”). 
          If you do not accept and agree to be bound by all of the terms of this Agreement, you should not access or use the Service.</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>We may make changes to this Agreement and to the Service from time to time to reflect changes in or requirements of the law, new features, changes in business practices or any other reason. You should regularly check for the most recent version on swiiftapp.com that is the version that applies. If the changes include material changes to your rights or obligations, we will notify you in advance of the changes (unless we are unable to do so under applicable law) by any reasonable mean. If you continue to use the Service after the changes become effective, then you agree to the revised Agreement that shall supersede any prior agreements and shall govern your entire relationship with SWiiFT.</Text>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}>To improve the Service, we may add new product features or enhancements from time to time as well as remove some features, and if these actions do not materially affect your rights or obligations, we may not provide you with notice before taking them. We may even suspend the Service entirely, in which event we will notify you in advance unless extenuating circumstances, such as safety or security concerns, prevent us from doing so.</Text>
          <Text style={[styles.sectionTitle, {paddingBottom: '4%'}]}>2. Eligibility Conditions</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>You must be at least 18 years of age to open an account on SWiiFT and use the Service. By opening an account and using the Service, you represent and warrant that:
          you can enter into a binding contract with SWiiFT,</Text>

          <Bullet text="You are not a person who is barred from using the Service under the laws of the United States or any other applicable jurisdiction,"></Bullet>
          <Bullet text="You will comply with this Agreement and all applicable local, state, national and international laws, rules and regulations, "></Bullet>
          <Bullet text="You have not committed, been convicted of, or pled no contest to a felony, a sex crime, or any crime involving violence or a threat of violence, and you are not required to register as a sex offender with any state, federal or local sex offender registry, "></Bullet>
          <Bullet text="You do not have more than one account on the Service, and"></Bullet>
          <Bullet text="You have not previously been removed from the Service by us, unless you have our express written permission to open a new account."></Bullet>

          <Text style={[styles.mainText, {paddingBottom: '15%'}]}>If at any time you cease to meet these requirements, all authorization to access our Service or systems will be automatically revoked and you must immediately delete your account.</Text>
          <Text style={[styles.sectionTitle, {paddingBottom: '4%'}]}>3. Your SWiiFT Account</Text>
          <Text style={[styles.mainText, {paddingBottom: '4%'}]}>In order to use SWiiFT, you may sign in using you email address. You are responsible for maintaining the confidentiality of the login credentials you use to sign up for SWiiFT, and you are solely responsible for all activities that occur under those credentials. If you think someone has gained access to your account, please immediately contact us at swiift.help@gmail.com. SWiiFT may terminate your account at any time without notice if it believes that you have violated this Agreement, and/or you do any of the following:</Text>
          <Bullet text="Use the Service or any content contained in the Service for any commercial purposes without our written consent,"></Bullet>
          <Bullet text="Copy, modify, transmit, make use of, or reproduce in any way any copyrighted material, images, trademarks, trade names, service marks, or other intellectual property, content or proprietary information accessible through the Service without our prior written consent,"></Bullet>
          <Bullet text="Express or imply that any statements you make are endorsed by SWiiFT,"></Bullet>
          <Bullet text="Reproduce or circumvent in any way the navigational structure or presentation of the Service or its contents,"></Bullet>
          <Bullet text="Use the Service in any way that could interfere with, disrupt or negatively affect the Service or the servers or networks connected to the Service,"></Bullet>
          <Bullet text="Upload viruses or other malicious code or otherwise compromise the security of the Service,"></Bullet>
          <Bullet text="Forge headers or otherwise manipulate identifiers in order to disguise the origin of any information transmitted to or through the Service,"></Bullet>
          <Bullet text="Use any reference to SWiiFT or the Service to direct any person to any other app or website for any purpose,"></Bullet>
          <Bullet text="Use, access, or publish the SWiiFT application programming interface without our prior written consent,"></Bullet>
          <Bullet text="Probe, scan or test the vulnerability of our Service,"></Bullet>
          <Bullet text="Encourage, promote, or agree to engage in any activity that violates this Agreement."></Bullet>
          <Text style={[styles.mainText, {paddingTop: '4%', paddingBottom: '2%'}]}>You may terminate your account at any time, for any reason, by following the relevant instructions in the Service.</Text>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}>You agree that your SWiiFT account is non-transferable and all of your rights to your account (including its Content as defined in Section 4) terminate upon your death.</Text>
          <Text style={[styles.sectionTitle, {paddingBottom: '4%'}]}>4. License</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>By SWiiFT:</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>SWiiFT grants you a personal, worldwide, royalty-free, non-assignable, non-exclusive, revocable, and non-sublicensable license to access and use the Service pursuant to this Agreement. This license and any authorization to access the Service are automatically revoked in any event causing the termination of your Account.</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>In consideration for SWiiFT allowing you to use the Service, you agree that we, our affiliates and our third-party partners may place advertising on the Service.</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>By YOU:</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>By creating an account, you grant to SWiiFT a worldwide, transferable, sub-licensable, royalty-free, right and license to host, store, use, copy, display, reproduce, adapt, edit, publish, modify, reformat, incorporate into other works, advertise, distribute, and otherwise make available to the general public information you post, upload, display or otherwise make available ( “post”) on the Service or transmit to other members ( “Content”) or authorize us to access from third parties. </Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>SWiiFT’s license to your Content shall be non-exclusive, except that SWiiFT’s license shall be exclusive with respect to derivative works created through use of the Service. Our license to your Content is subject to your rights under applicable law (including laws regarding personal data protection) and is for the limited purpose of operating, developing, providing, and improving the Service and researching and developing new ones. You agree that any Content you place or that you authorize us to place on the Service may be viewed by other members and may be viewed by any person visiting or participating in the Service.</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>You guarantee agree that all information that you submit upon creation of your account is accurate and truthful and you have the right to post the Content on the Service and grant the license to SWiiFT above.</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>You understand and agree that we may monitor or review any Content you post as part of the Service. We may delete any Content, in whole or in part, that in our sole judgment violates this Agreement or may harm the reputation of the Service.</Text>
          <Text style={[styles.mainText, {paddingBottom: '4%'}]}>You agree that SWiiFT may access, store, and disclose your Account information and Content if required to do so by law, by performing the Agreement or in a good faith belief that such access, storage or disclosure satisfies a legitimate interest, including to:</Text>
          <Bullet text="Comply with legal process,"></Bullet>
          <Bullet text="Enforce the Agreement,"></Bullet>
          <Bullet text="Respond to claims that any Content violates the rights of third parties,"></Bullet>
          <Bullet text="Respond to your requests for customer service, or"></Bullet>
          <Bullet text="Protect the rights, property or personal safety of the Company or any other person."></Bullet>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}></Text>

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

  bulletPointContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: 'row'
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
    marginTop: '2%',
    marginRight: '3%',  
    marginLeft: '7%',
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

  sectionTitle: {
    fontFamily: "Inter_700Bold",
    fontWeight: "700",
    fontSize: 22,
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
