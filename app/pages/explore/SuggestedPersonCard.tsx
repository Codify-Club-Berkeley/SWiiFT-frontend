import React from "react";
import { Image, ImageBackground, Text, View, StyleSheet } from "react-native";

const SuggestedPersonCard = ({ firstname, status, image, flag }) => {
  return (
    <View style={styles.Container}>
      <ImageBackground source={{ uri: image }} imageStyle={styles.ProfileImage}>
        <View
          style={{ flexDirection: "column", alignItems: "center", top: 152 }}
        >
          <View
            style={{ flexDirection: "row", alignItems: "center", right: 5 }}
          >
            <View
              style={
                status === "Local" ? styles.StatusLocal : styles.StatusTraveler
              }
            >
              <Text style={styles.StatusText}>{status}</Text>
            </View>
            <Image source={{ uri: flag }} style={styles.FlagImage} />
          </View>
          <View style={styles.CompatibilityBarView} />
        </View>
      </ImageBackground>
      <View style={{ position: "absolute", bottom: 0 }}>
        <Text style={styles.NameText}>{firstname}</Text>
      </View>
    </View>
  );
};

const Suggested = () => {
  //Example
  return (
    <View>
      <SuggestedPersonCard
        firstname="Oski"
        status="Local"
        image="https://i0.wp.com/newspack-berkeleyside-cityside.s3.amazonaws.com/wp-content/uploads/2016/09/OskiRappels500.jpg"
        flag="https://pbs.twimg.com/media/ET0Tyl-UUAACA-a?format=jpg"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    position: "absolute",
    width: 172,
    height: 258,
  },
  ProfileImage: {
    width: 172,
    height: 225,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "white",
  },
  FlagImage: {
    width: 33,
    height: 33,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "white",
  },
  StatusLocal: {
    height: 22,
    width: 94,
    borderRadius: 5,
    backgroundColor: "#5982DB",
    margin: 8,
    marginHorizontal: 13,
  },
  StatusTraveler: {
    height: 22,
    width: 94,
    borderRadius: 5,
    backgroundColor: "#8F6FE0",
    margin: 8,
    marginHorizontal: 13,
  },
  StatusText: {
    alignSelf: "center",
    color: "white",
    fontSize: 12,
    padding: 3,
  },
  CompatibilityBarView: {
    height: 13,
    width: 156,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
    margin: 8,
  },
  NameText: {
    color: "white",
    fontSize: 20,
    marginVertical: 5,
  },
});

export default Suggested;
