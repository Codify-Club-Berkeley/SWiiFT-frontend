import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Login({ navigation }) {
  const onLocalPressNav = () => {
    navigation.navigate("Start");
  };
  const onTravelerPressNav = () => {
    navigation.navigate("Start");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Begin</Text>
      <Text style={styles.bigText}>
        my <Text style={styles.bigTextColor}>adventure</Text>
      </Text>
      <Text style={styles.thirdLine}>as a...</Text>
      <Image
        style={styles.image}
        source={require("../../assets/swiiftPictureLogo.png")}
        resizeMode="contain"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onLocalPressNav} style={styles.button}>
          <Text style={styles.buttonText}>local</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onTravelerPressNav} style={styles.button}>
          <Text style={styles.buttonText}>traveler</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    width: 400,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#2D2C2E",
  },
  smallText: {
    alignSelf: "flex-start",
    paddingLeft: 40,
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  thirdLine: {
    alignSelf: "flex-end",
    fontSize: 25,
    color: "white",
    paddingRight: 40,
    fontWeight: "bold",
  },
  bigText: {
    paddingLeft: 40,
    alignSelf: "flex-start",
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
  bigTextColor: {
    color: "#9B6EB7",
    fontWeight: "bold",
    fontSize: 40,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    width: 150,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "white",
    height: 60,
    justifyContent: "center",
    backgroundColor: "#2D2C2E",
    marginHorizontal: 20,
  },
  buttonText: {
    alignSelf: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
