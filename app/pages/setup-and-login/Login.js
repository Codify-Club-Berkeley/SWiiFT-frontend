import { StyleSheet, Text, ImageBackground, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function Login({navigation}) {
  const onFooterLinkPressNav = () => {
    navigation.navigate('SignUp')
  }


  return (
    <View style={styles.container}>
      {/* <ImageBackground style={styles.background} source={require('../../assets/loginBackground.png')} resizeMode = "cover" > */}
        <Image style={styles.image} source={require('../../assets/swiift-small-logo.png')} resizeMode = "contain" />
        <Text style={styles.text}>Welcome back!</Text>
        <TextInput
          style={styles.input}
          placeholder='Email'
          placeholderTextColor="#2D2C2E"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#2D2C2E"
          secureTextEntry
          placeholder='Password'
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>LOG IN</Text> 
        </TouchableOpacity>
        <View style={styles.footerView}>
            <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPressNav} style={styles.footerLink}>Sign up</Text></Text>
        </View>
      {/* </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: "#2D2C2E",
  },
  image: {
    marginTop: 70,
    width: "30%",
    height: "30%",
  },
  text: {
    alignSelf: "center",
    paddingHorizontal: 20,
    color: "white",
    fontSize: 45,
    fontWeight: "bold",
  },
  input: {
    height: 48,
    width: "80%",
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16
  },
  loginButton: {
    width:"80%",
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "white",
    height: 60,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#9B6EB7",
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
    marginTop: 120
  },
  footerText: {
    fontSize: 16,
    color: 'white'
  },
  footerLink: {
    color: "#9B6EB7",
    fontWeight: "bold",
    fontSize: 16
  }
});