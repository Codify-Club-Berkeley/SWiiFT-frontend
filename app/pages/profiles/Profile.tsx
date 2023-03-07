import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from "react-native";
import { Inter_200ExtraLight, Inter_400Regular, Inter_500Medium, Inter_600SemiBold ,Inter_700Bold } from "@expo-google-fonts/inter";
import EditButton from "../../components/buttons/EditButton";

export default function Profile() {
  return (
    <ScrollView style = {styles.scrollView}>
      <View style={styles.container}>

        {/*   Header section    */}

        <View style={styles.header}>
          <Image 
            source={require('../../assets/cover-pic.png')} 
            style = {{
              height: "100%",
              width: "100%",
            }}
          />
          <View style={styles.image}>
          <Image 
            source={require('../../assets/ProfileEMPTY.png')} 
            style = {{
              height: 120,
              width: 120
            }}
          />
          </View>
          <Text style={styles.textName}>First</Text>
          <Text style={styles.textAge}>XX Gender</Text>
        </View>
        {/*   Profile data section    */}

        <View style={styles.profileData}>
          <View style={styles.leftItem}>
            <View style={styles.box1}>
              <View style={styles.rectangle}></View>
            </View>
            <View style={styles.box2}>
              <Text style={styles.textCTR}>CTR</Text>
            </View>
          </View>
          <View style={styles.barrier}></View>
          <View style={styles.centerItem}>
            <View style={styles.box1}>
              <Text style={styles.textMeetupsNum}>0</Text>
            </View>
            <View style={styles.box2}>
              <Text style={styles.textMeetups}>Meet ups</Text>
            </View>
          </View>
          <View style={styles.barrier}></View>
          <View style={styles.rightItem}>
            <View style={styles.box1}>
            <View style={styles.levelCircle}>
              <Text style={styles.levelNum}>1</Text>
            </View>
            </View>
            <View style={styles.box2}>
              <Text style={styles.textLevel}>Level</Text>
            </View>
          </View>
        </View>

        {/*   Image gallery section    */}

        <View style={styles.galleryContainer}>
          <View style = {styles.horizontalBarrier}></View>
          <View style={styles.imageTexts}>
            <View style = {styles.textContainer}>
              <Text style={styles.title}>Image Gallery</Text>
              <EditButton></EditButton>
            </View>
            <View style = {styles.subheadingContainer}>
              <Text style={styles.subheading}>Show your best travel pics!</Text>
            </View>
          </View>
          <View style={styles.galleryImages}>
            <Image source={require('../../assets/placeholder.png')} 
              style = {styles.placeholderImage}
            />
            <Image source={require('../../assets/placeholder.png')} 
              style = {styles.placeholderImage}
            />
             <Image source={require('../../assets/placeholder.png')} 
              style = {styles.placeholderImage}
            />
            <Image source={require('../../assets/placeholder.png')} 
              style = {styles.placeholderImage}
            />
            <Image source={require('../../assets/placeholder.png')} 
              style = {styles.placeholderImage}
            />
             <Image source={require('../../assets/placeholder.png')} 
              style = {styles.placeholderImage}
            />
          </View>
        </View>

        {/* About Me Section */}

        <View style={styles.galleryContainer}>
          <View style = {styles.horizontalBarrier}></View>
          <View style={styles.imageTexts}>
            <View style = {styles.textContainer}>
              <Text style={styles.title}>About Me</Text>
              <EditButton></EditButton>
            </View>
            <View style = {styles.subheadingContainer}>
              <Text style={styles.subheading}>What would you like to do with people you meet?</Text>
            </View>
          </View>
        </View>

        <TextInput
          style={styles.aboutmeBox}
          multiline
          placeholder="e.g. grab drinks / share a meal / go out tonight / play sports / explore the city / visit a museum..."
          placeholderTextColor="#FFF"
          >
        </TextInput>

        <View style={styles.galleryContainer}>
          <View style={styles.imageTexts}>
            <View style = {styles.textContainer}>
              <Text style={styles.title}>Country of origin</Text>
              <EditButton></EditButton>
            </View>
            <Text style={styles.subheading}>City</Text>
            <Text style={styles.subheading}>State</Text>
            <Text style={styles.subheading}>Country</Text>
          </View>
          <View style={styles.horizontalBarrier}></View>
          <View style={styles.imageTexts}>
            <View style = {styles.textContainer}>
              <Text style={styles.title}>Country of origin</Text>
            </View>
            <Text style={styles.subheading}>City</Text>
            <Text style={styles.subheading}>State</Text>
            <Text style={styles.subheading}>Country</Text>
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#2D2C2E",
    //alignItems: "center",
    //justifyContent: "center",
  },
  header: {
    flex: 2,
    width: "100%",
    height: "34%",
  },
  image: {
    left: "7%",
    top: "-35%",
  },
  textName: {
    left: "45%",
    top: "-85%",
    fontFamily: "Inter_700Bold",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 29,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "#FFFFFF",
    
  },
  textAge: {
    left: "45%",
    top: "-85%",
    fontFamily: "Inter_600SemiBold",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 29,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "white",
    
  },
  scrollView: {
    backgroundColor: "#2D2C2E",
  },
  profileData: {
    flex: 1,
    justifyContent: "center",
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: "12%",
    marginBottom: "-5%",
    
  },
  leftItem :{
    height: 90,
    marginTop: "10%",
    //marginBottom: "10%",
    marginLeft: "7%",
    paddingRight: 10,
    flex: 2,
    flexDirection: "column",
    //backgroundColor: 'red',
    alignItems: "center",
    textAlign: "center",
  },
  centerItem :{
    marginTop: "10%",
    flex: 3,
    flexDirection: "column",
    //backgroundColor: 'green'
    alignItems: "center",
    justifyContent: "center",
  },
  rightItem :{
    height: 90,
    marginTop: "10%",
    //marginBottom: "10%",
    marginRight: "7%",
    paddingLeft: 10,
    flex: 2,
    flexDirection: "column",
    //backgroundColor: 'red',
    alignItems: "center",
    textAlign: "center",
  },
  barrier: {
    marginTop: "10%",
    flex: .1,
    backgroundColor: "white",
    borderRadius: 3/2,
  },
  box1: {
    flex: 3,
  },
  box2: {
    flex: 1,
  },
  rectangle: {
    marginTop: 2,
    width: 70,
    height: 50,
    backgroundColor: "#E0E0E0",
    borderRadius: 50/4
  },
  textMeetupsNum: {
    marginTop: -10,
    fontWeight: "700",
    fontFamily: "Inter_700Bold",
    fontSize: 50,
    lineHeight: 77,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "#FFFFFF",
  },
  levelCircle: {
    marginTop: 2,
    width: 50,
    height: 50,
    backgroundColor: "#BC7BBC",
    borderRadius: 50/2,
    justifyContent: "center",
  },
  levelNum: {
    marginLeft: 50/3,
    fontWeight: "700",
    fontFamily: "Inter_700Bold",
    fontSize: 30,
    lineHeight: 39,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "#FFFFFF",
  },
  textCTR: {
    fontWeight: "500",
    fontFamily: "Inter_500Medium",
    fontSize: 20,
    lineHeight: 24,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "#FFFFFF",
  },
  textMeetups: {
    fontWeight: "600",
    fontFamily: "Inter_600SemiBold",
    fontSize: 20,
    lineHeight: 24,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "#FFFFFF",
  },
  textLevel: {
    fontWeight: "600",
    fontFamily: "Inter_600SemiBold",
    fontSize: 20,
    lineHeight: 24,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "#FFFFFF",
  },

  galleryContainer: {
    flex: 2,
    justifyContent: "center",
    flexDirection: 'column',
    //flexWrap: 'wrap',
    marginTop: "12%",
    marginBottom: "-4%",

  },
  horizontalBarrier: {
    height: 5,
    marginLeft: "7%",
    marginRight: "7%",
    flex: 1,
    backgroundColor: "#9B6EB7",
    borderRadius: 20,
  },
  imageTexts: {
    marginTop: "5%",
    marginLeft: "7%",
    marginRight: "7%",
    //height: 100,
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    //backgroundColor: "orange",

  },
  textContainer: {
    //marginLeft: "7%",
    //marginRight: "7%",
    //height: 100,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    //backgroundColor: "green",
  },
  title: {
    marginBottom: "2%",
    flex: 1,
    flexWrap: "wrap",
    fontWeight: "700",
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    //backgroundColor: "red",
    lineHeight: 34,
    letterSpacing: 0.055,
    color: "white",
    
  },
  subheadingContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    //backgroundColor: "green",
  },
  subheading: {
    flex: 1,
    flexWrap: "wrap",
    color: "white",
    textAlign: "left",
    fontWeight: "500",
    fontFamily: "Inter_500Medium",
    fontSize: 20,
    lineHeight: 24,
    //display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    marginBottom: "5%",
    //backgroundColor: "blue",
  },
  galleryImages: {
    height: "100%",
    width: "86%",
    marginTop: "2%",
    //marginBottom: "10%",
    marginLeft: "7%",
    marginRight: "7%",
    //paddingRight: 10,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    //backgroundColor: 'red',
  },
  placeholderImage: {
    height: 100,
    width: 100,
    marginBottom: 15,
  },
  aboutmeBox: {
    flexWrap: "wrap",
    height: 180,
    fontFamily: "Inter_200ExtraLight",
    fontSize: 24,
    margin: "7%",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#575658",
    color: "#FFF",
    //opacity: .55,
    borderRadius: 10,
    borderColor: "#575658",
  },
});
