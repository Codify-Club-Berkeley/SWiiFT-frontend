import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function MainPage() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/image.png')} resizeMode = "contain" />
      <Text style={styles.text}>Travel the {"\n"}right way.</Text>
      <Text style={styles.subtext}>Experience with locals.</Text>
      <TouchableOpacity style={styles.loginButton} >
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpText}>SIGN UP</Text> 
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
    width: "100%",
    height: "50%",
  },
  text: {
    alignSelf: "left",
    paddingHorizontal: 20,
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    paddingTop: 10,
  },
  subtext: {
    alignSelf: "left",
    paddingHorizontal: 20,
    color: "white",
    fontSize: 20, 
    paddingTop: 10,
  },
  loginButton: {
    width:"90%",
    borderRadius: 12,
    height: 60,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor:"#BC7BBC",
  },
  loginText: {
    alignSelf: "center",
    color: "#2D2C2E",
    fontSize: 20,
  },
  signUpButton: {
    width:"90%",
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "white",
    height: 60,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#2D2C2E",
    marginTop: 15,
  },
  signUpText: {
    alignSelf: "center",
    color: "white",
    fontSize: 20,
  },
});
