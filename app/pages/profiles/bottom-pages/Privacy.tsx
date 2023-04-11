import React from "react";
import { Button, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import texts from "../../../styles/TextStyles";
import Bullet from "./TextComponents/Bullet";

export default function Privacy() {
  return (
    <View style={[styles.container,{flexDirection: 'column', flex:1},]}>
      <StatusBar/>
      <View style={[styles.headerContainer, {flexDirection: 'column'},]}>
        <Text style={styles.title}>Privacy</Text>
      </View>
      <View style={[styles.contentContainer, {flexDirection: 'column'},]}>
        <ScrollView>
          <Text style={[styles.sectionTitle, {paddingBottom: '2%'}]}>Privacy Policy</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>SWiiFT Corporation built the SWiiFT app as a Free app. This SERVICE is provided by SWiiFT Corporation at no cost and is intended for use as is.
          This page is used to inform visitors regarding our policies with the collection, 
          use, and disclosure of Personal Information if anyone decided to use our Service.</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. 
          The Personal Information that we collect is used for providing and improving the Service. 
          We will not use or share your information with anyone except as described in this Privacy Policy.</Text>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, 
          which are accessible at SWiiFT unless otherwise defined in this Privacy Policy.</Text>

          <Text style={[styles.sectionTitle, {paddingBottom: '2%'}]}>Information Collection & Use</Text>
          <Text style={[styles.mainText]}>For a better experience, while using our Service, we may require you to provide us with certain personally 
          identifiable information, including but not limited to name, address, email, date of birth. The information that we request will be retained by us and used as described in this privacy policy.
          The app does use third-party services that may collect information used to identify you. 
          Link to the privacy policy of third-party service providers used by the app</Text>
          <View style={[styles.subContentContainer, {paddingBottom: '15%'}]}>
            <Bullet text="Google Play Services"></Bullet>
            <Bullet text="Google Analytics for Firebase"></Bullet>
          </View>

          <Text style={[styles.sectionTitle, {paddingBottom: '2%'}]}>Log Data</Text>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}>We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information 
          (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, 
          the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.</Text>

          <Text style={[styles.sectionTitle, {paddingBottom: '2%'}]}>Cookies</Text>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. 
          These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
          This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. 
          You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</Text>

          <Text style={[styles.sectionTitle, {paddingBottom: '2%'}]}>Service Providers</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>We may employ third-party companies and individuals due to the following reasons:</Text>
          <View style={[styles.subContentContainer, {paddingBottom: '2%'}]}>
            <Bullet text="To facilitate our Service;"></Bullet>
            <Bullet text="To provide the Service on our behalf;"></Bullet>
            <Bullet text="To perform Service-related services; or"></Bullet>
            <Bullet text="To assist us in analyzing how our Service is used."></Bullet>
          </View>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}>We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. 
          However, they are obligated not to disclose or use the information for any other purpose.</Text>

          <Text style={[styles.sectionTitle, {paddingBottom: '2%'}]}>Security</Text>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. 
          But remember that no method of transmission over the internet, 
          or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</Text>

          <Text style={[styles.sectionTitle, {paddingBottom: '2%'}]}>Links to Other Sites</Text>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. 
          Therefore, we strongly advise you to review the Privacy Policy of these websites. 
          We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</Text>

          <Text style={[styles.sectionTitle, {paddingBottom: '2%'}]}>Changes to This Privacy Policy</Text>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}>We may update our Privacy Policy from time to time. 
          Thus, you are advised to review this page periodically for any changes. 
          We will notify you of any changes by posting the new Privacy Policy on this page.
          This policy is effective as of 2022-09-19</Text>

          <Text style={[styles.sectionTitle, {paddingBottom: '2%'}]}>Contact Us</Text>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}>If you have any questions or suggestions about our Privacy Policy, 
          do not hesitate to contact us at swiift.help@gmail.com. 
          This privacy policy page was created at privacypolicytemplate.net and modified/generated by App Privacy Policy Generator</Text>
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
