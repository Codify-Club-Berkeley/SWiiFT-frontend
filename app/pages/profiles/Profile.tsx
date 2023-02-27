import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function Profile() {
  return (
    <ScrollView style = {styles.scrollView}>
      <View style={styles.container}>

        {/*   Header section    */}

        <View style={styles.header}>
          <Image 
            source={require('../../assets/cover-pic.png')} 
            style = {{
              height: "90%",
              width: "88%"
            }}
          />
        </View>
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
        <Text style={styles.textAge}>XX</Text>
        <Text style={styles.textGender}>Gender</Text>

        {/*   Profile data section    */}

        <View style={styles.profileData}>
          <View style={styles.item}>
            <View style={styles.rectangle}></View>
          </View>
          <View style={styles.centerItem}><Text style={styles.textMeetupsNum}>0</Text></View>
          <View style={styles.item}>
            <View style={styles.levelCircle}>
              <Text style={styles.levelNum}>1</Text>
            </View>
          </View>
          <View style={styles.item}><Text style={styles.textCTR}>CTR</Text></View>
          <View style={styles.centerItem}><Text style={styles.textMeetups}>Meetups</Text></View>
          <View style={styles.item}><Text style={styles.textLevel}>Level</Text></View>
        </View>

        {/*   Image gallery section    */}

        <View style={styles.galleryContainer}>
          <Text style={styles.galleryTitle}>Image Gallery</Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    width: 428,
    height: 200,
    left: 0,
    top: 0,
  },
  image: {
    position: "absolute",
    left: "7%",
    top: 120,
  },
  textName: {
    position: "absolute",
    width: 214,
    height: 37,
    left: "45%",
    top: 150,
    //fontFamily: "Inter"
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 29,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "#FFFFFF",
    
  },
  textAge: {
    position: "absolute",
    width: 214,
    height: 37,
    left: "45%",
    top: 180,
    //fontFamily: "Inter"
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 29,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "#FFFFFF",
    
  },
  textGender: {
    position: "absolute",
    width: 214,
    height: 37,
    left: "55%",
    top: 180,
    //fontFamily: "Inter"
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 29,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "#FFFFFF",
    
  },
  scrollView: {
    backgroundColor: "#2D2C2E",
  },
  profileData: {
    justifyContent: "center",
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 260,
    
  },
  item :{
    alignItems: "center",
    justifyContent: "center",
    width: 125, 
    height: 50,
  },
  centerItem :{
    alignItems: "center",
    justifyContent: "center",
    width: 125,
    height: 50,
    position: "relative",
    borderColor: "#FFFFFF",
    borderRightWidth: 5,
    borderLeftWidth: 5,
  },
  rectangle: {
    marginTop: 10,
    width: 75,
    height: 50,
    backgroundColor: "grey",
    borderRadius: 50/4
  },
  textMeetupsNum: {
    fontWeight: "700",
    fontSize: 50,
    lineHeight: 61,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "#FFFFFF",
  },
  levelCircle: {
    marginTop: 10,
    width: 50,
    height: 50,
    backgroundColor: "#BC7BBC",
    borderRadius: 50/2,
    justifyContent: "center",
  },
  levelNum: {
    marginLeft: 50/3,
    fontWeight: "700",
    fontSize: 30,
    lineHeight: 39,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "#FFFFFF",
  },
  textCTR: {
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 24,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "#FFFFFF",
  },
  textMeetups: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "#FFFFFF",
  },
  textLevel: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "#FFFFFF",
  },

  galleryContainer: {
    //position: "relative",
    margin: 25,
    borderTopWidth: 5,
    borderColor: "#9B6EB7",
    alignSelf: "flex-start",
  },
  galleryTitle: {
    marginTop: 20,
    textAlign: "left",
    
  }
});
