import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
} from "react-native";

export default function Login({ navigation }) {
  const onLoginPress = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../../assets/splash2.png")}
      >
        <Text style={styles.text}>Personalize {"\n"}your profile</Text>
        <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#2D2C2E",
  },
  text: {
    alignSelf: "center",
    paddingHorizontal: 20,
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
    marginTop: "80%",
  },
  button: {
    marginTop: "auto",
    marginBottom: 90,
    alignSelf: "center",
    width: 350,
    borderRadius: 30,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BC7BBC",
  },
  buttonText: {
    alignSelf: "center",
    color: "black",
    fontSize: 20,
  },
});
