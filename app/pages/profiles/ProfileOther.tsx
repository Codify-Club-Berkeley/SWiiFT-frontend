import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Button,
  Touchable,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  Inter_200ExtraLight,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import EditButton from "../../components/buttons/EditButton";
import texts from "../../styles/TextStyles";
import colors from "../../styles/ColorStyles";
import MoreInfoButton from "../../components/buttons/MoreInfoButton";
import RectangleTextEntry from "../../components/entry-fields/RectangleTextEntry";

import LinearGradient from "react-native-linear-gradient"

export default function Profile({navigation}:{navigation:any}) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>

        {/********* Header Section *********/}
        <ImageBackground source={require("../../assets/cover-pic.png")} style={styles.backgroundImage}>
          <View style={styles.header}>
            <View style={styles.leftHeader}>
              <Image source={require("../../assets/ProfileEMPTY.png")} style={styles.profileImg}></Image>
            </View>
            <View style={styles.rightHeader}>
              <Text style={styles.textAge}>XX Gender</Text>
              <Text style={styles.textName}>First</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.header}>
          <View style={styles.leftHeader}></View>
          <View style={styles.rightHeader}>
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/chat.png")}
                style = {styles.editIcon}
              />
            </TouchableOpacity>
            <Text style={styles.cityName}>City Name</Text>
          </View>
        </View>
        <View style={styles.compatibilityContainer}>
          <View style={styles.compatibilityLeft}>
            <Text style={[texts.header, {letterSpacing: 0.5}]}>Your Compatibility!</Text>
          </View>
          <View style={styles.compatibilityRight}>
            <MoreInfoButton onPress={undefined}></MoreInfoButton>
          </View>
        </View>
        <View style={[styles.compatibilityBar, colors.ovalButtonPurple]}></View>
        {/********* Profile Data *********/}

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

       {/********* Image Gallery *********/}

        <View style={styles.galleryContainer}>
          <View style={styles.horizontalBarrier}></View>
          <View style={styles.imageTexts}>
            <View style={styles.textContainer}>
              <Text style={[styles.title, {paddingBottom: 10}]}>Image Gallery</Text>
            </View>
          </View>
          <View style={styles.galleryImages}>
            <Image
              source={require("../../assets/placeholder.png")}
              style={styles.placeholderImage}
            />
            <Image
              source={require("../../assets/placeholder.png")}
              style={styles.placeholderImage}
            />
            <Image
              source={require("../../assets/placeholder.png")}
              style={styles.placeholderImage}
            />
          </View>
        </View>

        {/********* About Me Section *********/}

        <View style={[styles.galleryContainer, {paddingBottom: 30}]}>
          <View style={styles.horizontalBarrier}></View>
          <View style={styles.imageTexts}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>About Me</Text>
            </View>
            <View style={styles.subheadingContainer}>
              <Text style={styles.subheading}>
                No information to show
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.greyhorizontalBarrier}></View>

        {/********* Info Section *********/}

        <View style={styles.infoContainer}>
          <View style={styles.infoTexts}>
            <View style={styles.textContainer}>
              <Text style={styles.infoTitle}>Home Location</Text>
            </View>
            <Text style={styles.infoText}>No city to show</Text>
            <Text style={styles.infoText}>No state to show</Text>
            <Text style={styles.infoText}>No country to show</Text>
          </View>
          <View style={styles.greyhorizontalBarrier}></View>
          <View style={styles.infoTexts}>
            <View style={styles.textContainer}>
              <Text style={styles.infoTitle}>Education</Text>
            </View>
            <Text style={styles.infoText}>No university to show</Text>
            <Text style={styles.infoText}>No major to show</Text>
            <Text style={styles.infoText}>No graduation year to show</Text>
          </View>
          <View style={styles.greyhorizontalBarrier}></View>
          <View style={styles.infoTexts}>
            <View style={styles.textContainer}>
              <Text style={styles.infoTitle}>Work</Text>
            </View>
            <Text style={styles.infoText}>No job title to show</Text>
            <Text style={styles.infoText}>No industry to show</Text>
          </View>
          <View style={styles.greyhorizontalBarrier}></View>
          <View style={styles.infoTexts}>
            <View style={styles.textContainer}>
              <Text style={styles.infoTitle}>Language</Text>
            </View>
            <Text style={styles.infoText}>No primary language to show</Text>
            <Text style={styles.infoText}>No other language to show</Text>
          </View>
          <View style={styles.horizontalBarrier}></View>
        </View>

        {/********* Hobbies *********/}

        <View style={styles.galleryContainer}>
          <View style={styles.imageTexts}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Hobbies & Organizations</Text>
            </View>
          </View>
        </View>
        <View style={[styles.hobbies, colors.ovalButtonPurple]}>
          <Text style={styles.hobbyText}>hobby</Text>
        </View>
        <View style={[styles.hobbyArea]}></View>
        <View style={styles.horizontalBarrier}></View>

        {/********* Travel *********/}

        <View style={[styles.galleryContainer, {marginTop: "5%"}]}>
          <View style={[styles.imageTexts,]}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Travel</Text>
            </View>
          </View>
        </View>
        <View style={[styles.infoTexts, {marginTop: "5%"}]}>
          <View style={styles.textContainer}>
            <Text style={styles.infoTitle}>Country count</Text>
          </View>
          <Text style={styles.infoText}>No country count to show</Text>
        </View>
        <View style={styles.greyhorizontalBarrier}></View>
        <View style={[styles.infoTexts]}>
          <View style={styles.textContainer}>
            <Text style={styles.infoTitle}>Favorite country traveled</Text>
          </View>
          <Text style={styles.infoText}>No country to show</Text>
        </View>
        <View style={styles.greyhorizontalBarrier}></View>

        {/********* Local Expertise *********/}

        <View style={[styles.infoTexts, {marginTop: "8%"}]}>
          <View style={[styles.textContainer]}>
            <Text style={[styles.title, {flex: 1}]}>Local Expertise</Text>
            <MoreInfoButton onPress={undefined}></MoreInfoButton>
          </View>
          <View style={styles.map}></View>
          <Text style={styles.infoText}>Activity</Text>
          <Text style={styles.infoText}>No activity to show</Text>
        </View>
        
        {/********* Report Buttons *********/}
        <View style={[styles.greyhorizontalBarrier, {marginTop: 100}]}></View>

        <View style={[styles.footer]}>
          <View style={styles.leftFooter}>
            <TouchableOpacity onPress={undefined}>
              <View style={[styles.flagButton]}>
                <Image source={require("../../assets/images/flag.png")}></Image>
                <Text style={styles.reportText}>Flag</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rightFooter}>
            <TouchableOpacity onPress={undefined}>
              <View style={[styles.flagButton]}>
                <Image source={require("../../assets/images/block.png")}></Image>
                <Text style={styles.reportText}>Block</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={[styles.greyhorizontalBarrier, {marginTop: 10}]}></View>
        <StatusBar style="auto" />

        {/* Sample Button */}
        <Button
          title="sample nav"
          onPress={() => {
            navigation.navigate("FAQ");
          }}
        ></Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    //backgroundColor: "#2D2C2E",
    //alignItems: "center",
    //justifyContent: "center",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    //width: "100%",
    //height: "%",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "repeat",
    //justifyContent: "center",
    //height: 230,
  },
  profileImg: {
    top: 50,
    marginTop: 80,
    marginLeft: 30,
    height: 150,
    width: 150,
  },
  leftHeader: {
    flex: 1,
    flexDirection: "column",
    //backgroundColor: "red",
  },
  rightHeader: {
    flex: 1,
    flexDirection: "column-reverse",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    //backgroundColor: "green",
  },
  textName: {
    //left: "50%",
    //marginTop: 160,
    paddingBottom: 10,
    fontFamily: "Inter_700Bold",
    fontWeight: "700",
    fontSize: 28,
    //lineHeight: 29,
    //display: "flex",
    //alignItems: "center",
    //letterSpacing: 0.055,
    color: "#FFFFFF",
  },
  textAge: {
    //left: "50%",
    //paddingLeft: 30,
    //marginRight: 20,
    //marginTop: 160,
    fontFamily: "Inter_400Regular",
    fontWeight: "600",
    fontSize: 24,
    //lineHeight: 29,
    //display: "flex",
    //alignItems: "flex-start",
    //justifyContent: "flex-start",
    //letterSpacing: 0.055,
    color: "white",
  },
  editIcon: {
    //left: "50%",
    //marginTop: "-40%",
  },
  cityName: {
    //left: "50%",
    //top: "-74%",
    paddingTop: 5,
    paddingBottom: 15,
    fontFamily: "Inter_600SemiBold",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 29,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "white",
  },
  compatibilityContainer: {
    paddingTop: 25,
    paddingBottom: 10,
    marginLeft: "12%",
    marginRight: "12%",
    flexDirection: "row",
    //backgroundColor: "blue",
    //justifyContent: "center",
    alignItems: "center",
  },
  compatibilityLeft: {
    flex: 1,
    alignItems: "flex-end"
  },
  compatibilityRight: {
    alignItems: "flex-end",
    flex: .3,
    //backgroundColor: "red",
  },
  compatibilityBar: {
    marginLeft: "12%",
    marginRight: "12%",
    marginBottom: 15,
    //width: "100%",
    height: 20,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 50 / 4,
  },
  scrollView: {
    backgroundColor: "#2D2C2E",
  },
  profileData: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    //marginTop: "28%",
    marginBottom: "-12%",
  },
  leftItem: {
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
  centerItem: {
    marginTop: "10%",
    flex: 3,
    flexDirection: "column",
    //backgroundColor: 'green'
    alignItems: "center",
    justifyContent: "center",
  },
  rightItem: {
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
    flex: 0.1,
    backgroundColor: "white",
    borderRadius: 3 / 2,
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
    borderRadius: 50 / 4,
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
    borderRadius: 50 / 2,
    justifyContent: "center",
  },
  levelNum: {
    marginLeft: 50 / 3,
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
    flexDirection: "column",
    //flexWrap: 'wrap',
    marginTop: "12%",
    marginBottom: "-4%",
  },
  horizontalBarrier: {
    height: 5,
    marginTop: "7%",
    marginBottom: "7%",
    marginLeft: "7%",
    marginRight: "7%",
    flex: 1,
    backgroundColor: "#9B6EB7",
    borderRadius: 20,
  },
  imageTexts: {
    //marginTop: "5%",
    marginLeft: "7%",
    marginRight: "7%",
    //marginBottom: "4%",
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
    justifyContent: "flex-start",
    alignContent: "flex-start"
    //backgroundColor: "green",
  },
  title: {
    marginBottom: "2%",
    flex: 3,
    //flexWrap: "wrap",
    fontWeight: "700",
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    //backgroundColor: "red",
    //lineHeight: 32,
    letterSpacing: 0.055,
    color: "white",
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  subheadingContainer: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: "7%",
    //flexWrap: "wrap",
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
    //lineHeight: 33,
    //display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    //marginBottom: "5%",
    //backgroundColor: "blue",
  },
  galleryImages: {
    height: "100%",
    width: "86%",
    marginTop: "2%",
    marginBottom: "-7%",
    marginLeft: "7%",
    marginRight: "7%",
    //paddingRight: 10,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    //backgroundColor: 'red',
  },
  placeholderImage: {
    height: 100,
    width: 100,
    marginBottom: 15,
  },
  aboutmeBox: {
    margin: "7%",
    marginBottom: "-1%",
    padding: 10,
  },
  infoContainer: {
    flex: 2,
    justifyContent: "center",
    flexDirection: "column",
    //flexWrap: 'wrap',
    marginTop: "2%",
    marginBottom: "-4%",
  },
  infoTexts: {
    //marginTop: "5%",
    marginLeft: "7%",
    marginRight: "7%",
    //marginBottom: "4%",
    //height: 100,
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    //backgroundColor: "orange",
  },
  infoTitle: {
    flex: 1,
    //flexWrap: "wrap",
    fontWeight: "700",
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
    //backgroundColor: "red",
    //lineHeight: 32,
    letterSpacing: 0.055,
    color: "white",
    paddingTop: "1%",
  },
  infoText: {
    flex: 1,
    flexWrap: "wrap",
    color: "white",
    textAlign: "left",
    fontWeight: "500",
    fontFamily: "Inter_500Medium",
    fontSize: 20,
    //lineHeight: 33,
    //display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    paddingTop: "3%",
    //marginBottom: "5%",
    //backgroundColor: "blue",
  },
  greyhorizontalBarrier: {
    height: 5,
    marginTop: "4%",
    marginBottom: "2%",
    marginLeft: "7%",
    marginRight: "7%",
    flex: 1,
    backgroundColor: "#575658",
    borderRadius: 20,
  },
  hobbies: {
    marginTop: "10%",
    marginLeft: "7%",
    width: 160,
    height: 50,
    //backgroundColor: "#E0E0E0",
    borderRadius: 50 / 2,
    //alignContent: "center",
    //textAlign: "center",
    justifyContent: "center"
  },
  hobbyText: {
    marginLeft: 180 / 3,
    fontWeight: "500",
    fontFamily: "Inter_500Medium",
    fontSize: 14,
    lineHeight: 17  ,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "#FFFFFF",
  },
  hobbyArea: {
    height: 150,
  },
  map: {
    marginTop: 2,
    width: "100%",
    height: 150,
    backgroundColor: "#575658",
    borderRadius: 50 / 4,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: "7%",
    marginRight: "7%",
    //width: "100%",
    //height: "%",
  },
  leftFooter: {
    flex: 1,
    flexDirection: "column",
    //backgroundColor: "red",
    alignItems: "center",
  },
  rightFooter: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    //backgroundColor: "green",
  },
  flagButton: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 30,
    //marginTop: "10%",
    //marginLeft: "7%",
    width: 160,
    height: 50,
    backgroundColor: "rgba(155, 110, 183, 0.5)",
    borderRadius: 50 / 2,
    borderWidth: 3,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  reportText: {
    paddingLeft: 10,
    textAlign: "center",
    fontWeight: "500",
    fontFamily: "Inter_500Medium",
    fontSize: 22,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    textTransform: "uppercase",
    color: "#FFFFFF",
  }
});
