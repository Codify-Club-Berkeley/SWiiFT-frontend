import { StyleSheet, Text, ImageBackground, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function Login({navigation}) {
  const onLocalPressNav = () => {
    navigation.navigate('SignUp')
  }
  const onTravelerPressNav = () => {
    navigation.navigate('MainPage')
  }
  
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.bigText}>Begin</Text> 
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: "#2D2C2E",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: "30%",
  },
  bigText: {
    fontSize: 40,
    color: 'white',
  },
  bigTextColor: {
    color: "#9B6EB7",
    fontWeight: "bold",
    fontSize: 16
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 120,
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