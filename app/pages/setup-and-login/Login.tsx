import {
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Login({ navigation }) {
  const onFooterLinkPressNav = () => {
    navigation.navigate("SignUp");
  };
  const onForgotLinkPressNav = () => {
    navigation.navigate("MainPage");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../../assets/images/login-images/beach.png")}
      >
        <Image
          style={styles.image}
          source={require("../../assets/images/swiift-small-logo.png")}
          resizeMode="contain"
        />
        <Text style={styles.text}>Welcome back!</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#2D2C2E"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#2D2C2E"
          secureTextEntry
          placeholder="Password"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <Text onPress={onForgotLinkPressNav} style={styles.forgot}>
          Forgot password?
        </Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Tab")}
        >
          <Text style={styles.loginText}>LOG IN</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Don't have an account?{" "}
            <Text onPress={onFooterLinkPressNav} style={styles.footerLink}>
              Sign up
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 400,
  },
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#2D2C2E",
  },
  forgot: {
    color: "white",
    alignSelf: "flex-end",
    marginRight: 20,
  },
  image: {
    marginTop: 140,
    alignSelf: "center",
    width: 100,
    height: 100,
  },
  text: {
    alignSelf: "center",
    paddingHorizontal: 20,
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 20,
  },
  input: {
    alignSelf: "center",
    height: 60,
    width: 350,
    borderRadius: 5,
    borderColor: "white",
    overflow: "hidden",
    backgroundColor: "white",
    opacity: 0.7,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 19,
    paddingLeft: 16,
    placeholderTextColor: "#2D2C2E",
  },
  loginButton: {
    alignSelf: "center",
    width: 350,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "white",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9B6EB7",
    marginTop: 70,
  },
  loginText: {
    alignSelf: "center",
    color: "white",
    fontSize: 20,
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 120,
  },
  footerText: {
    fontSize: 16,
    color: "white",
  },
  footerLink: {
    color: "#9B6EB7",
    fontWeight: "bold",
    fontSize: 16,
  },
});
