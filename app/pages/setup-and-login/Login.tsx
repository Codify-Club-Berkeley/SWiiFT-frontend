import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/login-images/beach.png")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center", width: "100%" }}
      >
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../../assets/images/swiift-small-logo.png")}
            resizeMode="contain"
          />
          <Text style={styles.text}>Welcome back!</Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("Tab")}
          >
            <Text style={styles.loginText}>LOG IN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  image: {
    width: "30%",
    height: "30%",
  },
  text: {
    alignSelf: "left",
    paddingHorizontal: 20,
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    paddingTop: 10,
  },
  loginButton: {
    width: "90%",
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "white",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9B6EB7",
    marginTop: 15,
  },
  signUpText: {
    alignSelf: "center",
    color: "white",
    fontSize: 20,
  },
});

// /**
//  * Fix for "navigation implicitly has type any"
//  * https://stackoverflow.com/questions/63132548/react-navigation-5-error-binding-element-navigation-implicitly-has-an-any-ty
//  * https://reactnavigation.org/docs/typescript/
//  */