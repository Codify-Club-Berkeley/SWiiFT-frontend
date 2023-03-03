import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/swift-small-logo.png')} resizeMode = "contain" />
      <Text style={styles.text}>Welcome back!</Text>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOG IN</Text> 
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D2C2E',
    alignItems: 'center',
    flexDirection: 'column',
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
    width:"90%",
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "white",
    height: 60,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#9B6EB7",
    marginTop: 15,
  },
  signUpText: {
    alignSelf: "center",
    color: "white",
    fontSize: 20,
  },
});